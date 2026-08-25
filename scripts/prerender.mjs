/**
 * Static prerender step — runs after `vite build`.
 *
 * Boots a tiny static server over ./dist, drives each route with a headless
 * browser, waits for React + the useSEO/JSON-LD effects to run, then writes the
 * fully-rendered HTML back to disk as <route>/index.html. Crawlers (Bing,
 * DuckDuckGo, social + AI bots) that don't execute JS now receive real content
 * and the correct per-page <title>/meta/schema.
 *
 * Fails soft: if a browser can't launch (e.g. a minimal CI image), it logs a
 * warning and exits 0, leaving the normal SPA output untouched.
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')
const PORT = 5000 + Math.floor(Math.random() * 500)

// ---- routes to prerender ---------------------------------------------------
const BLOG_SLUGS = [
  'banana-fiber-sustainable-fashion-2026',
  'banana-fiber-eco-friendly-packaging',
  'banana-fiber-price-guide-2026',
  'banana-fiber-vs-jute',
  'how-banana-fiber-is-made',
  'uses-of-banana-fiber',
]
const ROUTES = [
  '/',
  '/about',
  '/products',
  '/products/1',
  '/products/2',
  '/products/3',
  '/blog',
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
  '/contact',
  '/quote',
  '/privacy',
  '/terms',
]

// ---- minimal static server (SPA fallback + directory index) ----------------
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf',
}

function send(res, filePath) {
  const ext = path.extname(filePath).toLowerCase()
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
  fs.createReadStream(filePath).pipe(res)
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  const candidate = path.join(DIST, urlPath)
  // exact file
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return send(res, candidate)
  // directory index
  const indexFile = path.join(candidate, 'index.html')
  if (fs.existsSync(indexFile)) return send(res, indexFile)
  // SPA fallback
  return send(res, path.join(DIST, 'index.html'))
})

// ---- prerender -------------------------------------------------------------
async function run() {
  let puppeteer
  try {
    puppeteer = (await import('puppeteer')).default
  } catch {
    console.warn('[prerender] puppeteer not installed — skipping prerender (SPA output kept).')
    return
  }

  await new Promise((resolve) => server.listen(PORT, resolve))
  const base = `http://localhost:${PORT}`

  let browser
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
  } catch (err) {
    console.warn(`[prerender] could not launch browser — skipping prerender. ${err.message}`)
    server.close()
    return
  }

  let ok = 0
  for (const route of ROUTES) {
    const page = await browser.newPage()
    try {
      await page.setViewport({ width: 1280, height: 900 })
      await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 45000 })
      // wait for React to mount real content
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root')
          return root && root.children.length > 0 && document.title.length > 0
        },
        { timeout: 20000 }
      )
      // trigger IntersectionObserver reveals + lazy content
      await page.evaluate(async () => {
        await new Promise((r) => {
          let y = 0
          const step = () => {
            window.scrollTo(0, y)
            y += window.innerHeight
            if (y < document.body.scrollHeight) setTimeout(step, 40)
            else { window.scrollTo(0, 0); setTimeout(r, 120) }
          }
          step()
        })
      })

      const html = '<!doctype html>\n' + (await page.content()).replace(/^<!doctype html>/i, '').trimStart()

      const outDir = route === '/' ? DIST : path.join(DIST, route)
      fs.mkdirSync(outDir, { recursive: true })
      fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8')
      ok++
      console.log(`[prerender] ✓ ${route}`)
    } catch (err) {
      console.warn(`[prerender] ✗ ${route} — ${err.message}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  server.close()
  console.log(`[prerender] done — ${ok}/${ROUTES.length} routes prerendered.`)
}

run().catch((err) => {
  console.warn(`[prerender] unexpected error, keeping SPA output: ${err.message}`)
  try { server.close() } catch {}
})
