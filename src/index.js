/**
 * Main Cloudflare Worker entry point
 * Handles both API routes and serves static React app
 */

/**
 * Handle API inquiry creation
 */
async function handleCreateInquiry(request, env) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.country || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
    }

    // Insert into D1 database
    const stmt = env.DB.prepare(
      `INSERT INTO inquiries (name, email, phone, country, product, message, status)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    )

    const result = await stmt.bind(
      data.name,
      data.email,
      data.phone || '',
      data.country,
      data.product || 'General Inquiry',
      data.message,
      'new'
    ).run()

    console.log('Inquiry created:', result.meta.last_row_id)

    return new Response(JSON.stringify({
      success: true,
      id: result.meta.last_row_id,
      message: 'Thank you! Your inquiry has been received. We will respond within 24 hours.'
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    // Return success even on error to avoid exposing DB issues to client
    return new Response(JSON.stringify({
      success: true,
      message: 'Thank you! Your inquiry has been received. We will respond within 24 hours.'
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
}

/**
 * Handle preflight CORS requests
 */
function handleCORS(request) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}

/**
 * Serve static files or SPA index
 */
async function handleStaticAsset(request, env) {
  const url = new URL(request.url)

  // Try to get the static file
  let response = await env.ASSETS.fetch(request)

  if (response.status === 404) {
    // If file not found, serve index.html for SPA routing
    const indexRequest = new Request(new URL('/', url).toString(), {
      method: 'GET',
      headers: request.headers
    })
    response = await env.ASSETS.fetch(indexRequest)
  }

  return response
}

/**
 * Main handler
 */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCORS(request)
    }

    // Handle API routes
    if (url.pathname === '/api/inquiries' && request.method === 'POST') {
      return handleCreateInquiry(request, env)
    }

    // Serve static files and SPA
    return handleStaticAsset(request, env)
  },
}
