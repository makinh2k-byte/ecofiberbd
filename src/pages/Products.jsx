import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, ArrowRight, Package } from 'lucide-react'
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

const gradeColors = {
  'Grade A': { bg: 'bg-[#39962c]', text: 'text-[#39962c]', border: 'border-[#39962c]', light: 'bg-[#39962c]/10' },
  'Grade B': { bg: 'bg-[#8dc63f]', text: 'text-[#8dc63f]', border: 'border-[#8dc63f]', light: 'bg-[#8dc63f]/10' },
  'Grade C': { bg: 'bg-[#37593b]', text: 'text-[#37593b]', border: 'border-[#37593b]', light: 'bg-[#37593b]/10' },
}

export default function Products() {
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [search, setSearch] = useState('')
  const [gradeFilter, setGradeFilter] = useState('All')

  const grades = ['All', 'Grade A', 'Grade B', 'Grade C']

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchGrade = gradeFilter === 'All' || p.grade === gradeFilter
    return matchSearch && matchGrade && p.is_active
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="pt-32 pb-16 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #37593b 0%, #39962c 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            🌿 100% Natural & Biodegradable
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Premium raw banana fiber available in three grades — sourced from banana pseudostems
            in Bangladesh.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] bg-white"
            />
          </div>

          {/* Grade Filter */}
          <div className="flex gap-2 flex-wrap">
            {grades.map(g => (
              <button
                key={g}
                onClick={() => setGradeFilter(g)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  gradeFilter === g
                    ? 'bg-[#39962c] text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#39962c]'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <Package size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(p => {
              const colors = gradeColors[p.grade] || gradeColors['Grade A']
              return (
                <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                  {/* Card Header */}
                  <div className={`${colors.light} px-6 pt-6 pb-4 border-b border-gray-100`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`${colors.bg} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {p.grade}
                      </span>
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        ${p.price_per_kg}/kg
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>

                    {/* Specs */}
                    <div className="space-y-2 mb-6">
                      {[
                        { label: 'Fiber Length', value: `${p.fiber_length_cm} cm` },
                        { label: 'Moisture Content', value: `~${p.moisture_content_percent}%` },
                        { label: 'Min. Order (MOQ)', value: `${p.moq_kg} kg` },
                        { label: 'Stock Available', value: `${p.stock_kg.toLocaleString()} kg` },
                      ].map(spec => (
                        <div key={spec.label} className="flex justify-between text-sm border-b border-gray-50 pb-2">
                          <span className="text-gray-500">{spec.label}</span>
                          <span className="font-semibold text-gray-800">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={`/products/${p.id}`}
                        className="flex-1 text-center border border-[#39962c] text-[#39962c] py-2.5 rounded-xl text-sm font-medium hover:bg-[#39962c] hover:text-white transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/contact?product=${p.name}`}
                        className="flex-1 text-center bg-[#39962c] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#2d7a22] transition-colors"
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

        {/* Technical Specs Banner */}
        <div className="mt-16 bg-[#37593b] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Technical Specifications</h3>
              <p className="text-green-200 leading-relaxed">
                All our banana fiber is raw, decorticated and sun-dried. Composition: Cellulose (~65%),
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
                <div key={s.label} className="bg-white/10 rounded-xl p-4">
                  <div className="text-green-300 text-xs mb-1">{s.label}</div>
                  <div className="font-semibold text-sm">{s.value}</div>
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
