import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Zap, Shield, Recycle, Globe, Award, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const stats = [
  { value: '100%', label: 'Biodegradable' },
  { value: '500+', label: 'MPa Tensile Strength' },
  { value: '3-6', label: 'Months Decomposition' },
  { value: '30cm-120cm', label: 'Fiber Length' },
]

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly & Sustainable',
    desc: 'Sourced entirely from post-harvest agricultural waste — no additional land, water, or fertilizers required.',
  },
  {
    icon: Zap,
    title: 'High Strength & Durability',
    desc: 'Tensile strength of 500–600 MPa, comparable to glass fiber. Resistant to saltwater and UV damage.',
  },
  {
    icon: Shield,
    title: 'Safe & Non-Toxic',
    desc: 'Naturally fire-resistant and free from hazardous chemicals or synthetic coatings.',
  },
  {
    icon: Recycle,
    title: 'Zero-Waste Process',
    desc: 'Harvested from banana pseudostems — turning agricultural by-products into premium textile material.',
  },
  {
    icon: Globe,
    title: 'Global Applications',
    desc: 'Used in textiles, paper industry, handicrafts, marine ropes, and biocomposite manufacturing.',
  },
  {
    icon: Award,
    title: 'Multiple Grades',
    desc: 'Available in Grade A, B, and C — with fiber lengths from 30cm to 120cm to suit every application.',
  },
]

const applications = [
  { icon: '👗', title: 'Textile & Fashion', desc: '"Banana Silk" fabrics, shirts, sarees, and blended garments' },
  { icon: '🏠', title: 'Home Furnishings', desc: 'Curtains, table mats, cushion covers, and upholstery' },
  { icon: '🧺', title: 'Handicrafts', desc: 'Baskets, bags, hats, carpets, and decorative wall hangings' },
  { icon: '⚓', title: 'Industrial Use', desc: 'Marine ropes, shipping cables, and biocomposite materials' },
  { icon: '📄', title: 'Paper Industry', desc: 'High-quality, tear-resistant archival paper, currency paper, tea bags' },
]

const grades = [
  {
    grade: 'Grade A',
    color: 'border-[#39962c]',
    badge: 'bg-[#39962c]',
    desc: 'Premium quality, long staple fiber. Ideal for fine textiles and high-end applications.',
    length: '90cm – 120cm',
    use: 'Textile, Fashion, Paper',
  },
  {
    grade: 'Grade B',
    color: 'border-[#8dc63f]',
    badge: 'bg-[#8dc63f]',
    desc: 'Mid-grade fiber suitable for home furnishings, handicrafts and industrial blends.',
    length: '60cm – 90cm',
    use: 'Handicrafts, Furnishings',
  },
  {
    grade: 'Grade C',
    color: 'border-[#37593b]',
    badge: 'bg-[#37593b]',
    desc: 'Coarser fiber best suited for industrial applications, ropes, and composite reinforcements.',
    length: '30cm – 60cm',
    use: 'Industrial, Marine, Composites',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a3d1e 0%, #37593b 40%, #39962c 100%)' }}
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/30">
            🌿 Premium Natural Fiber from Bangladesh
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Waste into<br />
            <span className="text-[#8dc63f]">Sustainable Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            100% biodegradable raw banana fiber — high tensile strength, lustrous silk-like texture.
            The eco-friendly alternative to synthetic fibers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-[#8dc63f] hover:bg-[#7ab535] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
            >
              View Products <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Request Sample
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#39962c] mb-2">{s.value}</div>
                <div className="text-gray-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#39962c] font-semibold uppercase tracking-widest text-sm">About EcoFiber BD</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                Premium Raw Banana Fiber from Nature's Best
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our <strong>Premium Raw Banana Fiber</strong> is a high-grade, natural lignocellulosic fiber extracted
                from the pseudostems of the banana plant (<em>Musa species</em>). Known for its exceptional durability
                and natural luster, it serves as a superior sustainable alternative to synthetic fibers and traditional
                coarse fibers like jute.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Harvested from agricultural by-products, our fiber is a zero-waste, eco-friendly solution
                for the textile, paper, and handicraft industries — supporting Bangladesh's circular economy
                while empowering local banana farmers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#39962c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2d7a22] transition-colors"
              >
                Get in Touch <ChevronRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                <div className="text-3xl mb-3">🌿</div>
                <h4 className="font-semibold text-gray-900 mb-1">100% Natural</h4>
                <p className="text-gray-500 text-sm">No chemicals or synthetic coatings</p>
              </div>
              <div className="bg-[#39962c] rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="font-semibold mb-1">Ultra Strong</h4>
                <p className="text-green-100 text-sm">500–600 MPa tensile strength</p>
              </div>
              <div className="bg-[#8dc63f] rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">✨</div>
                <h4 className="font-semibold mb-1">Silky Texture</h4>
                <p className="text-green-100 text-sm">Natural sheen & pliable feel</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                <div className="text-3xl mb-3">♻️</div>
                <h4 className="font-semibold text-gray-900 mb-1">Compostable</h4>
                <p className="text-gray-500 text-sm">Decomposes in 3–6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#39962c] font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Key Features & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-[#39962c] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#39962c]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#39962c] transition-colors">
                  <f.icon size={24} className="text-[#39962c] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grades */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#39962c] font-semibold uppercase tracking-widest text-sm">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Available Fiber Grades</h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Three grades to match your exact application — from premium textile-grade to industrial-use fiber.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {grades.map((g, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 border-t-4 shadow-sm hover:shadow-lg transition-shadow ${g.color}`}>
                <span className={`inline-block text-white text-sm font-bold px-3 py-1 rounded-full mb-5 ${g.badge}`}>
                  {g.grade}
                </span>
                <p className="text-gray-600 mb-6 leading-relaxed">{g.desc}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Fiber Length</span>
                    <span className="font-semibold text-gray-800">{g.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Best For</span>
                    <span className="font-semibold text-gray-800">{g.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#39962c] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2d7a22] transition-colors"
            >
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#39962c] font-semibold uppercase tracking-widest text-sm">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Applications & Usage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {applications.map((a, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#f5f0e8] hover:bg-[#39962c] hover:text-white group transition-all duration-300">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-white mb-2">{a.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-green-100">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-24 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #37593b 0%, #39962c 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Source Sustainable Fiber?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Contact us for samples, pricing, and bulk orders. We supply to textile mills,
            paper manufacturers, and export buyers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#39962c] px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors"
            >
              Request a Sample
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
