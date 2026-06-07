import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Package, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

const MOCK_PRODUCTS = [
  { id: 1, name: 'Grade A Premium Banana Fiber', grade: 'Grade A', fiber_length_cm: '90–120', moisture_content_percent: 13, moq_kg: 100,  price_per_kg: 8.5, stock_kg: 2000, description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production.', is_active: true },
  { id: 2, name: 'Grade B Standard Banana Fiber', grade: 'Grade B', fiber_length_cm: '60–90',  moisture_content_percent: 13, moq_kg: 150,  price_per_kg: 6.0, stock_kg: 3500, description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing.', is_active: true },
  { id: 3, name: 'Grade C Industrial Banana Fiber',grade: 'Grade C', fiber_length_cm: '30–60',  moisture_content_percent: 13, moq_kg: 200,  price_per_kg: 4.0, stock_kg: 5000, description: 'Coarser industrial-grade fiber best suited for marine ropes, shipping cables, and biocomposite reinforcements.', is_active: true },
]

const gradeAccent = { 'Grade A': '#39962c', 'Grade B': '#8dc63f', 'Grade C': '#37593b' }

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

function ProductCard({ p, index }) {
  const ref = useReveal(index)
  const accent = gradeAccent[p.grade] || '#39962c'
  return (
    <div ref={ref} className="reveal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
      {/* Grade header */}
      <div className="h-32 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}ee, ${accent}88)` }}>
        <span className="absolute text-white/15 font-bold" style={{ fontSize: 100, lineHeight: 1, bottom: -18 }}>
          {p.grade.replace('Grade ', '')}
        </span>
        <div className="relative z-10 text-center">
          <span className="text-white text-2xl font-bold">{p.grade}</span>
          <div className="text-white/70 text-sm mt-1 font-medium">{p.fiber_length_cm} cm fiber</div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-base font-bold text-gray-900 flex-1 pr-3 leading-snug">{p.name}</h3>
          <span className="text-2xl font-extrabold shrink-0" style={{ color: accent }}>${p.price_per_kg}</span>
        </div>
        <p className="text-xs text-gray-400 -mt-3 mb-1" style={{ color: accent }}>per kg</p>
        <p className="text-gray-400 text-sm leading-[1.8] mb-7 flex-1">{p.description}</p>

        <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
          {[
            ['Fiber Length',  `${p.fiber_length_cm} cm`],
            ['Moisture',      `~${p.moisture_content_percent}%`],
            ['Min. Order',    `${p.moq_kg} kg`],
            ['Stock',         `${p.stock_kg.toLocaleString()} kg`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">{label}</span>
              <span className="font-semibold text-gray-700 text-sm">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Link to={`/products/${p.id}`}
            className="flex-1 text-center border-2 font-semibold py-3 rounded-full text-sm transition-all hover:text-white"
            style={{ borderColor: accent, color: accent }}
            onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}>
            Details
          </Link>
          <Link to={`/contact?product=${p.name}`}
            className="flex-1 text-center text-white font-semibold py-3 rounded-full text-sm transition-all hover:opacity-90 hover:shadow-lg"
            style={{ background: accent }}>
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  const [search, setSearch] = useState('')
  const [gradeFilter, setGradeFilter] = useState('All')
  const headRef = useReveal(0)
  const grades = ['All', 'Grade A', 'Grade B', 'Grade C']

  const filtered = MOCK_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (gradeFilter === 'All' || p.grade === gradeFilter) &&
    p.is_active
  )

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
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8dc63f]" />
            100% Natural & Biodegradable
          </div>
          <h1 className="text-5xl md:text-6xl mb-5">Our Products</h1>
          <p className="text-green-100/65 text-lg font-light max-w-xl mx-auto leading-[1.8]">
            Premium raw banana fiber in three grades — sourced from banana pseudostems across Bangladesh.
          </p>
        </div>
      </section>

      <SlopeDown from="#1a3d1e" to="#f8f6f1" />

      <div className="max-w-6xl mx-auto px-6 lg:px-14 pb-28">
        {/* Filter bar */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-5 mb-12 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search products…" value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#39962c] text-gray-800 text-sm transition-colors" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {grades.map(g => (
              <button key={g} onClick={() => setGradeFilter(g)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={gradeFilter === g
                  ? { background: '#39962c', color: 'white', boxShadow: '0 4px 16px rgba(57,150,44,0.35)' }
                  : { background: '#f3f4f6', color: '#6b7280' }
                }>{g}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-28 text-gray-400">
            <Package size={48} className="mx-auto mb-5 opacity-30" />
            <p className="text-lg font-medium">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
          </div>
        )}

        {/* Tech specs */}
        <div ref={headRef} className="reveal mt-20 rounded-2xl overflow-hidden shadow-xl"
          style={{ background: 'linear-gradient(135deg,#0b1a0d 0%,#1e3d22 60%,#37593b 100%)' }}>
          <div className="px-10 py-12 md:py-14 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#8dc63f] font-bold uppercase tracking-[0.22em] text-xs">Technical Data</span>
              <h3 className="text-3xl text-white mt-4 mb-5">Technical Specifications</h3>
              <p className="text-green-200/55 leading-[1.9] text-sm">
                All fiber is raw, decorticated and sun-dried. Composition: Cellulose (~65%),
                Hemicellulose (~15%), Lignin (~10%). Available in Natural Off-White / Cream / Pale Brown — fully dyeable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Material',         '100% Banana Pseudostem'],
                ['Tensile Strength', '500–600 MPa'],
                ['Color',            'Off-White / Cream'],
                ['Biodegradability', '3–6 Months'],
              ].map(([l, v]) => (
                <div key={l} className="rounded-2xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <div className="text-[#8dc63f] text-xs font-bold uppercase tracking-wider mb-2">{l}</div>
                  <div className="font-bold text-white text-sm">{v}</div>
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
