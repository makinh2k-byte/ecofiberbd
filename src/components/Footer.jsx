import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import logoDark from '../assets/logo-dark.svg'

const PATTERN = '/ecofiber background Pattern.svg'

const socials = [
  { href: 'https://www.facebook.com/ecofiberbd2026',  label: 'Facebook',  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { href: 'https://linkedin.com',  label: 'LinkedIn',  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
  { href: 'https://instagram.com', label: 'Instagram', path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m3.6-10c0 1.99-1.61 3.6-3.6 3.6s-3.6-1.61-3.6-3.6 1.61-3.6 3.6-3.6 3.6 1.61 3.6 3.6m3.5-9.5h-14c-.825 0-1.5.675-1.5 1.5v14c0 .825.675 1.5 1.5 1.5h14c.825 0 1.5-.675 1.5-1.5v-14c0-.825-.675-1.5-1.5-1.5z' },
]

const exploreLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact' },
]

const productLinks = [
  { to: '/products/1', label: 'Grade A — Premium' },
  { to: '/products/2', label: 'Grade B — Standard' },
  { to: '/products/3', label: 'Grade C — Industrial' },
  { to: '/products',   label: 'All Products' },
]

const headingStyle = { color: '#fff', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.375rem' }
const linkStyle    = { color: 'rgba(220,252,231,0.7)', fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-block' }

function FootLink({ to, children }) {
  return (
    <li style={{ marginBottom: '0.75rem' }}>
      <Link to={to} style={linkStyle}
        onMouseEnter={e => (e.currentTarget.style.color = '#8dc63f')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(220,252,231,0.7)')}>
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg,#0d2010 0%,#1a3820 60%,#143218 100%)', backgroundImage: `url(${PATTERN})`, backgroundSize: '600px 600px', backgroundPosition: 'center', color: '#fff' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(10,22,11,0.94) 0%,rgba(20,45,22,0.93) 100%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem 2rem' }}>
        {/* Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div style={{ maxWidth: '20rem' }}>
            <img src={logoDark} alt="EcoFiber BD" style={{ height: '44px', width: 'auto', marginBottom: '1.25rem' }} />
            <p style={{ color: 'rgba(220,252,231,0.65)', fontSize: '0.9375rem', lineHeight: 1.85, marginBottom: '1.75rem' }}>
              A banana fiber supplier &amp; exporter in Dhaka, Bangladesh — transforming banana-plant waste into premium, 100% biodegradable raw fiber.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#39962c'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={headingStyle}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {exploreLinks.map(l => <FootLink key={l.to} to={l.to}>{l.label}</FootLink>)}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={headingStyle}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {productLinks.map(l => <FootLink key={l.label} to={l.to}>{l.label}</FootLink>)}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ maxWidth: '18rem' }}>
            <h4 style={headingStyle}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              <a href="tel:+8801672268121" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', ...linkStyle }}
                onMouseEnter={e => (e.currentTarget.style.color = '#8dc63f')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(220,252,231,0.7)')}>
                <Phone size={17} color="#8dc63f" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>+88 01672268121</span>
              </a>
              <a href="mailto:info@ecofiberbd.com" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', ...linkStyle }}
                onMouseEnter={e => (e.currentTarget.style.color = '#8dc63f')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(220,252,231,0.7)')}>
                <Mail size={17} color="#8dc63f" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>info@ecofiberbd.com</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={17} color="#8dc63f" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(220,252,231,0.7)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  Flat: D-2, House: 9, Road: 13 (New),<br />Dhanmondi, Dhaka-1209, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(220,252,231,0.5)' }}>
            © {new Date().getFullYear()} EcoFiber BD. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', fontSize: '0.8125rem' }}>
            <Link to="/privacy" style={{ color: 'rgba(220,252,231,0.6)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8dc63f')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(220,252,231,0.6)')}>Privacy Policy</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <Link to="/terms" style={{ color: 'rgba(220,252,231,0.6)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8dc63f')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(220,252,231,0.6)')}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
