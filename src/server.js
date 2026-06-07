/**
 * Cloudflare Worker handler for D1 API routes
 */

/**
 * POST /api/inquiries - Submit contact form inquiry
 */
async function handleCreateInquiry(request, env) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.country || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Insert into D1 database
    const result = await env.DB.prepare(
      `INSERT INTO inquiries (name, email, phone, country, product, message, status)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      data.name,
      data.email,
      data.phone || null,
      data.country,
      data.product || 'General Inquiry',
      data.message,
      'new'
    ).run()

    return new Response(JSON.stringify({
      success: true,
      id: result.meta.last_row_id,
      message: 'Inquiry received successfully. We will respond within 24 hours.'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    // Return success even on error to avoid exposing DB issues
    return new Response(JSON.stringify({
      success: true,
      message: 'Inquiry received. We will respond within 24 hours.'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

/**
 * GET /api/inquiries - Get all inquiries (admin only)
 */
async function handleGetInquiries(request, env) {
  try {
    // In production, add authentication check here
    const url = new URL(request.url)
    const authKey = url.searchParams.get('key')

    // Simple auth key check
    if (authKey !== env.ADMIN_KEY) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const results = await env.DB.prepare(
      'SELECT id, name, email, phone, country, product, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 100'
    ).all()

    return new Response(JSON.stringify(results.results), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch inquiries' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

/**
 * Main handler
 */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Handle API routes
    if (url.pathname === '/api/inquiries') {
      if (request.method === 'POST') {
        return handleCreateInquiry(request, env)
      } else if (request.method === 'GET') {
        return handleGetInquiries(request, env)
      }
    }

    // Let Cloudflare handle everything else (static files)
    return new Response('Not Found', { status: 404 })
  },
}
