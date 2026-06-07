import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const PRODUCTS  = ['Grade A Premium Banana Fiber', 'Grade B Standard Banana Fiber', 'Grade C Industrial Banana Fiber', 'General Inquiry']
const COUNTRIES = ['Bangladesh','India','China','Japan','South Korea','Germany','United Kingdom','United States','Australia','Canada','France','Netherlands','Italy','Spain','Other']

const Slope = ({ dir = 'down', from, to }) => (
  <div style={{ background: to, lineHeight: 0, fontSize: 0 }}>
    <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 72 }}>
      {dir === 'down'
        ? <polygon points="0,0 1440,0 1440,72 0,0" fill={from} />
        : <polygon points="0,72 1440,0 1440,72 0,72" fill={from} />}
    </svg>
  </div>
)

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid #e5e7eb',
  background: '#f9fafb',
  outline: 'none',
  color: '#1f2937',
  fontSize: '0.875rem',
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1920&q=85"
            alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.88) 55%,rgba(40,110,30,0.82) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '40rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', textAlign: 'center', marginBottom: '1.25rem', color: '#fff' }}>Get in Touch</h1>
          <p style={{ color: 'rgba(220,252,231,0.65)', fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.85, textAlign: 'center' }}>
            Request samples, bulk pricing, or any inquiries about our premium banana fiber.
          </p>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#f7f5f0" />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="md:grid-cols-3">

          {/* Sidebar */}
          <div ref={sidebarRef} className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ background: '#fff', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6' }}>
              <h2 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.5rem' }}>Contact Information</h2>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '2rem', lineHeight: 1.6 }}>We respond to all inquiries within 24 hours.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {[
                  { icon: MapPin, label: 'Address', value: 'Dhaka, Bangladesh',   href: null },
                  { icon: Mail,   label: 'Email',   value: 'info@ecofiberbd.com', href: 'mailto:info@ecofiberbd.com' },
                  { icon: Phone,  label: 'Phone',   value: '+8801672268121',       href: 'tel:+8801672268121' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(57,150,44,0.10)', flexShrink: 0 }}>
                      <item.icon size={17} color="#39962c" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ fontWeight: 600, color: '#1f2937', fontSize: '0.875rem', textDecoration: 'none' }}>{item.value}</a>
                        : <div style={{ fontWeight: 600, color: '#1f2937', fontSize: '0.875rem' }}>{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '1rem', padding: '1.75rem', border: '1px solid rgba(57,150,44,0.2)', background: 'rgba(57,150,44,0.06)' }}>
              <h4 style={{ fontWeight: 700, color: '#111827', marginBottom: '0.75rem', fontSize: '1rem' }}>Packaging & Storage</h4>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.85 }}>
                Compressed bales in jute or PP bags, or loose bundles as per buyer requirement. Stored in cool, dry, and well-ventilated conditions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal-right md:col-span-2">
            {success ? (
              <div style={{ background: '#fff', borderRadius: '1rem', padding: '3.5rem 2rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(57,150,44,0.10)', marginBottom: '1.5rem' }}>
                  <CheckCircle size={38} color="#39962c" />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '0.75rem' }}>Inquiry Sent!</h3>
                <p style={{ color: '#9ca3af', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '20rem', textAlign: 'center' }}>
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button onClick={() => setSuccess(false)}
                  className="font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: '#39962c', color: '#fff', padding: '0.875rem 2.25rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ background: '#fff', borderRadius: '1rem', padding: '2rem 2.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '2rem' }}>Send an Inquiry</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={set} required placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={set} required placeholder="your@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Phone</label>
                    <input name="phone" value={form.phone} onChange={set} placeholder="+1 234 567 8900" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Country *</label>
                    <select name="country" value={form.country} onChange={set} required style={inputStyle}>
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Product Interest</label>
                    <select name="product" value={form.product} onChange={set} style={inputStyle}>
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Message *</label>
                    <textarea name="message" value={form.message} onChange={set} required rows={5}
                      placeholder="Tell us about your requirements, quantity needed, intended use…"
                      style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="inline-flex items-center justify-center gap-2.5 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
                  style={{ marginTop: '1.75rem', width: '100%', background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)', color: '#fff', padding: '1rem', borderRadius: '9999px', fontSize: '1rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {loading ? 'Sending…' : <><Send size={17} /> Send Inquiry</>}
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
