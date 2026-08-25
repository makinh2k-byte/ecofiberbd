import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send, CheckCircle, MessageCircle, Mail, FileText, Clock, ShieldCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { PRODUCTS } from '../data/products'

const WHATSAPP_NUMBER = '8801672268121'
const QUOTE_EMAIL     = 'info@ecofiberbd.com'

const GRADES = [...PRODUCTS.map(p => p.name), 'Not sure — please advise']
const FORMS  = [
  'Raw fiber strands (undyed, natural color)',
  'Combed fiber (for spinning / blended yarn)',
  'Chopped / short fiber (custom cut length)',
  'Fiber tow, bundle, coil or baled form',
  'Not sure — please advise',
]
const UNITS      = ['kg', 'tons', 'containers (20ft)', 'containers (40ft)']
const INCOTERMS  = ['FOB Chattogram', 'CFR / CIF (destination port)', 'EXW Dhaka', 'Not sure — please advise']
const TIMELINES  = ['Immediately', 'Within 1 month', 'In 1–3 months', 'Ongoing / recurring supply', 'Just researching']
const COUNTRIES  = ['Bangladesh','India','China','Japan','South Korea','Germany','United Kingdom','United States','Australia','Canada','France','Netherlands','Italy','Spain','Other']

const inputStyle = {
  width: '100%', padding: '1rem 1.125rem', borderRadius: '0.875rem',
  border: '1px solid #e5e7eb', background: '#f9fafb', outline: 'none',
  color: '#1f2937', fontSize: '0.9375rem', transition: 'all 0.2s', fontFamily: 'inherit',
}
const labelStyle = {
  display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af',
  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem',
}

/** Human-readable RFQ summary — shared by the WhatsApp, email and stored versions. */
function buildSummary(f) {
  const rows = [
    ['Product / grade', f.product],
    ['Fiber form',      f.fiberForm],
    ['Quantity',        f.quantity ? `${f.quantity} ${f.unit}` : ''],
    ['Destination',     [f.destinationPort, f.country].filter(Boolean).join(', ')],
    ['Terms',           f.incoterm],
    ['Required',        f.timeline],
    ['Sample needed',   f.sample ? 'Yes' : 'No'],
    ['Company',         f.company],
    ['Name',            f.name],
    ['Email',           f.email],
    ['Phone / WhatsApp', f.phone],
  ].filter(([, v]) => v)
  const lines = rows.map(([k, v]) => `${k}: ${v}`)
  if (f.message) lines.push('', `Details: ${f.message}`)
  return lines.join('\n')
}

export default function RequestQuote() {
  useSEO({
    title: 'Request a Quote — Banana Fiber from Bangladesh | EcoFiber BD',
    description: 'Request a quotation for raw banana fiber from EcoFiber BD, Bangladesh. Tell us your grade, quantity and destination and get a quote by email or WhatsApp — samples available.',
    keywords: 'banana fiber quote, request quote banana fiber, banana fiber RFQ, banana fiber supplier Bangladesh, banana fiber sample, bulk banana fiber enquiry',
    url: 'https://ecofiberbd.com/quote',
    image: 'https://ecofiberbd.com/Images/Banana_fiber_Grade%20A.jpg',
  })

  const [searchParams]  = useSearchParams()
  const requested       = searchParams.get('product') || ''
  const wantsSample     = searchParams.get('sample') === '1'

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    product: GRADES.includes(requested) ? requested : GRADES[GRADES.length - 1],
    fiberForm: FORMS[FORMS.length - 1],
    quantity: '', unit: 'tons', destinationPort: '',
    incoterm: INCOTERMS[0], timeline: TIMELINES[1],
    sample: wantsSample, message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sidebarRef = useReveal(0)
  const formRef    = useReveal(1)

  const set = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  /** Minimum needed for a quote we can actually answer. */
  const canSend = form.name.trim() && form.email.trim() && form.country

  const summary = () => buildSummary(form)

  const whatsappHref = () =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi EcoFiber BD, I would like to request a quotation.\n\n${summary()}`
    )}`

  const mailtoHref = () =>
    `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
      `Quotation request — ${form.product}`
    )}&body=${encodeURIComponent(`Hello EcoFiber BD,\n\nPlease send me a quotation for the following:\n\n${summary()}\n\nThank you.`)}`

  /** Also record the RFQ on our side so nothing is lost if the buyer's mail client fails. */
  const record = async () => {
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          country: form.country, product: form.product,
          message: `QUOTE REQUEST\n\n${summary()}`,
        }),
      })
    } catch { /* non-blocking — the buyer still has WhatsApp/email */ }
  }

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    await record()
    setLoading(false)
    setSuccess(true)
  }

  const openChannel = async href => {
    if (!canSend) return
    await record()
    window.open(href, '_blank', 'noopener,noreferrer')
    setSuccess(true)
  }

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section className="leaf-anim" style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem', background: 'linear-gradient(160deg,#1a3820 0%,#2d5533 55%,#39962c 100%)', backgroundImage: 'url(/ecofiber-background-Pattern.png)', backgroundSize: '420px 420px', backgroundRepeat: 'repeat' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.86) 0%,rgba(20,50,24,0.80) 55%,rgba(40,110,30,0.72) 100%)' }} />
        <div className="hero-rise" style={{ position: 'relative', zIndex: 10, maxWidth: '46rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(calc(2.75rem + 3px), 7vw, calc(4rem + 3px))', textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>Request a Quote</h1>
          <p style={{ color: 'rgba(220,252,231,0.65)', fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.9, textAlign: 'center' }}>
            We quote every order individually — grade, quantity, packaging and destination all affect the rate. Tell us what you need and we will send a written quotation by email or WhatsApp.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem 8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="md:grid-cols-3">

          {/* Sidebar */}
          <div ref={sidebarRef} className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#fff', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
              <h2 style={{ fontSize: 'calc(1.375rem + 3px)', color: '#111827', marginBottom: '1.75rem' }}>How quoting works</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {[
                  { icon: FileText,    title: 'Individual pricing', desc: 'Rates depend on grade, fiber length, volume, packaging and destination — so we price each enquiry rather than publishing a list.' },
                  { icon: Clock,       title: 'Reply within 24 hours', desc: 'You receive a written quotation with terms, lead time and packaging options.' },
                  { icon: ShieldCheck, title: 'Samples & inspection', desc: 'Samples, buyer-specified testing and pre-shipment inspection are welcome on any order.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.125rem' }}>
                    <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(57,150,44,0.10)', flexShrink: 0 }}>
                      <item.icon size={18} color="#39962c" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1f2937', fontSize: '0.9375rem', marginBottom: '0.375rem' }}>{item.title}</div>
                      <div style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '1.25rem', padding: '2rem 2.25rem', border: '1px solid rgba(57,150,44,0.2)', background: 'rgba(57,150,44,0.06)' }}>
              <div style={{ fontWeight: 700, color: '#111827', marginBottom: '0.75rem', fontSize: '1rem' }}>Prefer to talk first?</div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Message us directly — we are on WhatsApp during Bangladesh business hours.
              </p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi EcoFiber BD, I would like to request a quotation for banana fiber.')}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full"
                style={{ background: '#25D366', color: '#fff', fontSize: '0.9375rem', padding: '0.875rem 1.5rem', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}>
                <MessageCircle size={18} /> WhatsApp us
              </a>
              <a href={`mailto:${QUOTE_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full"
                style={{ background: '#fff', color: '#39962c', border: '2px solid #39962c', fontSize: '0.9375rem', padding: '0.875rem 1.5rem', textDecoration: 'none', marginTop: '0.75rem' }}>
                <Mail size={18} /> {QUOTE_EMAIL}
              </a>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal-right md:col-span-2">
            {success ? (
              <div style={{ background: '#fff', borderRadius: '1.25rem', padding: '5rem 2rem', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '5.5rem', height: '5.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(57,150,44,0.10)', marginBottom: '2rem' }}>
                  <CheckCircle size={42} color="#39962c" />
                </div>
                <h3 style={{ fontSize: 'calc(1.75rem + 3px)', color: '#111827', marginBottom: '1rem' }}>Quote request received</h3>
                <p style={{ color: '#9ca3af', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '24rem', textAlign: 'center', fontSize: '1rem' }}>
                  Thank you. Our team will send your written quotation within 24 hours. Need it sooner? Message us on WhatsApp.
                </p>
                <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a href={whatsappHref()} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: '#25D366', color: '#fff', padding: '1rem 2rem', textDecoration: 'none', fontSize: '0.9375rem' }}>
                    <MessageCircle size={18} /> Send on WhatsApp too
                  </a>
                  <button onClick={() => setSuccess(false)}
                    className="font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: '#39962c', color: '#fff', padding: '1rem 2rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', fontFamily: 'inherit' }}>
                    New request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} style={{ background: '#fff', borderRadius: '1.25rem', padding: '2.75rem 3rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
                <h2 style={{ fontSize: 'calc(1.75rem + 3px)', color: '#111827', marginBottom: '0.75rem' }}>Tell us what you need</h2>
                <p style={{ color: '#9ca3af', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                  The more detail you give, the more precise your quotation. Send it through the form, or push the same details straight to WhatsApp or email.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="sm:grid-cols-2">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" value={form.name} onChange={set} required placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input name="company" value={form.company} onChange={set} placeholder="Company name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={set} required placeholder="your@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={set} placeholder="+1 234 567 8900" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Country *</label>
                    <select name="country" value={form.country} onChange={set} required style={inputStyle}>
                      <option value="">Select country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Destination Port / City</label>
                    <input name="destinationPort" value={form.destinationPort} onChange={set} placeholder="e.g. Hamburg" style={inputStyle} />
                  </div>

                  <div className="sm:col-span-2">
                    <label style={labelStyle}>Product / Grade</label>
                    <select name="product" value={form.product} onChange={set} style={inputStyle}>
                      {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label style={labelStyle}>Fiber Form</label>
                    <select name="fiberForm" value={form.fiberForm} onChange={set} style={inputStyle}>
                      {FORMS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Quantity Required</label>
                    <div style={{ display: 'flex', gap: '0.625rem' }}>
                      <input name="quantity" type="number" min="0" value={form.quantity} onChange={set} placeholder="e.g. 5" style={{ ...inputStyle, flex: 1 }} />
                      <select name="unit" value={form.unit} onChange={set} style={{ ...inputStyle, width: 'auto', flexShrink: 0 }}>
                        {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred Terms</label>
                    <select name="incoterm" value={form.incoterm} onChange={set} style={inputStyle}>
                      {INCOTERMS.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label style={labelStyle}>When do you need it?</label>
                    <select name="timeline" value={form.timeline} onChange={set} style={inputStyle}>
                      {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label style={labelStyle}>Additional Details</label>
                    <textarea name="message" value={form.message} onChange={set} rows={5}
                      placeholder="Intended use, required fiber length, moisture or packaging specification, testing requirements…"
                      style={{ ...inputStyle, resize: 'none' }} />
                  </div>

                  <label className="sm:col-span-2" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563', fontSize: '0.9375rem', cursor: 'pointer' }}>
                    <input name="sample" type="checkbox" checked={form.sample} onChange={set}
                      style={{ width: '1.125rem', height: '1.125rem', accentColor: '#39962c', cursor: 'pointer' }} />
                    Please include a sample with the quotation
                  </label>
                </div>

                <button type="submit" disabled={loading}
                  className="inline-flex items-center justify-center gap-2.5 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
                  style={{ marginTop: '2rem', width: '100%', background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)', color: '#fff', padding: '1.125rem', borderRadius: '9999px', fontSize: '1.0625rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
                  {loading ? 'Sending…' : <><Send size={18} /> Send Quote Request</>}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.75rem 0 1.25rem' }}>
                  <div style={{ height: 1, background: '#f3f4f6', flex: 1 }} />
                  <span style={{ color: '#9ca3af', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>or send the same details via</span>
                  <div style={{ height: 1, background: '#f3f4f6', flex: 1 }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                  <button type="button" onClick={() => openChannel(whatsappHref())} disabled={!canSend}
                    className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                    style={{ background: '#25D366', color: '#fff', padding: '1rem', borderRadius: '9999px', border: 'none', cursor: canSend ? 'pointer' : 'not-allowed', fontSize: '0.9375rem', fontFamily: 'inherit' }}>
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                  <button type="button" onClick={() => openChannel(mailtoHref())} disabled={!canSend}
                    className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                    style={{ background: '#fff', color: '#39962c', border: '2px solid #39962c', padding: '1rem', borderRadius: '9999px', cursor: canSend ? 'pointer' : 'not-allowed', fontSize: '0.9375rem', fontFamily: 'inherit' }}>
                    <Mail size={18} /> Email
                  </button>
                </div>
                {!canSend && (
                  <p style={{ color: '#9ca3af', fontSize: '0.8125rem', marginTop: '0.875rem', textAlign: 'center' }}>
                    Add your name, email and country to send via WhatsApp or email.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
