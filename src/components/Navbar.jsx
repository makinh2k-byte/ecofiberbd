import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, ArrowUpRight, ChevronDown, ArrowRight } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'
import { PRODUCTS } from '../data/products'

const WHATSAPP_NUMBER = '8801672268121'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20EcoFiber%20BD%2C%20I%20would%20like%20to%20inquire%20about%20your%20banana%20fiber%20products.`

/** Grades shown in the Products dropdown, straight from the product data. */
const GRADE_LINKS = PRODUCTS.map(p => ({
  to: `/products/${p.id}`,
  grade: p.grade,
  name: p.name,
  accent: p.accent,
  img: p.img,
}))

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/products', label: 'Products', dropdown: true },
  { to: '/blog',     label: 'Blog'     },
  { to: '/contact',  label: 'Contact'  },
]

/**
 * Floating "pill" navigation: the bar is detached from the page edges and each
 * group (nav links / call-to-action) sits in its own rounded capsule. Over the
 * homepage hero the capsules are dark glass; once scrolled — and on every inner
 * page — they turn solid white. Products opens a dropdown of the three grades.
 *
 * Note: Tailwind spacing utilities are dead in this project (see index.css), so
 * every padding/margin here is an inline style, and the desktop/mobile switch
 * uses the .nav-* classes in index.css — an inline `display` would beat
 * Tailwind's `md:hidden`.
 */
export default function Navbar() {
  const [open, setOpen]                     = useState(false)  // mobile sheet
  const [dropdown, setDropdown]             = useState(false)  // desktop Products panel
  const [mobileProducts, setMobileProducts] = useState(false)
  const [scrolled, setScrolled]             = useState(false)
  const location                            = useLocation()
  const isHome                              = location.pathname === '/'
  const dropdownRef                         = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close menus on route change
  useEffect(() => { setOpen(false); setDropdown(false); setMobileProducts(false) }, [location.pathname])

  // dismiss the dropdown on outside click or Escape
  useEffect(() => {
    if (!dropdown) return
    const onClick = e => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdown(false) }
    const onKey = e => { if (e.key === 'Escape') setDropdown(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [dropdown])

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

  const pill = active => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    padding: '0.55rem 1.05rem',
    borderRadius: '9999px',
    fontSize: '0.9375rem',
    fontWeight: 600,
    fontFamily: 'inherit',
    border: 'none',
    cursor: 'pointer',
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

  const inProducts = location.pathname.startsWith('/products')

  return (
    <nav className="fixed left-0 right-0 z-50"
      style={{ top: 0, paddingTop: '1rem', paddingBottom: '0.5rem', paddingLeft: '1.25rem', paddingRight: '1.25rem', pointerEvents: 'none' }}>
      <div style={{ maxWidth: '76rem', margin: '0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', pointerEvents: 'auto' }}>

        {/* ── Left capsule: logo + links ───────────────────────── */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <div style={{ ...capsule, display: 'flex' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', padding: '0 0.5rem 0 0.75rem', flexShrink: 0 }}
              className="transition-transform duration-300 hover:scale-105">
              <img src={logo} alt="EcoFiber BD" style={{ height: '2.5rem', width: 'auto', display: 'block' }} />
            </Link>

            <div className="nav-desktop" style={{ alignItems: 'center', gap: '0.125rem' }}>
              {links.map(l => {
                const active = l.dropdown ? inProducts : location.pathname === l.to
                if (l.dropdown) {
                  return (
                    <button key={l.to} type="button"
                      onClick={() => setDropdown(d => !d)}
                      aria-haspopup="true" aria-expanded={dropdown}
                      style={pill(active || dropdown)}
                      onMouseEnter={e => hoverIn(e, active || dropdown)}
                      onMouseLeave={e => hoverOut(e, active || dropdown)}>
                      {l.label}
                      <ChevronDown size={15} style={{ transform: dropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
                    </button>
                  )
                }
                return (
                  <Link key={l.to} to={l.to} style={pill(active)}
                    onMouseEnter={e => hoverIn(e, active)}
                    onMouseLeave={e => hoverOut(e, active)}>
                    {l.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Products dropdown panel */}
          {dropdown && (
            <div className="nav-desktop nav-panel-in"
              style={{
                position: 'absolute', top: 'calc(100% + 0.625rem)', left: 0,
                width: 'min(24rem, calc(100vw - 2.5rem))', flexDirection: 'column',
                borderRadius: '1.5rem', overflow: 'hidden', zIndex: 60,
                background: 'rgba(255,255,255,0.99)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 22px 44px rgba(0,0,0,0.20)',
              }}>
              <div style={{ padding: '0.75rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af', padding: '0.5rem 0.875rem 0.625rem' }}>
                  Banana Fiber Grades
                </div>
                {GRADE_LINKS.map(g => (
                  <Link key={g.to} to={g.to} onClick={() => setDropdown(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.625rem 0.875rem', borderRadius: '1rem', textDecoration: 'none', transition: 'background 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(57,150,44,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                    <img src={g.img} alt="" style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', objectFit: 'cover', flexShrink: 0 }} />
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ display: 'block', fontWeight: 700, color: '#111827', fontSize: '0.9375rem' }}>{g.grade}</span>
                      <span style={{ display: 'block', color: '#9ca3af', fontSize: '0.8125rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{g.name}</span>
                    </span>
                    <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: g.accent, flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
              <Link to="/products" onClick={() => setDropdown(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', padding: '0.9375rem 1.5rem', background: 'rgba(57,150,44,0.08)', color: '#39962c', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}>
                View all products <ArrowRight size={16} />
              </Link>
            </div>
          )}
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
          maxHeight: 'calc(100svh - 7rem)', overflowY: 'auto',
          background: 'rgba(255,255,255,0.99)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
        }}>
        <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {links.map(l => {
            const active = l.dropdown ? inProducts : location.pathname === l.to
            const rowStyle = {
              display: 'flex', alignItems: 'center', padding: '0.875rem 1.125rem',
              borderRadius: '9999px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none',
              background: active ? '#39962c' : 'transparent',
              color: active ? '#fff' : '#374151',
            }
            if (l.dropdown) {
              return (
                <div key={l.to}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Link to={l.to} onClick={() => setOpen(false)} style={{ ...rowStyle, flex: 1 }}>
                      {l.label}
                    </Link>
                    <button type="button" onClick={() => setMobileProducts(v => !v)}
                      aria-label="Show grades" aria-expanded={mobileProducts}
                      style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: '2.75rem', height: '2.75rem', borderRadius: '50%', border: 'none',
                        cursor: 'pointer', flexShrink: 0,
                        background: mobileProducts ? 'rgba(57,150,44,0.12)' : 'transparent',
                        color: '#39962c',
                      }}>
                      <ChevronDown size={18} style={{ transform: mobileProducts ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
                    </button>
                  </div>
                  {mobileProducts && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem', padding: '0.25rem 0 0.375rem 0.75rem' }}>
                      {GRADE_LINKS.map(g => (
                        <Link key={g.to} to={g.to} onClick={() => setOpen(false)}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '0.625rem',
                            padding: '0.75rem 1.125rem', borderRadius: '9999px',
                            fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none',
                            color: location.pathname === g.to ? '#39962c' : '#6b7280',
                            background: location.pathname === g.to ? 'rgba(57,150,44,0.10)' : 'transparent',
                          }}>
                          <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: g.accent, flexShrink: 0 }} />
                          {g.grade}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={rowStyle}>
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
