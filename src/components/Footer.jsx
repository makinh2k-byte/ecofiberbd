import { Mail, Phone, MapPin } from 'lucide-react'
import logoDark from '../assets/logo-dark.svg'

export default function Footer() {
  return (
    <footer style={{ background: '#f9f8f6' }}>
      {/* Decorative plants */}
      <div style={{ height: '120px', background: 'linear-gradient(to bottom, rgba(255,255,255,0), #f9f8f6)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ fontSize: '80px', opacity: 0.3, position: 'absolute', top: '-20px', left: '5%' }}>🌿</div>
        <div style={{ fontSize: '100px', opacity: 0.25, position: 'absolute', top: '-30px', left: '25%' }}>🍃</div>
        <div style={{ fontSize: '90px', opacity: 0.3, position: 'absolute', top: '-15px', right: '20%' }}>🌱</div>
      </div>

      {/* Main Footer Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Contact Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem', textAlign: 'center' }}>
          {/* Certification */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid #39962c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', position: 'relative' }}>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#39962c' }}>B</span>
            </div>
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>Certified</p>
            <p style={{ fontSize: '11px', color: '#9ca3af' }}>Sustainable</p>
          </div>

          {/* Contact Us */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Phone size={24} color="#39962c" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Contact Us</p>
            <a href="tel:+8801672268121" style={{ fontSize: '14px', color: '#1f2937', fontWeight: 500, textDecoration: 'none' }}>
              +88 01672268121
            </a>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Mail size={24} color="#39962c" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email</p>
            <a href="mailto:info@ecofiberbd.com" style={{ fontSize: '14px', color: '#1f2937', fontWeight: 500, textDecoration: 'none' }}>
              info@ecofiberbd.com
            </a>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <MapPin size={24} color="#39962c" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Address</p>
            <p style={{ fontSize: '14px', color: '#1f2937', fontWeight: 500, lineHeight: 1.4 }}>
              Dhaka<br />Bangladesh
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#e5e7eb', margin: '3rem 0' }} />

        {/* Bottom Section */}
        <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          {/* Left - Copyright */}
          <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center', flex: 1 }}>
            © Copyright {new Date().getFullYear()} EcoFiber BD
          </p>

          {/* Center - Logo */}
          <div style={{ textAlign: 'center', flex: 1 }}>
            <img src={logoDark} alt="EcoFiber BD" style={{ height: '32px', width: 'auto', margin: '0 auto' }} />
          </div>

          {/* Right - Social Links */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flex: 1 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: '#f3f4f6', color: '#39962c', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = '#39962c'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#39962c' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: '#f3f4f6', color: '#39962c', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = '#39962c'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#39962c' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: '#f3f4f6', color: '#39962c', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = '#39962c'; e.currentTarget.style.color = '#fff' }} onMouseLeave={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#39962c' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m3.6-10c0 1.99-1.61 3.6-3.6 3.6s-3.6-1.61-3.6-3.6 1.61-3.6 3.6-3.6 3.6 1.61 3.6 3.6m3.5-9.5h-14c-.825 0-1.5.675-1.5 1.5v14c0 .825.675 1.5 1.5 1.5h14c.825 0 1.5-.675 1.5-1.5v-14c0-.825-.675-1.5-1.5-1.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
