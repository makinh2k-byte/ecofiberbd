import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

import { PRODUCTS, TDS, DATA_SOURCE_NOTE } from '../data/products'

export default function ProductDetail() {
  const { id }   = useParams()
  const product  = PRODUCTS.find(p => p.id === parseInt(id))

  useSEO({
    title: product ? `${product.name} — Specifications & Quote | Banana Fiber Bangladesh` : 'Product Details | EcoFiber BD',
    description: product ? `${product.name} from EcoFiber BD, Bangladesh. ${product.description} Fiber length ${product.fiber_length_cm} cm, moisture ${product.moisture_content_percent}%. Request a quote or sample.` : '',
    keywords: product ? `${product.grade} banana fiber, ${product.grade} banana fiber Bangladesh, banana fiber specifications, raw banana fiber, banana pseudo-stem fiber, biodegradable fiber, banana fiber quote` : '',
    url: `https://ecofiberbd.com/products/${id}`,
    image: product ? `https://ecofiberbd.com${encodeURI(product.img)}` : 'https://ecofiberbd.com/Images/Banana_fiber_Grade%20A.jpg'
  })

  // Inject per-product structured data for rich snippets. No price is published —
  // the offer points buyers at the quotation flow instead.
  useEffect(() => {
    if (!product) return
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': product.name,
      'image': `https://ecofiberbd.com${encodeURI(product.img)}`,
      'description': product.description,
      'sku': `ECOFIBER-${product.grade.replace(/\s+/g, '').toUpperCase()}`,
      'brand': { '@type': 'Brand', 'name': 'EcoFiber BD' },
      'category': 'Natural Fiber',
      'countryOfOrigin': 'Bangladesh',
      'material': 'Banana pseudo-stem cellulose',
      'offers': {
        '@type': 'Offer',
        'availability': 'https://schema.org/InStock',
        'url': 'https://ecofiberbd.com/quote',
        'seller': { '@type': 'Organization', 'name': 'EcoFiber BD' }
      }
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'product-jsonld'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    return () => { document.getElementById('product-jsonld')?.remove() }
  }, [id, product])

  const leftRef  = useReveal(0)
  const rightRef = useReveal(1)
  const specsRef = useReveal(0)

  if (!product) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'calc(1.5rem + 3px)', color: '#1f2937', marginBottom: '1.25rem' }}>Product not found</h2>
        <Link to="/products" style={{ color: '#39962c', fontWeight: 500, textDecoration: 'none' }}>← Back to Products</Link>
      </div>
    </div>
  )

  const specRows = [
    ['Material',            '100% Natural Banana Pseudo-Stem Fiber (Musa spp.)'],
    ['Fiber Type',          'Mechanically extracted, washed & sun-dried'],
    ['Grade',               product.grade],
    ['Sorted Fiber Length', `${product.fiber_length_cm} cm`],
    ['Fiber Diameter',      '80 – 250 µm'],
    ['Linear Density',      '6.8 – 66.3 tex'],
    ['Density',             '1.2 – 1.35 g/cm³'],
    ['Tensile Strength',    '500 – 900 MPa'],
    ["Young's Modulus",     '8 – 32 GPa'],
    ['Elongation at Break', '1.0 – 3.5%'],
    ['Moisture Content',    `${product.moisture_content_percent}%`],
    ['Moisture Regain',     '~10 – 13%'],
    ['Color',               'Off-white to yellowish-brown (natural, unbleached — dyeable)'],
    ['Luster',              'Silky sheen'],
    ['Composition',         'Cellulose 60–65%, Hemicellulose 18–19%, Lignin 5–10%, Pectin 3–5%, Ash 1–5%, Wax <1%'],
    ['Biodegradability',    '100% Biodegradable & Compostable'],
    ['Packaging',           'Jute or PP bags / loose bundles'],
    ['Order Volume',        'Quoted per enquiry'],
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
          <h1 style={{ fontSize: 'clamp(calc(2.25rem + 3px), 5vw, calc(3.25rem + 3px))', maxWidth: '40rem', lineHeight: 1.15 }}>{product.name}</h1>
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

            <div style={{ borderRadius: '1.125rem', padding: '1.75rem 2rem', marginBottom: '2.75rem', border: `1px solid ${product.accent}33`, background: `${product.accent}0d` }}>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>Pricing</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: product.accent, lineHeight: 1.3, marginBottom: '0.625rem' }}>Quoted per enquiry</div>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.75 }}>
                Rates depend on grade, fiber form, order volume, packaging and destination. Send your requirement and we will reply with a written quotation within 24 hours.
              </p>
            </div>

            <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 'calc(0.8125rem + 3px)' }}>Key Applications</h3>
            <ul style={{ marginBottom: '2.75rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {product.applications.map(a => (
                <li key={a} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', color: '#4b5563', fontSize: '0.9375rem' }}>
                  <CheckCircle size={16} color={product.accent} style={{ flexShrink: 0 }} />
                  {a}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to={`/quote?product=${encodeURIComponent(product.name)}`}
                className="flex-1 text-center font-bold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ display: 'block', padding: '1.125rem', borderRadius: '9999px', color: '#fff', background: product.accent, textDecoration: 'none', fontSize: '1rem' }}>
                Request Quote
              </Link>
              <Link to={`/quote?product=${encodeURIComponent(product.name)}&sample=1`}
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
              <div>
                <h2 style={{ fontSize: 'calc(1.5rem + 3px)', color: '#fff' }}>Full Technical Specifications</h2>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                  TDS {TDS.docNo} · {TDS.revision} · {TDS.issueDate} · Origin: {TDS.origin}
                </div>
              </div>
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
          <p style={{ padding: '1.75rem 2.5rem', color: '#9ca3af', fontSize: '0.8125rem', lineHeight: 1.8, background: '#fafafa' }}>
            {DATA_SOURCE_NOTE}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
