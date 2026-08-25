/**
 * Main Cloudflare Worker entry point
 * Handles the inquiry API and serves the static React app.
 */
import { EmailMessage } from 'cloudflare:email'
import { createMimeMessage, Mailbox } from 'mimetext'

/** Where inquiry notifications are delivered. Must be a verified
 *  destination address in Cloudflare Email Routing for this zone. */
const NOTIFY_TO = 'info@ecofiberbd.com'
/** Sender must be on a domain in this Cloudflare account. */
const NOTIFY_FROM = 'website@ecofiberbd.com'
const NOTIFY_FROM_NAME = 'EcoFiber BD Website'

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  })

/** Strip CR/LF so user input can never inject extra MIME headers. */
const clean = (v, max = 2000) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)

function buildBody(d) {
  const rows = [
    ['Name', d.name],
    ['Email', d.email],
    ['Phone', d.phone],
    ['Country', d.country],
    ['Product', d.product],
  ].filter(([, v]) => v)

  return [
    'New inquiry from ecofiberbd.com',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    d.message,
    '',
    '—',
    `Received: ${new Date().toUTCString()}`,
    'Reply directly to this email to respond to the sender.',
  ].join('\n')
}

/**
 * Handle inquiry submissions: validate, then email the details to NOTIFY_TO.
 * Errors are reported honestly so the site can offer WhatsApp/email fallback
 * rather than showing a false "sent" confirmation.
 */
async function handleCreateInquiry(request, env) {
  let data
  try {
    data = await request.json()
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  const d = {
    name: clean(data.name, 200),
    email: clean(data.email, 200),
    phone: clean(data.phone, 60),
    country: clean(data.country, 100),
    product: clean(data.product, 200) || 'General Inquiry',
    // newlines are meaningful in the message body, so only trim + cap it
    message: String(data.message ?? '').trim().slice(0, 5000),
  }

  if (!d.name || !d.email || !d.country || !d.message) {
    return json({ error: 'Please fill in your name, email, country and message.' }, 400)
  }
  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(d.email)) {
    return json({ error: 'Please enter a valid email address.' }, 400)
  }

  if (!env.SEB) {
    console.error('send_email binding (SEB) is not configured')
    return json({ error: 'Email is not configured on the server.' }, 503)
  }

  try {
    const msg = createMimeMessage()
    msg.setSender({ name: NOTIFY_FROM_NAME, addr: NOTIFY_FROM })
    msg.setRecipient(NOTIFY_TO)
    // so hitting Reply in the inbox answers the buyer directly
    // must be a Mailbox instance - mimetext rejects plain objects/strings here
    msg.setHeader('Reply-To', new Mailbox({ name: d.name, addr: d.email }, { type: 'Reply-To' }))
    msg.setSubject(`New inquiry — ${d.product} — ${d.name}`)
    msg.addMessage({ contentType: 'text/plain', data: buildBody(d) })

    await env.SEB.send(new EmailMessage(NOTIFY_FROM, NOTIFY_TO, msg.asRaw()))

    return json({
      success: true,
      message: 'Thank you! Your inquiry has been received. We will respond within 24 hours.',
    }, 201)
  } catch (error) {
    console.error('Failed to send inquiry email:', error && error.message)
    return json({ error: 'We could not send your message just now.' }, 502)
  }
}

/**
 * Handle preflight CORS requests
 */
function handleCORS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

/**
 * Serve static files or SPA index
 */
async function handleStaticAsset(request, env) {
  const url = new URL(request.url)

  let response = await env.ASSETS.fetch(request)

  if (response.status === 404) {
    // If file not found, serve index.html for SPA routing
    const indexRequest = new Request(new URL('/', url).toString(), {
      method: 'GET',
      headers: request.headers,
    })
    response = await env.ASSETS.fetch(indexRequest)
  }

  return response
}

/**
 * Main handler
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === 'OPTIONS') {
      return handleCORS()
    }

    if (url.pathname === '/api/inquiries' && request.method === 'POST') {
      return handleCreateInquiry(request, env)
    }

    return handleStaticAsset(request, env)
  },
}
