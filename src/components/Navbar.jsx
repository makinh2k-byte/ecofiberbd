import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'

const WHATSAPP_NUMBER = '8801672268121'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20EcoFiber%20BD%2C%20I%20would%20like%20to%20inquire%20about%20your%20banana%20fiber%20products.`

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/products', label: 'Products' },
  { to: '/blog',     label: 'Blog'     },
  { to: '/contact',  label: 'Contact'  },
]

/**
 * Floating "pill" navigation: the bar is detached from the page edges and each
 * group (nav links / call-to-action) sits in its own rounded capsule. Over the
 * homepage hero the capsules are dark glass; once scrolled — and on every inner
 * page — they turn solid white.
 *
 * Note: Tailwind spacing utilities are dead in this project (see index.css), so
 * every padding/margin here is an inline style.
 */
export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location                = useLocation()
  const isHome                  = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  const onDark = isHome && !scrolled && !open
  const logo   = onDark ? logoDark : logoLight

  /** Shared capsule shell for each group in the bar. */
  const capsule = {
    alignItems: 'center',
    padding: '0.3rem',
    borderRadius: '9999px',
    transition: 'background 0.4s, box-shadow 0.4s, border-color 0.4s',
    ...(onDark
      ? { background: 'rgba(10,26,12,0.55)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 6px 24px rgba(0,0,0,0.18)' }
      : { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 6px 24px rgba(0,0,0,0.10)' }),
  }

  const linkStyle = active => ({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.55rem 1.05rem',
    borderRadius: '9999px',
    fontSize: '0.9375rem',
    fontWeight: 600,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background 0.25s, color 0.25s',
    ...(active
      ? { background: '#39962c', color: '#fff' }
      : { background: 'transparent', color: onDark ? 'rgba(255,255,255,0.88)' : '#4b5563' }),
  })

  const hoverIn = (e, active) => {
    if (active) return
    e.currentTarget.style.background = onDark ? 'rgba(255,255,255,0.12)' : 'rgba(57,150,44,0.10)'
    e.currentTarget.style.color = onDark ? '#fff' : '#39962c'
  }
  const hoverOut = (e, active) => {
    if (active) return
    e.currentTarget.style.background = 'transparent'
    e.currentTarget.style.color = onDark ? 'rgba(255,255,255,0.88)' : '#4b5563'
  }

  return (
    <nav className="fixed left-0 right-0 z-50"
      style={{ top: 0, paddingTop: '1rem', paddingBottom: '0.5rem', paddingLeft: '1.25rem', paddingRight: '1.25rem', pointerEvents: 'none' }}>
      <div style={{ maxWidth: '76rem', margin: '0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', pointerEvents: 'auto' }}>

        {/* ── Left capsule: logo + links ───────────────────────── */}
        <div style={{ ...capsule, display: 'flex' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', padding: '0 0.5rem 0 0.75rem', flexShrink: 0 }}
            className="transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="EcoFiber BD" style={{ height: '2.5rem', width: 'auto', display: 'block' }} />
          </Link>

          <div className="nav-desktop" style={{ alignItems: 'center', gap: '0.125rem' }}>
            {links.map(l => {
              const active = location.pathname === l.to
              return (
                <Link key={l.to} to={l.to} style={linkStyle(active)}
                  onMouseEnter={e => hoverIn(e, active)}
                  onMouseLeave={e => hoverOut(e, active)}>
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* ── Right capsule: quote CTA + WhatsApp ──────────────── */}
        <div className="nav-desktop" style={{ ...capsule, gap: '0.3rem', flexShrink: 0 }}>
          <Link to="/quote"
            className="transition-all duration-300 hover:-translate-y-0.5"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.55rem 0.75rem 0.55rem 1.15rem', borderRadius: '9999px',
              background: '#39962c', color: '#fff', fontSize: '0.9375rem', fontWeight: 700,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
            Get Quote <ArrowUpRight size={16} />
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            title="Chat with us on WhatsApp"
            className="transition-all duration-300 hover:scale-110"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '2.5rem', height: '2.5rem', borderRadius: '50%',
              background: '#25D366', color: '#fff', flexShrink: 0,
            }}>
            <MessageCircle size={19} />
          </a>
        </div>

        {/* ── Mobile: menu toggle capsule ──────────────────────── */}
        <div className="nav-mobile" style={{ ...capsule, flexShrink: 0 }}>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
            className="transition-all duration-300"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: open ? '#39962c' : 'transparent',
              color: open ? '#fff' : (onDark ? '#fff' : '#374151'),
            }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile: floating menu panel ─────────────────────────── */}
      {open && (
      <div className="nav-mobile-panel nav-panel-in"
        style={{
          maxWidth: '76rem', margin: '0.625rem auto 0', pointerEvents: 'auto',
          borderRadius: '1.5rem', overflow: 'hidden',
          background: 'rgba(255,255,255,0.99)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
        }}>
        <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {links.map(l => {
            const active = location.pathname === l.to
            return (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', padding: '0.875rem 1.125rem',
                  borderRadius: '9999px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none',
                  background: active ? '#39962c' : 'transparent',
                  color: active ? '#fff' : '#374151',
                }}>
                {l.label}
              </Link>
            )
          })}

          <div style={{ height: 1, background: 'rgba(0,0,0,0.07)', margin: '0.5rem 0.5rem' }} />

          <Link to="/quote" onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.9375rem 1rem', borderRadius: '9999px', background: '#39962c',
              color: '#fff', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
            }}>
            Get Quote <ArrowUpRight size={17} />
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.9375rem 1rem', borderRadius: '9999px', background: '#25D366',
              color: '#fff', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
            }}>
            <MessageCircle size={19} /> Chat on WhatsApp
          </a>
        </div>
      </div>
      )}
    </nav>
  )
}
