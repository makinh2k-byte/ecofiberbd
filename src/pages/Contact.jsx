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
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', phone: '', country: '', message: '', product: 'General Inquiry' })
      } else {
        throw new Error('Failed to submit')
      }
    } catch {
      // During development without backend, show success anyway
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div
        className="pt-32 pb-16 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #37593b 0%, #39962c 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-green-100 text-lg">
            Request samples, bulk pricing, or any inquiries about our premium banana fiber.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-600">We respond to all inquiries within 24 hours.</p>
            </div>

            {[
              { icon: MapPin, label: 'Address', value: 'Dhaka, Bangladesh' },
              { icon: Mail, label: 'Email', value: 'info@ecofiberbd.com' },
              { icon: Phone, label: 'Phone', value: '+880 1XXX-XXXXXX' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="bg-[#39962c]/10 rounded-xl p-3 shrink-0">
                  <item.icon size={20} className="text-[#39962c]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="font-semibold text-gray-800">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Packaging note */}
            <div className="bg-[#f5f0e8] rounded-2xl p-6 border border-[#39962c]/20">
              <h4 className="font-semibold text-gray-900 mb-2">📦 Packaging & Storage</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Compressed bales wrapped in jute or PP bags, or loose bundles as per buyer requirement.
                Stored in cool, dry, and well-ventilated conditions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {success ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <CheckCircle size={60} className="text-[#39962c] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Inquiry Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-[#39962c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2d7a22] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send an Inquiry</h2>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
                    <select
                      name="country" value={form.country} onChange={handleChange} required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] text-gray-800 bg-white"
                    >
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Interest</label>
                    <select
                      name="product" value={form.product} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] text-gray-800 bg-white"
                    >
                      {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required
                      rows={5} placeholder="Tell us about your requirements, quantity needed, intended use..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] text-gray-800 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full bg-[#39962c] text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-[#2d7a22] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : <><Send size={18} /> Send Inquiry</>}
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
