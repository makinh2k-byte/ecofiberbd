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
  { id: 1, name: 'Grade A Premium Banana Fiber', grade: 'Grade A', fiber_length_cm: '90–120', moisture_content_percent: 13, moq_kg: 100,  price_per_kg: 8.5, stock_kg: 2000, description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production.', is_active: true },
  { id: 2, name: 'Grade B Standard Banana Fiber', grade: 'Grade B', fiber_length_cm: '60–90',  moisture_content_percent: 13, moq_kg: 150,  price_per_kg: 6.0, stock_kg: 3500, description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing.',          is_active: true },
  { id: 3, name: 'Grade C Industrial Banana Fiber',grade: 'Grade C', fiber_length_cm: '30–60',  moisture_content_percent: 13, moq_kg: 200,  price_per_kg: 4.0, stock_kg: 5000, description: 'Coarser industrial-grade fiber for marine ropes, shipping cables, and biocomposite reinforcements.',              is_active: true },
]

const Slope = ({ dir = 'down', from, to }) => (
  <div style={{ background: to, lineHeight: 0, fontSize: 0 }}>
    <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 72 }}>
      {dir === 'down'
        ? <polygon points="0,0 1440,0 1440,72 0,0" fill={from} />
        : <polygon points="0,72 1440,0 1440,72 0,72" fill={from} />}
    </svg>
  </div>
)

function ProductCard({ p, index }) {
  const ref = useReveal(index)
  const accent = gradeAccent[p.grade] || '#39962c'
  const img    = GRADE_IMG[p.grade]
  return (
    <div ref={ref} className="reveal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col">
      <div className="h-52 overflow-hidden relative flex-shrink-0">
        <img src={img} alt={p.grade} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top,${accent}dd 0%,transparent 55%)` }} />
        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
          <span className="text-white text-lg font-bold">{p.grade}</span>
          <span className="text-white font-extrabold text-xl">${p.price_per_kg}<span className="text-sm font-normal opacity-75">/kg</span></span>
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 mb-3 text-base leading-snug">{p.name}</h3>
        <p className="text-gray-400 text-sm leading-[1.85] mb-6 flex-1">{p.description}</p>
        <div className="space-y-2.5 border-t border-gray-100 pt-5 mb-6">
          {[
            ['Fiber Length', `${p.fiber_length_cm} cm`],
            ['Moisture',     `~${p.moisture_content_percent}%`],
            ['Min. Order',   `${p.moq_kg} kg`],
            ['Stock',        `${p.stock_kg.toLocaleString()} kg`],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">{l}</span>
              <span className="font-semibold text-gray-700 text-sm">{v}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <Link to={`/products/${p.id}`}
            className="flex-1 text-center border-2 font-semibold py-3 rounded-full text-sm transition-all duration-300"
            style={{ borderColor: accent, color: accent }}
            onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}>
            Details
          </Link>
          <Link to={`/contact?product=${p.name}`}
            className="flex-1 text-center text-white font-semibold py-3 rounded-full text-sm transition-all duration-300 hover:opacity-90"
            style={{ background: accent }}>
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative text-white text-center overflow-hidden" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1920&q=85"
            alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.88) 55%,rgba(40,110,30,0.82) 100%)' }} />
        </div>
        <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8dc63f]" />
            100% Natural & Biodegradable
          </div>
          <h1 className="text-5xl md:text-6xl mb-5">Our Products</h1>
          <p className="text-green-100/65 text-lg font-light max-w-xl mx-auto leading-[1.85]">
            Premium raw banana fiber in three grades — sourced from banana pseudostems across Bangladesh.
          </p>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#f7f5f0" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 pb-24">
        {/* Filter bar */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-5 mb-10 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search products…" value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#39962c] text-gray-800 text-sm" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {grades.map(g => (
              <button key={g} onClick={() => setGradeFilter(g)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={gradeFilter === g
                  ? { background: '#39962c', color: '#fff', boxShadow: '0 4px 16px rgba(57,150,44,0.35)' }
                  : { background: '#f3f4f6', color: '#6b7280' }
                }>{g}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
          </div>
        )}

        {/* Tech specs */}
        <div ref={specsRef} className="reveal mt-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-44 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1400&q=80"
              alt="Fiber texture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center px-10"
              style={{ background: 'linear-gradient(135deg,rgba(8,20,9,0.92),rgba(55,89,59,0.88))' }}>
              <div>
                <span className="text-[#8dc63f] font-bold uppercase tracking-[0.2em] text-xs">Technical Data</span>
                <h3 className="text-3xl text-white mt-3">Technical Specifications</h3>
              </div>
            </div>
          </div>
          <div className="px-10 py-10 grid md:grid-cols-2 gap-10 items-center"
            style={{ background: 'linear-gradient(135deg,#0d2010,#1e3d22)' }}>
            <p className="text-green-200/55 leading-[1.9] text-sm">
              All fiber is raw, decorticated and sun-dried. Composition: Cellulose (~65%),
              Hemicellulose (~15%), Lignin (~10%). Available in Natural Off-White / Cream / Pale Brown — fully dyeable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Material',         '100% Banana Pseudostem'],
                ['Tensile Strength', '500–600 MPa'],
                ['Color',            'Off-White / Cream'],
                ['Biodegradability', '3–6 Months'],
              ].map(([l, v]) => (
                <div key={l} className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.07)' }}>
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
