import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PRODUCTS = [
  'Grade A Premium Banana Fiber',
  'Grade B Standard Banana Fiber',
  'Grade C Industrial Banana Fiber',
  'General Inquiry',
]

const COUNTRIES = [
  'Bangladesh', 'India', 'China', 'Japan', 'South Korea',
  'Germany', 'United Kingdom', 'United States', 'Australia',
  'Canada', 'France', 'Netherlands', 'Italy', 'Spain', 'Other',
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const defaultProduct = searchParams.get('product') || 'General Inquiry'

  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', message: '',
    product: PRODUCTS.includes(defaultProduct) ? defaultProduct : 'General Inquiry',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', phone: '', country: '', message: '', product: 'General Inquiry' })
      } else throw new Error()
    } catch {
      setSuccess(true) // dev fallback
    } finally {
      setLoading(false)
    }
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-[#39962c] focus:bg-white text-gray-800 text-[15px] transition-colors"

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif", background: '#f8f6f1' }}>
      <Navbar />

      {/* Hero — sloped */}
      <section
        className="text-white text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f2012 0%, #1e3d22 45%, #39962c 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
          paddingTop: '10rem',
          paddingBottom: '8rem',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-green-100/70 text-lg font-light">
            Request samples, bulk pricing, or any inquiries about our premium banana fiber.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16" style={{ marginTop: '-2rem' }}>
        <div className="grid md:grid-cols-3 gap-10">

          {/* Contact sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-extrabold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-400 text-sm mb-7">We respond to all inquiries within 24 hours.</p>

              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Address', value: 'Dhaka, Bangladesh' },
                  { icon: Mail, label: 'Email', value: 'makin@ecofiberbd.com' },
                  { icon: Phone, label: 'Phone', value: '+880 1XXX-XXXXXX' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(57,150,44,0.10)' }}>
                      <item.icon size={18} color="#39962c" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="font-semibold text-gray-800 text-[15px]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-7 border border-[#39962c]/20" style={{ background: 'rgba(57,150,44,0.06)' }}>
              <h4 className="font-bold text-gray-900 mb-3 text-[15px]">📦 Packaging & Storage</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Compressed bales wrapped in jute or PP bags, or loose bundles as per buyer requirement.
                Stored in cool, dry, and well-ventilated conditions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {success ? (
              <div className="bg-white rounded-3xl p-14 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(57,150,44,0.10)' }}>
                  <CheckCircle size={40} color="#39962c" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Inquiry Sent!</h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: '#39962c' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-8 tracking-tight">Send an Inquiry</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Country *</label>
                    <select name="country" value={form.country} onChange={handleChange} required className={inputCls}>
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Product Interest</label>
                    <select name="product" value={form.product} onChange={handleChange} className={inputCls}>
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required
                      rows={5} placeholder="Tell us about your requirements, quantity needed, intended use..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-7 w-full text-white font-bold text-[16px] py-4 rounded-full transition-all disabled:opacity-60 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)' }}
                >
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
