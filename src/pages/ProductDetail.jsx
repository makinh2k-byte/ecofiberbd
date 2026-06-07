import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Package, Truck, Leaf } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PRODUCTS = [
  {
    id: 1,
    name: 'Grade A Premium Banana Fiber',
    grade: 'Grade A',
    fiber_length_cm: '90–120',
    moisture_content_percent: 13,
    moq_kg: 100,
    price_per_kg: 8.5,
    stock_kg: 2000,
    description: 'Premium long-staple banana fiber ideal for fine textiles, "Banana Silk" fabrics, and high-end paper production. Carefully decorticated and sun-dried to preserve natural luster and strength.',
    applications: ['Fine Textiles & "Banana Silk"', 'Sarees & Blended Garments', 'High-Quality Paper', 'Currency & Archival Paper', 'Tea Bag Production'],
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
    description: 'Mid-grade fiber perfect for home furnishings, handicrafts, blended textiles, and general manufacturing. Excellent balance of strength and workability.',
    applications: ['Curtains & Table Mats', 'Cushion Covers & Upholstery', 'Baskets & Bags', 'Hats & Carpets', 'Decorative Wall Hangings'],
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
    description: 'Coarser industrial-grade fiber best suited for marine ropes, shipping cables, and biocomposite reinforcements. Superior resistance to saltwater and UV damage.',
    applications: ['Marine Ropes & Shipping Cables', 'Biocomposite Panels', 'Automotive Reinforcements', 'Industrial Composites', 'Construction Materials'],
  },
]

const specs = (p) => [
  { label: 'Material', value: '100% Natural Banana Pseudostem Fiber' },
  { label: 'Fiber Type', value: 'Raw, Decorticated & Sun-Dried' },
  { label: 'Grade', value: p.grade },
  { label: 'Color', value: 'Natural Off-White / Cream / Pale Brown (Dyeable)' },
  { label: 'Fiber Length', value: `${p.fiber_length_cm} cm` },
  { label: 'Texture', value: 'Silky sheen, lightweight, stiff yet pliable' },
  { label: 'Tensile Strength', value: 'High — 500–600 MPa' },
  { label: 'Moisture Regain', value: `~${p.moisture_content_percent}% (Breathable)` },
  { label: 'Composition', value: 'Cellulose ~65%, Hemicellulose ~15%, Lignin ~10%' },
  { label: 'Biodegradability', value: '100% Biodegradable & Compostable (3–6 months)' },
  { label: 'Min. Order (MOQ)', value: `${p.moq_kg} kg` },
  { label: 'Stock Available', value: `${p.stock_kg.toLocaleString()} kg` },
]

const gradeColors = {
  'Grade A': 'bg-[#39962c]',
  'Grade B': 'bg-[#8dc63f]',
  'Grade C': 'bg-[#37593b]',
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === parseInt(id))

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
        <Link to="/products" className="text-[#39962c] font-medium">← Back to Products</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link to="/products" className="inline-flex items-center gap-2 text-[#39962c] font-medium mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Image placeholder + grade badge */}
            <div>
              <div
                className="rounded-2xl overflow-hidden h-80 flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, #37593b 0%, #39962c 100%)' }}
              >
                <div className="text-center">
                  <div className="text-7xl mb-4">🌿</div>
                  <p className="text-2xl font-bold">{product.grade}</p>
                  <p className="text-green-200 mt-1">Raw Banana Fiber</p>
                </div>
              </div>

              {/* Packaging Info */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: Package, label: 'Packaging', value: 'Jute or PP Bags' },
                  { icon: Truck, label: 'Shipping', value: 'Export Ready' },
                  { icon: Leaf, label: 'Type', value: 'Sun-Dried' },
                ].map(item => (
                  <div key={item.label} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                    <item.icon size={20} className="text-[#39962c] mx-auto mb-2" />
                    <div className="text-xs text-gray-500">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-800 mt-0.5">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Details */}
            <div>
              <span className={`inline-block text-white text-sm font-bold px-3 py-1 rounded-full mb-4 ${gradeColors[product.grade]}`}>
                {product.grade}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#39962c]/10 rounded-xl px-5 py-3">
                  <div className="text-xs text-gray-500 mb-0.5">Price</div>
                  <div className="text-2xl font-bold text-[#39962c]">${product.price_per_kg}/kg</div>
                </div>
                <div className="bg-gray-100 rounded-xl px-5 py-3">
                  <div className="text-xs text-gray-500 mb-0.5">Min. Order</div>
                  <div className="text-2xl font-bold text-gray-800">{product.moq_kg} kg</div>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Key Applications</h3>
                <ul className="space-y-2">
                  {product.applications.map(a => (
                    <li key={a} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle size={16} className="text-[#39962c] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Link
                  to={`/contact?product=${product.name}`}
                  className="flex-1 text-center bg-[#39962c] text-white py-3.5 rounded-xl font-semibold hover:bg-[#2d7a22] transition-colors"
                >
                  Request Quote
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 text-center border-2 border-[#39962c] text-[#39962c] py-3.5 rounded-xl font-semibold hover:bg-[#39962c] hover:text-white transition-colors"
                >
                  Request Sample
                </Link>
              </div>
            </div>
          </div>

          {/* Full Specs Table */}
          <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#37593b] text-white px-8 py-5">
              <h2 className="text-xl font-bold">Full Technical Specifications</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {specs(product).map(s => (
                <div key={s.label} className="flex flex-col sm:flex-row sm:items-center px-8 py-4 gap-1 sm:gap-4">
                  <div className="text-gray-500 text-sm w-48 shrink-0">{s.label}</div>
                  <div className="font-medium text-gray-800">{s.value}</div>
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
