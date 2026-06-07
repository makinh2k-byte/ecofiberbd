import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Package, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MOCK_PRODUCTS = [
  { id: 1, name: 'Grade A Premium Banana Fiber', grade: 'Grade A', fiber_length_cm: '90–120', moisture_content_percent: 13, moq_kg: 100,  price_per_kg: 8.5, stock_kg: 2000, description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production.', is_active: true },
  { id: 2, name: 'Grade B Standard Banana Fiber', grade: 'Grade B', fiber_length_cm: '60–90',  moisture_content_percent: 13, moq_kg: 150,  price_per_kg: 6.0, stock_kg: 3500, description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing.',          is_active: true },
  { id: 3, name: 'Grade C Industrial Banana Fiber',grade: 'Grade C', fiber_length_cm: '30–60',  moisture_content_percent: 13, moq_kg: 200,  price_per_kg: 4.0, stock_kg: 5000, description: 'Coarser industrial-grade fiber best suited for marine ropes, shipping cables, and biocomposite reinforcements.',   is_active: true },
]

const gradeAccent = { 'Grade A': '#39962c', 'Grade B': '#8dc63f', 'Grade C': '#37593b' }

function SlopeDown({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
        <polygon points="0,0 1440,0 1440,60 0,0" fill={from} />
      </svg>
    </div>
  )
}

export default function Products() {
  const [search, setSearch] = useState('')
  const [gradeFilter, setGradeFilter] = useState('All')
  const grades = ['All', 'Grade A', 'Grade B', 'Grade C']

  const filtered = MOCK_PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchGrade  = gradeFilter === 'All' || p.grade === gradeFilter
    return matchSearch && matchGrade && p.is_active
  })

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f8f6f1' }}>
      <Navbar />

      {/* Hero */}
      <section
        className="text-white text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f2012 0%, #1e3d22 50%, #39962c 100%)', paddingTop: '8rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8dc63f]" />
            100% Natural & Biodegradable
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-green-100/70 text-lg font-light max-w-xl mx-auto">
            Premium raw banana fiber in three grades — sourced from banana pseudostems across Bangladesh.
          </p>
        </div>
      </section>

      <SlopeDown from="#1a3d20" to="#f8f6f1" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pb-20">

        {/* Filter bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4 mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text" placeholder="Search products..." value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#39962c] text-gray-800 text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {grades.map(g => (
              <button key={g} onClick={() => setGradeFilter(g)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={gradeFilter === g
                  ? { background: '#39962c', color: 'white' }
                  : { background: '#f3f4f6', color: '#6b7280' }
                }
              >{g}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <Package size={44} className="mx-auto mb-4 opacity-40" />
            <p className="text-base font-medium">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => {
              const accent = gradeAccent[p.grade] || '#39962c'
              return (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="h-1.5" style={{ background: accent }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white text-xs font-bold px-3.5 py-1.5 rounded-full" style={{ background: accent }}>{p.grade}</span>
                      <span className="text-xl font-extrabold" style={{ color: accent }}>${p.price_per_kg}/kg</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{p.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
                    <div className="space-y-2 mb-5">
                      {[
                        ['Fiber Length',   `${p.fiber_length_cm} cm`],
                        ['Moisture',       `~${p.moisture_content_percent}%`],
                        ['Min. Order',     `${p.moq_kg} kg`],
                        ['Stock',          `${p.stock_kg.toLocaleString()} kg`],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                          <span className="text-gray-400">{label}</span>
                          <span className="font-semibold text-gray-800">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link to={`/products/${p.id}`}
                        className="flex-1 text-center border-2 font-semibold py-2.5 rounded-full text-sm transition-all"
                        style={{ borderColor: accent, color: accent }}
                        onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#fff' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}
                      >Details</Link>
                      <Link to={`/contact?product=${p.name}`}
                        className="flex-1 text-center text-white font-semibold py-2.5 rounded-full text-sm transition-all hover:opacity-90"
                        style={{ background: accent }}
                      >Get Quote</Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Tech specs */}
        <div className="mt-14 rounded-2xl p-8 md:p-12 text-white"
          style={{ background: 'linear-gradient(135deg, #0f2012 0%, #37593b 100%)' }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#8dc63f] font-semibold uppercase tracking-widest text-xs">Technical Data</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">Technical Specifications</h3>
              <p className="text-green-200/60 leading-relaxed text-sm">
                All fiber is raw, decorticated and sun-dried. Composition: Cellulose (~65%),
                Hemicellulose (~15%), Lignin (~10%). Available in Natural Off-White / Cream / Pale Brown (Dyeable).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Material',        '100% Banana Pseudostem'],
                ['Tensile Strength','500–600 MPa'],
                ['Color',           'Off-White / Cream'],
                ['Biodegradability','3–6 Months'],
              ].map(([l, v]) => (
                <div key={l} className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-[#8dc63f] text-xs font-bold uppercase tracking-wider mb-1">{l}</div>
                  <div className="font-bold text-sm">{v}</div>
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
