import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const GRADE_IMG = {
  'Grade A': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  'Grade B': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
  'Grade C': 'https://images.unsplash.com/photo-1519752327041-5a77f2a92e3d?auto=format&fit=crop&w=800&q=80',
}
const gradeAccent = { 'Grade A': '#39962c', 'Grade B': '#8dc63f', 'Grade C': '#37593b' }

const MOCK_PRODUCTS = [
  { id: 1, name: 'Grade A Premium Banana Fiber',  grade: 'Grade A', fiber_length_cm: '90–120', moisture_content_percent: 13, moq_kg: 100, price_per_kg: 8.5, stock_kg: 2000, description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production.', is_active: true },
  { id: 2, name: 'Grade B Standard Banana Fiber',  grade: 'Grade B', fiber_length_cm: '60–90',  moisture_content_percent: 13, moq_kg: 150, price_per_kg: 6.0, stock_kg: 3500, description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing.',         is_active: true },
  { id: 3, name: 'Grade C Industrial Banana Fiber', grade: 'Grade C', fiber_length_cm: '30–60',  moisture_content_percent: 13, moq_kg: 200, price_per_kg: 4.0, stock_kg: 5000, description: 'Coarser industrial-grade fiber for marine ropes, shipping cables, and biocomposite reinforcements.',             is_active: true },
]

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

function ProductCard({ p, index }) {
  const ref = useReveal(index)
  const accent = gradeAccent[p.grade] || '#39962c'
  const img    = GRADE_IMG[p.grade]
  return (
    <div ref={ref} className="reveal transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
      style={{ background: '#fff', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '15rem', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img src={img} alt={p.grade} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${accent}ee 0%, transparent 55%)` }} />
        <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', right: '1.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <span style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>{p.grade}</span>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.375rem' }}>${p.price_per_kg}<span style={{ fontSize: '0.875rem', fontWeight: 400, opacity: 0.75 }}>/kg</span></span>
        </div>
      </div>
      <div style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '1rem', fontSize: '1.0625rem', lineHeight: 1.4 }}>{p.name}</h3>
        <p style={{ color: '#9ca3af', fontSize: '0.9375rem', lineHeight: 1.85, marginBottom: '1.75rem', flex: 1 }}>{p.description}</p>
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1.5rem', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            ['Fiber Length', `${p.fiber_length_cm} cm`],
            ['Moisture',     `~${p.moisture_content_percent}%`],
            ['Min. Order',   `${p.moq_kg} kg`],
            ['Stock',        `${p.stock_kg.toLocaleString()} kg`],
          ].map(([l, v]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{l}</span>
              <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.9375rem' }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.875rem' }}>
          <Link to={`/products/${p.id}`}
            className="flex-1 text-center font-semibold rounded-full text-sm transition-all duration-300"
            style={{ border: `2px solid ${accent}`, color: accent, padding: '0.875rem', display: 'block', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}>
            Details
          </Link>
          <Link to={`/contact?product=${p.name}`}
            className="flex-1 text-center text-white font-semibold rounded-full text-sm transition-all duration-300 hover:opacity-90"
            style={{ background: accent, padding: '0.875rem', display: 'block', textDecoration: 'none' }}>
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [search, setSearch]           = useState('')
  const [gradeFilter, setGradeFilter] = useState('All')
  const specsRef = useReveal(0)
  const grades   = ['All', 'Grade A', 'Grade B', 'Grade C']

  const filtered = MOCK_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (gradeFilter === 'All' || p.grade === gradeFilter) &&
    p.is_active
  )

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1920&q=85" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.88) 55%,rgba(40,110,30,0.82) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.25, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '52rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 500, padding: '0.75rem 1.5rem', borderRadius: '9999px', marginBottom: '2.25rem' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#8dc63f', display: 'inline-block' }} />
            100% Natural & Biodegradable
          </div>
          <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 4rem)', textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>Our Products</h1>
          <p style={{ color: 'rgba(220,252,231,0.65)', fontSize: '1.125rem', fontWeight: 300, maxWidth: '40rem', margin: '0 auto', lineHeight: 1.9, textAlign: 'center' }}>
            Premium raw banana fiber in three grades — sourced from banana pseudostems across Bangladesh.
          </p>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#f7f5f0" />

      <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem 8rem' }}>

        {/* Filter bar */}
        <div style={{ background: '#fff', borderRadius: '1.25rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6', padding: '1.5rem 2rem', marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '22rem' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input type="text" placeholder="Search products…" value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', paddingLeft: '2.75rem', paddingRight: '1rem', paddingTop: '0.875rem', paddingBottom: '0.875rem', borderRadius: '0.875rem', border: '1px solid #f3f4f6', background: '#f9fafb', outline: 'none', color: '#1f2937', fontSize: '0.9375rem', fontFamily: 'inherit' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
            {grades.map(g => (
              <button key={g} onClick={() => setGradeFilter(g)}
                className="transition-all duration-300 hover:-translate-y-0.5"
                style={gradeFilter === g
                  ? { background: '#39962c', color: '#fff', boxShadow: '0 4px 16px rgba(57,150,44,0.35)', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontSize: '0.9375rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }
                  : { background: '#f3f4f6', color: '#6b7280', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontSize: '0.9375rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }
                }>{g}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '8rem 0', color: '#9ca3af' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>No products found.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }} className="md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
          </div>
        )}

        {/* Tech specs */}
        <div ref={specsRef} className="reveal" style={{ marginTop: '5rem', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
          <div style={{ position: 'relative', height: '12rem', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1400&q=80" alt="Fiber texture" className="w-full h-full object-cover" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 3rem', background: 'linear-gradient(135deg,rgba(8,20,9,0.92),rgba(55,89,59,0.88))' }}>
              <div>
                <span style={{ color: '#8dc63f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Technical Data</span>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginTop: '0.75rem' }}>Technical Specifications</h3>
              </div>
            </div>
          </div>
          <div style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center', background: 'linear-gradient(135deg,#0d2010,#1e3d22)' }} className="md:grid-cols-2">
            <p style={{ color: 'rgba(187,247,208,0.55)', lineHeight: 1.95, fontSize: '0.9375rem' }}>
              All fiber is raw, decorticated and sun-dried. Composition: Cellulose (~65%), Hemicellulose (~15%), Lignin (~10%). Available in Natural Off-White / Cream / Pale Brown — fully dyeable.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.125rem' }}>
              {[
                ['Material',         '100% Banana Pseudostem'],
                ['Tensile Strength', '500–600 MPa'],
                ['Color',            'Off-White / Cream'],
                ['Biodegradability', '3–6 Months'],
              ].map(([l, v]) => (
                <div key={l} style={{ borderRadius: '0.875rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.07)' }}>
                  <div style={{ color: '#8dc63f', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>{l}</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9375rem' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
