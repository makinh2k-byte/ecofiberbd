import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Package, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Grade A Premium Banana Fiber',
    grade: 'Grade A',
    fiber_length_cm: '90–120',
    moisture_content_percent: 13,
    moq_kg: 100,
    price_per_kg: 8.5,
    stock_kg: 2000,
    description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production.',
    is_active: true,
  },
  {
    id: 2,
    name: 'Grade B Standard Banana Fiber',
    grade: 'Grade B',
    fiber_length_cm: '60–90',
    moisture_content_percent: 13,
    moq_kg: 150,
    price_per_kg: 6.0,
    stock_kg: 3500,
    description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing.',
    is_active: true,
  },
  {
    id: 3,
    name: 'Grade C Industrial Banana Fiber',
    grade: 'Grade C',
    fiber_length_cm: '30–60',
    moisture_content_percent: 13,
    moq_kg: 200,
    price_per_kg: 4.0,
    stock_kg: 5000,
    description: 'Coarser industrial-grade fiber best suited for marine ropes, shipping cables, and biocomposite reinforcements.',
    is_active: true,
  },
]

const gradeAccent = {
  'Grade A': '#39962c',
  'Grade B': '#8dc63f',
  'Grade C': '#37593b',
}

export default function Products() {
  const [search, setSearch] = useState('')
  const [gradeFilter, setGradeFilter] = useState('All')

  const grades = ['All', 'Grade A', 'Grade B', 'Grade C']

  const filtered = MOCK_PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchGrade = gradeFilter === 'All' || p.grade === gradeFilter
    return matchSearch && matchGrade && p.is_active
  })

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
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8dc63f]" />
            100% Natural & Biodegradable
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Our Products</h1>
          <p className="text-green-100/70 text-lg font-light max-w-xl mx-auto">
            Premium raw banana fiber in three grades — sourced from banana pseudostems across Bangladesh.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16" style={{ marginTop: '-2rem' }}>
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#39962c] text-gray-800 text-[15px]"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {grades.map(g => (
              <button
                key={g}
                onClick={() => setGradeFilter(g)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  gradeFilter === g
                    ? 'text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={gradeFilter === g ? { background: '#39962c' } : {}}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <Package size={48} className="mx-auto mb-4 opacity-40" />
            <p className="text-lg font-medium">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(p => {
              const accent = gradeAccent[p.grade] || '#39962c'
              return (
                <div
                  key={p.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Top accent stripe */}
                  <div className="h-1.5 w-full" style={{ background: accent }} />

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-white text-xs font-bold px-4 py-1.5 rounded-full"
                        style={{ background: accent }}
                      >
                        {p.grade}
                      </span>
                      <span className="text-xl font-extrabold" style={{ color: accent }}>
                        ${p.price_per_kg}/kg
                      </span>
                    </div>

                    <h3 className="text-[18px] font-extrabold text-gray-900 mb-3">{p.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{p.description}</p>

                    <div className="space-y-2.5 mb-6">
                      {[
                        { label: 'Fiber Length', value: `${p.fiber_length_cm} cm` },
                        { label: 'Moisture Content', value: `~${p.moisture_content_percent}%` },
                        { label: 'Min. Order (MOQ)', value: `${p.moq_kg} kg` },
                        { label: 'Stock Available', value: `${p.stock_kg.toLocaleString()} kg` },
                      ].map(spec => (
                        <div key={spec.label} className="flex justify-between text-sm border-b border-gray-50 pb-2.5">
                          <span className="text-gray-400 font-medium">{spec.label}</span>
                          <span className="font-bold text-gray-800">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={`/products/${p.id}`}
                        className="flex-1 text-center border-2 font-semibold py-2.5 rounded-full text-sm transition-all hover:text-white"
                        style={{ borderColor: accent, color: accent }}
                        onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = 'white' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}
                      >
                        Details
                      </Link>
                      <Link
                        to={`/contact?product=${p.name}`}
                        className="flex-1 text-center text-white font-semibold py-2.5 rounded-full text-sm transition-all hover:opacity-90 hover:shadow-md"
                        style={{ background: accent }}
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Tech specs banner */}
        <div
          className="mt-16 rounded-3xl p-10 md:p-14 text-white"
          style={{ background: 'linear-gradient(135deg, #0f2012 0%, #37593b 100%)' }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#8dc63f] font-bold uppercase tracking-[0.2em] text-xs">Technical Data</span>
              <h3 className="text-3xl font-extrabold mt-3 mb-4 tracking-tight">Technical Specifications</h3>
              <p className="text-green-200/60 leading-relaxed text-[15px]">
                All fiber is raw, decorticated and sun-dried. Composition: Cellulose (~65%),
                Hemicellulose (~15%), Lignin (~10%). Available in Natural Off-White / Cream / Pale Brown (Dyeable).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Material', value: '100% Banana Pseudostem' },
                { label: 'Tensile Strength', value: '500–600 MPa' },
                { label: 'Color', value: 'Off-White / Cream' },
                { label: 'Biodegradability', value: '3–6 Months' },
              ].map(s => (
                <div key={s.label} className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <div className="text-[#8dc63f] text-xs font-bold uppercase tracking-wider mb-1.5">{s.label}</div>
                  <div className="font-bold text-[15px]">{s.value}</div>
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
