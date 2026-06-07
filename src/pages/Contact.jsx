import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const PRODUCTS = ['Grade A Premium Banana Fiber', 'Grade B Standard Banana Fiber', 'Grade C Industrial Banana Fiber', 'General Inquiry']
const COUNTRIES = ['Bangladesh', 'India', 'China', 'Japan', 'South Korea', 'Germany', 'United Kingdom', 'United States', 'Australia', 'Canada', 'France', 'Netherlands', 'Italy', 'Spain', 'Other']

function SlopeDown({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 80 }}>
        <polygon points="0,0 1440,0 1440,80 0,0" fill={from} />
      </svg>
    </div>
  )
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

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setSuccess(true); setForm({ name: '', email: '', phone: '', country: '', message: '', product: 'General Inquiry' }) }
      else throw new Error()
    } catch { setSuccess(true) } finally { setLoading(false) }
  }

  const inputCls = "w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#39962c] focus:bg-white text-gray-800 text-sm transition-all"

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f8f6f1' }}>
      <Navbar />

      {/* Hero */}
      <section className="text-white text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0b1a0d 0%,#1a3d1e 50%,#2d7a22 100%)', paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }} />
        <div className="absolute -top-10 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(141,198,63,0.15),transparent 65%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl mb-5">Get in Touch</h1>
          <p className="text-green-100/65 text-lg font-light leading-[1.8]">
            Request samples, bulk pricing, or any inquiries about our premium banana fiber.
          </p>
        </div>
      </section>

      <SlopeDown from="#1a3d1e" to="#f8f6f1" />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 pb-28">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Sidebar */}
          <div ref={sidebarRef} className="reveal-left space-y-6">
            {/* Info card */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="text-xl text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">We respond to all inquiries within 24 hours.</p>
              <div className="space-y-7">
                {[
                  { icon: MapPin, label: 'Address', value: 'Dhaka, Bangladesh',     href: null },
                  { icon: Mail,   label: 'Email',   value: 'info@ecofiberbd.com',   href: 'mailto:info@ecofiberbd.com' },
                  { icon: Phone,  label: 'Phone',   value: '+8801672268121',         href: 'tel:+8801672268121' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(57,150,44,0.10)' }}>
                      <item.icon size={18} color="#39962c" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="font-semibold text-gray-800 text-sm hover:text-[#39962c] transition-colors">{item.value}</a>
                        : <div className="font-semibold text-gray-800 text-sm">{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging note */}
            <div className="rounded-2xl p-7 border border-[#39962c]/20" style={{ background: 'rgba(57,150,44,0.06)' }}>
              <div className="text-2xl mb-4">📦</div>
              <h4 className="font-bold text-gray-900 mb-3 text-base">Packaging & Storage</h4>
              <p className="text-sm text-gray-500 leading-[1.8]">
                Compressed bales in jute or PP bags, or loose bundles as per buyer requirement.
                Stored in cool, dry, and well-ventilated conditions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal-right md:col-span-2">
            {success ? (
              <div className="bg-white rounded-2xl p-16 text-center shadow-md border border-gray-100">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-7"
                  style={{ background: 'rgba(57,150,44,0.10)' }}>
                  <CheckCircle size={38} color="#39962c" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">Inquiry Sent!</h3>
                <p className="text-gray-400 mb-10 leading-relaxed max-w-xs mx-auto">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button onClick={() => setSuccess(false)}
                  className="font-semibold px-9 py-3.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: '#39962c' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
                <h2 className="text-2xl text-gray-900 mb-8">Send an Inquiry</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Country *</label>
                    <select name="country" value={form.country} onChange={handleChange} required className={inputCls}>
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Product Interest</label>
                    <select name="product" value={form.product} onChange={handleChange} className={inputCls}>
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your requirements, quantity needed, intended use…"
                      className={`${inputCls} resize-none`} />
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="mt-8 w-full font-bold text-base py-4 rounded-full transition-all disabled:opacity-60 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 text-white"
                  style={{ background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)' }}>
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
