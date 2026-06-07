import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Package, Truck, Leaf } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const PRODUCTS = [
  { id: 1, name: 'Grade A Premium Banana Fiber', grade: 'Grade A', accent: '#39962c', fiber_length_cm: '90–120', moisture_content_percent: 13, moq_kg: 100, price_per_kg: 8.5, stock_kg: 2000,
    description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production. Carefully decorticated and sun-dried to preserve natural luster and strength.',
    applications: ['Fine Textiles & "Banana Silk"', 'Sarees & Blended Garments', 'High-Quality Paper', 'Currency & Archival Paper', 'Tea Bag Production'] },
  { id: 2, name: 'Grade B Standard Banana Fiber', grade: 'Grade B', accent: '#8dc63f', fiber_length_cm: '60–90',  moisture_content_percent: 13, moq_kg: 150, price_per_kg: 6.0, stock_kg: 3500,
    description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing. Excellent balance of strength and workability.',
    applications: ['Curtains & Table Mats', 'Cushion Covers & Upholstery', 'Baskets & Bags', 'Hats & Carpets', 'Decorative Wall Hangings'] },
  { id: 3, name: 'Grade C Industrial Banana Fiber', grade: 'Grade C', accent: '#37593b', fiber_length_cm: '30–60',  moisture_content_percent: 13, moq_kg: 200, price_per_kg: 4.0, stock_kg: 5000,
    description: 'Coarser industrial-grade fiber best suited for marine ropes, shipping cables, and biocomposite reinforcements. Superior resistance to saltwater and UV damage.',
    applications: ['Marine Ropes & Shipping Cables', 'Biocomposite Panels', 'Automotive Reinforcements', 'Industrial Composites', 'Construction Materials'] },
]

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

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === parseInt(id))
  const leftRef  = useReveal(0)
  const rightRef = useReveal(1)
  const specsRef = useReveal(0)

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl text-gray-800 mb-5">Product not found</h2>
        <Link to="/products" className="text-[#39962c] font-medium">← Back to Products</Link>
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
    ['Min. Order (MOQ)', `${product.moq_kg} kg`],
    ['Stock Available',  `${product.stock_kg.toLocaleString()} kg`],
  ]

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f8f6f1' }}>
      <Navbar />

      {/* Hero */}
      <section className="text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg,#0b1a0d,${product.accent}cc)`, paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-14">
          <Link to="/products" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium mb-8 transition-colors text-sm">
            <ArrowLeft size={15} /> Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl max-w-xl leading-tight">{product.name}</h1>
        </div>
      </section>

      <SlopeDown from={product.accent + 'aa'} to="#f8f6f1" />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 pb-28">
        <div className="grid md:grid-cols-2 gap-14 mb-16">

          {/* Left */}
          <div ref={leftRef} className="reveal-left">
            {/* Visual */}
            <div className="rounded-2xl overflow-hidden h-72 flex items-center justify-center relative"
              style={{ background: `linear-gradient(135deg, ${product.accent}dd, ${product.accent}66)` }}>
              <span className="absolute text-white/10 font-bold" style={{ fontSize: 180, lineHeight: 1, bottom: -20 }}>
                {product.grade.replace('Grade ', '')}
              </span>
              <div className="relative z-10 text-center text-white">
                <div className="text-7xl mb-4">🌿</div>
                <p className="text-2xl font-bold">{product.grade}</p>
                <p className="text-white/60 mt-1.5 text-sm font-medium">Raw Banana Fiber</p>
              </div>
            </div>

            {/* Packaging cards */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Package, label: 'Packaging',  value: 'Jute / PP Bags' },
                { icon: Truck,   label: 'Shipping',   value: 'Export Ready' },
                { icon: Leaf,    label: 'Processing', value: 'Sun-Dried' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <item.icon size={20} color="#39962c" className="mx-auto mb-3" />
                  <div className="text-xs text-gray-400 font-medium mb-1">{item.label}</div>
                  <div className="text-sm font-bold text-gray-800">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="reveal-right">
            <span className="inline-block text-white text-xs font-bold px-4 py-2 rounded-full mb-6"
              style={{ background: product.accent }}>{product.grade}</span>

            <p className="text-gray-500 leading-[1.9] mb-8 text-base">{product.description}</p>

            <div className="flex items-center gap-5 mb-10">
              <div className="rounded-2xl px-7 py-5 flex-1 text-center" style={{ background: `rgba(57,150,44,0.08)` }}>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1.5">Price</div>
                <div className="text-3xl font-extrabold" style={{ color: product.accent }}>${product.price_per_kg}<span className="text-base font-medium text-gray-400">/kg</span></div>
              </div>
              <div className="bg-gray-100 rounded-2xl px-7 py-5 flex-1 text-center">
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1.5">Min. Order</div>
                <div className="text-3xl font-extrabold text-gray-800">{product.moq_kg}<span className="text-base font-medium text-gray-400"> kg</span></div>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-5 text-base">Key Applications</h3>
            <ul className="space-y-3 mb-10">
              {product.applications.map(a => (
                <li key={a} className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircle size={16} color={product.accent} className="shrink-0" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Link to={`/contact?product=${product.name}`}
                className="flex-1 text-center text-white font-bold py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: product.accent }}>
                Request Quote
              </Link>
              <Link to="/contact"
                className="flex-1 text-center border-2 font-bold py-4 rounded-full transition-all hover:text-white hover:-translate-y-0.5"
                style={{ borderColor: product.accent, color: product.accent }}
                onMouseEnter={e => { e.currentTarget.style.background = product.accent; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = product.accent }}>
                Request Sample
              </Link>
            </div>
          </div>
        </div>

        {/* Full specs */}
        <div ref={specsRef} className="reveal bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="px-8 py-6 text-white" style={{ background: `linear-gradient(135deg,#0b1a0d,${product.accent})` }}>
            <h2 className="text-xl">Full Technical Specifications</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {specRows.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-center px-8 py-5 gap-2 sm:gap-8 hover:bg-gray-50/50 transition-colors">
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest sm:w-52 shrink-0">{label}</div>
                <div className="font-medium text-gray-800 text-sm">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
