import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Download } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const PRODUCTS  = ['Grade A Premium Banana Fiber', 'Grade B Standard Banana Fiber', 'Grade C Industrial Banana Fiber', 'General Inquiry']
const COUNTRIES = ['Bangladesh','India','China','Japan','South Korea','Germany','United Kingdom','United States','Australia','Canada','France','Netherlands','Italy','Spain','Other']
const WHATSAPP_NUMBER = '8801672268121'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20EcoFiber%20BD%2C%20I%20would%20like%20to%20inquire%20about%20your%20banana%20fiber%20products.`

const Slope = ({ dir = 'down', from, to }) => (
  <div style={{ background: to, lineHeight: 0, fontSize: 0 }}>
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: 80 }}>
      {dir === 'down'
        ? <polygon points="0,0 1440,0 1440,80 0,0" fill={from} />
        : <polygon points="0,80 1440,0 1440,80 0,80" fill={from} />}
    </svg>
  </div>
)

const inputStyle = {
  width: '100%',
  padding: '1rem 1.125rem',
  borderRadius: '0.875rem',
  border: '1px solid #e5e7eb',
  background: '#f9fafb',
  outline: 'none',
  color: '#1f2937',
  fontSize: '0.9375rem',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const defaultProduct = searchParams.get('product') || 'General Inquiry'
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', message: '',
    product: PRODUCTS.includes(defaultProduct) ? defaultProduct : 'General Inquiry',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sidebarRef = useReveal(0)
  const formRef    = useReveal(1)

  const set = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setSuccess(true); setForm({ name:'', email:'', phone:'', country:'', message:'', product:'General Inquiry' }) }
      else throw new Error()
    } catch { setSuccess(true) } finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1920&q=85" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.88) 55%,rgba(40,110,30,0.82) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '44rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 4rem)', textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>Get in Touch</h1>
          <p style={{ color: 'rgba(220,252,231,0.65)', fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.9, textAlign: 'center' }}>
            Request samples, bulk pricing, or any inquiries about our premium banana fiber.
          </p>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#f7f5f0" />

      <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem 8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="md:grid-cols-3">

          {/* Sidebar */}
          <div ref={sidebarRef} className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#fff', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
              <h2 style={{ fontSize: '1.375rem', color: '#111827', marginBottom: '0.75rem' }}>Contact Information</h2>
              <p style={{ color: '#9ca3af', fontSize: '0.9375rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>We respond to all inquiries within 24 hours.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
                {[
                  { icon: MapPin, label: 'Address', value: 'Dhaka, Bangladesh',   href: null },
                  { icon: Mail,   label: 'Email',   value: 'info@ecofiberbd.com', href: 'mailto:info@ecofiberbd.com' },
                  { icon: Phone,  label: 'Phone',   value: '+8801672268121',       href: 'tel:+8801672268121' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.125rem' }}>
                    <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(57,150,44,0.10)', flexShrink: 0 }}>
                      <item.icon size={18} color="#39962c" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.375rem' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ fontWeight: 600, color: '#1f2937', fontSize: '0.9375rem', textDecoration: 'none' }}>{item.value}</a>
                        : <div style={{ fontWeight: 600, color: '#1f2937', fontSize: '0.9375rem' }}>{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#25D366', color: '#fff', fontSize: '1rem', boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}>
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <a href="/Business Profile.pdf" download
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full"
              style={{ background: '#39962c', color: '#fff', fontSize: '1rem', boxShadow: '0 4px 16px rgba(57,150,44,0.3)', textDecoration: 'none' }}>
              <Download size={20} />
              Download Profile
            </a>

            <div style={{ borderRadius: '1.25rem', padding: '2rem', border: '1px solid rgba(57,150,44,0.2)', background: 'rgba(57,150,44,0.06)' }}>
              <h4 style={{ fontWeight: 700, color: '#111827', marginBottom: '1rem', fontSize: '1.0625rem' }}>Packaging & Storage</h4>
              <p style={{ fontSize: '0.9375rem', color: '#6b7280', lineHeight: 1.85 }}>
                Compressed bales in jute or PP bags, or loose bundles as per buyer requirement. Stored in cool, dry, and well-ventilated conditions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal-right md:col-span-2">
            {success ? (
              <div style={{ background: '#fff', borderRadius: '1.25rem', padding: '5rem 2rem', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '5.5rem', height: '5.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(57,150,44,0.10)', marginBottom: '2rem' }}>
                  <CheckCircle size={42} color="#39962c" />
                </div>
                <h3 style={{ fontSize: '1.75rem', color: '#111827', marginBottom: '1rem' }}>Inquiry Sent!</h3>
                <p style={{ color: '#9ca3af', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '22rem', textAlign: 'center', fontSize: '1rem' }}>
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button onClick={() => setSuccess(false)}
                  className="font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: '#39962c', color: '#fff', padding: '1rem 2.5rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ background: '#fff', borderRadius: '1.25rem', padding: '2.75rem 3rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
                <h2 style={{ fontSize: '1.75rem', color: '#111827', marginBottom: '2.25rem' }}>Send an Inquiry</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={set} required placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={set} required placeholder="your@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Phone</label>
                    <input name="phone" value={form.phone} onChange={set} placeholder="+1 234 567 8900" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Country *</label>
                    <select name="country" value={form.country} onChange={set} required style={inputStyle}>
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Product Interest</label>
                    <select name="product" value={form.product} onChange={set} style={inputStyle}>
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Message *</label>
                    <textarea name="message" value={form.message} onChange={set} required rows={6}
                      placeholder="Tell us about your requirements, quantity needed, intended use…"
                      style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="inline-flex items-center justify-center gap-2.5 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
                  style={{ marginTop: '2rem', width: '100%', background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)', color: '#fff', padding: '1.125rem', borderRadius: '9999px', fontSize: '1.0625rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
                  {loading ? 'Sending…' : <><Send size={18} /> Send Inquiry</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
