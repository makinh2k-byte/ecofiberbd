import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const PRODUCTS = [
  { id: 1, name: 'Grade A Premium Banana Fiber', grade: 'Grade A', accent: '#39962c',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
    fiber_length_cm: '90–120', moisture_content_percent: 13, moq_kg: 100, price_per_kg: 8.5, stock_kg: 2000,
    description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production. Carefully decorticated and sun-dried to preserve natural luster and strength.',
    applications: ['Fine Textiles & "Banana Silk"', 'Sarees & Blended Garments', 'High-Quality Paper', 'Currency & Archival Paper', 'Tea Bag Production'] },
  { id: 2, name: 'Grade B Standard Banana Fiber', grade: 'Grade B', accent: '#8dc63f',
    img: 'https://images.unsplash.com/photo-1612690669207-fed642192c40?auto=format&fit=crop&w=900&q=80',
    fiber_length_cm: '60–90', moisture_content_percent: 13, moq_kg: 150, price_per_kg: 6.0, stock_kg: 3500,
    description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing. Excellent balance of strength and workability.',
    applications: ['Curtains & Table Mats', 'Cushion Covers & Upholstery', 'Baskets & Bags', 'Hats & Carpets', 'Decorative Wall Hangings'] },
  { id: 3, name: 'Grade C Industrial Banana Fiber', grade: 'Grade C', accent: '#37593b',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80',
    fiber_length_cm: '30–60', moisture_content_percent: 13, moq_kg: 200, price_per_kg: 4.0, stock_kg: 5000,
    description: 'Coarser industrial-grade fiber best suited for marine ropes, shipping cables, and biocomposite reinforcements. Superior resistance to saltwater and UV damage.',
    applications: ['Marine Ropes & Shipping Cables', 'Biocomposite Panels', 'Automotive Reinforcements', 'Industrial Composites', 'Construction Materials'] },
]

export default function ProductDetail() {
  const { id }   = useParams()
  const product  = PRODUCTS.find(p => p.id === parseInt(id))
  const leftRef  = useReveal(0)
  const rightRef = useReveal(1)
  const specsRef = useReveal(0)

  if (!product) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginBottom: '1.25rem' }}>Product not found</h2>
        <Link to="/products" style={{ color: '#39962c', fontWeight: 500, textDecoration: 'none' }}>← Back to Products</Link>
      </div>
    </div>
  )

  const specRows = [
    ['Material',         '100% Natural Banana Pseudostem Fiber'],
    ['Fiber Type',       'Raw, Decorticated & Sun-Dried'],
    ['Grade',            product.grade],
    ['Color',            'Natural Off-White / Cream / Pale Brown (Dyeable)'],
    ['Fiber Length',     `${product.fiber_length_cm} cm`],
    ['Texture',          'Silky sheen, lightweight, stiff yet pliable'],
    ['Tensile Strength', 'High — 500–600 MPa'],
    ['Moisture Regain',  `~${product.moisture_content_percent}% (Breathable)`],
    ['Composition',      'Cellulose ~65%, Hemicellulose ~15%, Lignin ~10%'],
    ['Biodegradability', '100% Biodegradable & Compostable (3–6 months)'],
    ['Packaging',        'Jute or PP bags / loose bundles'],
    ['Min. Order (MOQ)', `${product.moq_kg} kg`],
    ['Stock Available',  `${product.stock_kg.toLocaleString()} kg`],
  ]

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f8f6f1' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', overflow: 'hidden', paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(11,26,13,0.92) 0%, ${product.accent}bb 100%)` }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500, marginBottom: '2.25rem', textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s' }}>
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <span style={{ display: 'inline-block', color: '#fff', fontSize: '0.8125rem', fontWeight: 700, padding: '0.625rem 1.25rem', borderRadius: '9999px', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
            {product.grade}
          </span>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', maxWidth: '40rem', lineHeight: 1.15 }}>{product.name}</h1>
        </div>
      </section>

      {/* Slope */}
      <div style={{ background: '#f8f6f1', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
          <polygon points="0,0 1440,0 1440,80 0,0" fill={product.accent + 'aa'} />
        </svg>
      </div>

      <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem 8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', marginBottom: '5rem' }} className="md:grid-cols-2">

          {/* Left — image + tags */}
          <div ref={leftRef} className="reveal-left">
            <div style={{ borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)', height: '22rem' }}>
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div style={{ marginTop: '1.75rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.125rem' }}>
              {[
                { label: 'Packaging',  value: 'Jute / PP Bags' },
                { label: 'Shipping',   value: 'Export Ready' },
                { label: 'Processing', value: 'Sun-Dried' },
              ].map(item => (
                <div key={item.label} style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem 1rem', textAlign: 'center', border: '1px solid #f3f4f6', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, marginBottom: '0.375rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1f2937' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — details */}
          <div ref={rightRef} className="reveal-right">
            <p style={{ color: '#6b7280', lineHeight: 1.95, marginBottom: '2.25rem', fontSize: '1.0625rem' }}>{product.description}</p>

            <div style={{ display: 'flex', alignItems: 'stretch', gap: '1.25rem', marginBottom: '2.75rem' }}>
              {[
                { label: 'Price', value: `$${product.price_per_kg}`, unit: '/kg', color: product.accent },
                { label: 'Min. Order', value: `${product.moq_kg}`, unit: ' kg', color: '#1f2937' },
              ].map(item => (
                <div key={item.label} style={{ borderRadius: '1.125rem', padding: '1.75rem', flex: 1, textAlign: 'center', border: '1px solid #e5e7eb', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>{item.label}</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: item.color, lineHeight: 1 }}>
                    {item.value}<span style={{ fontSize: '1rem', fontWeight: 500, color: '#9ca3af' }}>{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8125rem' }}>Key Applications</h3>
            <ul style={{ marginBottom: '2.75rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {product.applications.map(a => (
                <li key={a} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', color: '#4b5563', fontSize: '0.9375rem' }}>
                  <CheckCircle size={16} color={product.accent} style={{ flexShrink: 0 }} />
                  {a}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to={`/contact?product=${product.name}`}
                className="flex-1 text-center font-bold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ display: 'block', padding: '1.125rem', borderRadius: '9999px', color: '#fff', background: product.accent, textDecoration: 'none', fontSize: '1rem' }}>
                Request Quote
              </Link>
              <Link to="/contact"
                className="flex-1 text-center font-bold transition-all hover:-translate-y-0.5"
                style={{ display: 'block', padding: '1.125rem', borderRadius: '9999px', border: `2px solid ${product.accent}`, color: product.accent, textDecoration: 'none', fontSize: '1rem' }}
                onMouseEnter={e => { e.currentTarget.style.background = product.accent; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = product.accent }}>
                Request Sample
              </Link>
            </div>
          </div>
        </div>

        {/* Specs table */}
        <div ref={specsRef} className="reveal" style={{ background: '#fff', borderRadius: '1.25rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6', overflow: 'hidden' }}>
          <div style={{ position: 'relative', height: '7rem', overflow: 'hidden' }}>
            <img src={product.img} alt="" className="w-full h-full object-cover" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 2.5rem', background: `linear-gradient(135deg,rgba(11,26,13,0.90),${product.accent}cc)` }}>
              <h2 style={{ fontSize: '1.5rem', color: '#fff' }}>Full Technical Specifications</h2>
            </div>
          </div>
          <div>
            {specRows.map(([label, value]) => (
              <div key={label}
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '1.375rem 2.5rem', gap: '2rem', borderBottom: '1px solid #f9fafb', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div style={{ color: '#9ca3af', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', width: '14rem', flexShrink: 0 }}>{label}</div>
                <div style={{ fontWeight: 500, color: '#1f2937', fontSize: '0.9375rem' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
