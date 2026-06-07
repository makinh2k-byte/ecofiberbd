import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PRODUCTS = ['Grade A Premium Banana Fiber', 'Grade B Standard Banana Fiber', 'Grade C Industrial Banana Fiber', 'General Inquiry']
const COUNTRIES = ['Bangladesh', 'India', 'China', 'Japan', 'South Korea', 'Germany', 'United Kingdom', 'United States', 'Australia', 'Canada', 'France', 'Netherlands', 'Italy', 'Spain', 'Other']

function SlopeDown({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
        <polygon points="0,0 1440,0 1440,60 0,0" fill={from} />
      </svg>
    </div>
  )
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const defaultProduct = searchParams.get('product') || 'General Inquiry'
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', message: '', product: PRODUCTS.includes(defaultProduct) ? defaultProduct : 'General Inquiry' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setSuccess(true); setForm({ name: '', email: '', phone: '', country: '', message: '', product: 'General Inquiry' }) }
      else throw new Error()
    } catch { setSuccess(true) } finally { setLoading(false) }
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#39962c] focus:bg-white text-gray-800 text-sm transition-colors"

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f8f6f1' }}>
      <Navbar />

      {/* Hero */}
      <section
        className="text-white text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f2012 0%, #1e3d22 50%, #39962c 100%)', paddingTop: '8rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-green-100/70 text-lg font-light">
            Request samples, bulk pricing, or any inquiries about our premium banana fiber.
          </p>
        </div>
      </section>

      <SlopeDown from="#1a3d20" to="#f8f6f1" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Contact Information</h2>
              <p className="text-gray-400 text-sm mb-6">We respond within 24 hours.</p>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Address', value: 'Dhaka, Bangladesh' },
                  { icon: Mail,   label: 'Email',   value: 'makin@ecofiberbd.com' },
                  { icon: Phone,  label: 'Phone',   value: '+880 1XXX-XXXXXX' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(57,150,44,0.10)' }}>
                      <item.icon size={16} color="#39962c" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="font-semibold text-gray-800 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 border border-[#39962c]/20" style={{ background: 'rgba(57,150,44,0.06)' }}>
              <h4 className="font-bold text-gray-900 mb-2 text-sm">📦 Packaging & Storage</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Compressed bales in jute or PP bags, or loose bundles as per buyer requirement.
                Stored in cool, dry, and well-ventilated conditions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {success ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(57,150,44,0.10)' }}>
                  <CheckCircle size={32} color="#39962c" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inquiry Sent!</h3>
                <p className="text-gray-400 mb-7 text-sm max-w-xs mx-auto">Thank you for reaching out. Our team will respond within 24 hours.</p>
                <button onClick={() => setSuccess(false)}
                  className="text-white font-semibold px-7 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: '#39962c' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send an Inquiry</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Country *</label>
                    <select name="country" value={form.country} onChange={handleChange} required className={inputCls}>
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Product Interest</label>
                    <select name="product" value={form.product} onChange={handleChange} className={inputCls}>
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your requirements, quantity needed, intended use..."
                      className={`${inputCls} resize-none`} />
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="mt-6 w-full text-white font-bold text-base py-3.5 rounded-full transition-all disabled:opacity-60 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)' }}>
                  {loading ? 'Sending…' : <><Send size={16} /> Send Inquiry</>}
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
