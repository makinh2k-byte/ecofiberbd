import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Zap, Shield, Recycle, Globe, Award } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const stats = [
  { value: '100%', label: 'Biodegradable' },
  { value: '500+', label: 'MPa Tensile Strength' },
  { value: '3–6 mo', label: 'Decomposition' },
  { value: '120 cm', label: 'Max Fiber Length' },
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
    desc: 'Available in Grade A, B, and C — with fiber lengths from 30 cm to 120 cm to suit every application.',
  },
]

const applications = [
  { icon: '👗', title: 'Textile & Fashion', desc: '"Banana Silk" fabrics, shirts, sarees, and blended garments' },
  { icon: '🏠', title: 'Home Furnishings', desc: 'Curtains, table mats, cushion covers, and upholstery' },
  { icon: '🧺', title: 'Handicrafts', desc: 'Baskets, bags, hats, carpets, and decorative wall hangings' },
  { icon: '⚓', title: 'Industrial Use', desc: 'Marine ropes, shipping cables, and biocomposite materials' },
  { icon: '📄', title: 'Paper Industry', desc: 'High-quality, tear-resistant archival and currency paper' },
]

const grades = [
  {
    grade: 'Grade A',
    accent: '#39962c',
    desc: 'Premium long-staple fiber. Ideal for fine textiles, "Banana Silk", and high-end paper production.',
    length: '90 cm – 120 cm',
    use: 'Textile · Fashion · Paper',
  },
  {
    grade: 'Grade B',
    accent: '#8dc63f',
    desc: 'Mid-grade fiber. Perfect for home furnishings, handicrafts, and industrial blended products.',
    length: '60 cm – 90 cm',
    use: 'Handicrafts · Furnishings',
  },
  {
    grade: 'Grade C',
    accent: '#37593b',
    desc: 'Coarser fiber for industrial applications, rope making, and composite reinforcements.',
    length: '30 cm – 60 cm',
    use: 'Industrial · Marine · Composites',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f2012 0%, #1e3d22 40%, #39962c 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
          paddingBottom: '8rem',
        }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8dc63f, transparent 70%)' }} />
        <div className="absolute bottom-20 -left-32 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #39962c, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center py-40">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm font-medium px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8dc63f] animate-pulse" />
            Premium Natural Fiber from Bangladesh
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight">
            Transforming Waste<br />into{' '}
            <span style={{ color: '#8dc63f' }}>Sustainable</span><br />
            Solutions
          </h1>

          <p className="text-lg md:text-xl text-green-100/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            100% biodegradable raw banana fiber — high tensile strength, lustrous silk-like texture.
            The eco-friendly alternative to synthetic fibers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-white font-semibold text-[16px] px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.4)' }}
            >
              View Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold text-[16px] px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Request Sample
            </Link>
          </div>
        </div>

        {/* Floating stat badges */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 hidden md:grid grid-cols-4 gap-4 z-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-green-200/70 font-medium mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        className="bg-white py-28 px-6 lg:px-10"
        style={{ marginTop: '-2px' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#39962c] font-bold uppercase tracking-[0.2em] text-xs">About EcoFiber BD</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight tracking-tight">
                Nature's Strongest<br />
                <span style={{ color: '#39962c' }}>Sustainable Fiber</span>
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-5">
                Our <strong className="text-gray-700">Premium Raw Banana Fiber</strong> is a high-grade natural lignocellulosic fiber
                extracted from the pseudostems of the banana plant (<em>Musa species</em>). Known for exceptional
                durability and natural luster, it's a superior sustainable alternative to synthetic fibers.
              </p>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                Harvested from agricultural by-products — a zero-waste solution supporting Bangladesh's
                circular economy while empowering local banana farmers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#39962c' }}
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>

            {/* 2×2 grid cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🌿', title: '100% Natural', sub: 'No chemicals or synthetic coatings', bg: 'white', border: true },
                { emoji: '💪', title: 'Ultra Strong', sub: '500–600 MPa tensile strength', bg: '#39962c', dark: true },
                { emoji: '✨', title: 'Silky Texture', sub: 'Natural sheen & pliable feel', bg: '#8dc63f', dark: true },
                { emoji: '♻️', title: 'Compostable', sub: 'Decomposes in 3–6 months', bg: 'white', border: true },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`rounded-3xl p-7 ${c.border ? 'border border-green-100 shadow-sm' : ''}`}
                  style={{ background: c.bg }}
                >
                  <div className="text-3xl mb-3">{c.emoji}</div>
                  <h4 className={`font-bold text-[16px] mb-1 ${c.dark ? 'text-white' : 'text-gray-900'}`}>{c.title}</h4>
                  <p className={`text-sm ${c.dark ? 'text-white/70' : 'text-gray-400'}`}>{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── sloped both sides */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0f2012 0%, #37593b 100%)',
          clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
          paddingTop: '9rem',
          paddingBottom: '9rem',
          marginTop: '-3rem',
          marginBottom: '-3rem',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[#8dc63f] font-bold uppercase tracking-[0.2em] text-xs">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">Key Features & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-7 rounded-3xl border border-white/10 hover:border-[#8dc63f]/50 transition-all duration-300 cursor-default"
                style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors"
                  style={{ background: 'rgba(141,198,63,0.15)' }}
                >
                  <f.icon size={22} color="#8dc63f" />
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3">{f.title}</h3>
                <p className="text-green-200/60 text-[15px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRADES ── */}
      <section className="bg-[#f8f6f1] py-28 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#39962c] font-bold uppercase tracking-[0.2em] text-xs">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">Available Fiber Grades</h2>
            <p className="text-gray-400 mt-4 text-[16px] max-w-xl mx-auto">
              Three grades to match your exact application — from premium textile-grade to industrial fiber.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {grades.map((g, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: g.accent }} />
                <span
                  className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6"
                  style={{ background: g.accent }}
                >
                  {g.grade}
                </span>
                <p className="text-gray-500 mb-7 leading-relaxed text-[15px]">{g.desc}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-400 font-medium">Fiber Length</span>
                    <span className="font-bold text-gray-800">{g.length}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-gray-400 font-medium">Best For</span>
                    <span className="font-bold text-gray-800 text-right">{g.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-white font-semibold text-[16px] px-9 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)' }}
            >
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── sloped */}
      <section
        style={{
          background: 'white',
          clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)',
          paddingTop: '9rem',
          paddingBottom: '9rem',
          marginTop: '-2rem',
          marginBottom: '-2rem',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-[#39962c] font-bold uppercase tracking-[0.2em] text-xs">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">Applications & Usage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {applications.map((a, i) => (
              <div
                key={i}
                className="text-center p-7 rounded-3xl transition-all duration-300 cursor-default group hover:-translate-y-1"
                style={{ background: '#f8f6f1' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#39962c' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f8f6f1' }}
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h4 className="font-bold text-gray-900 group-hover:text-white mb-2 text-[15px] transition-colors">{a.title}</h4>
                <p className="text-xs text-gray-400 group-hover:text-green-100 transition-colors leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── sloped top */}
      <section
        style={{
          background: 'linear-gradient(135deg, #39962c 0%, #1e3d22 100%)',
          clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)',
          paddingTop: '9rem',
          paddingBottom: '6rem',
          marginTop: '-1rem',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to Source<br />Sustainable Fiber?
          </h2>
          <p className="text-lg text-green-100/70 mb-12 max-w-xl mx-auto font-light">
            Contact us for samples, pricing, and bulk orders. We supply to textile mills,
            paper manufacturers, and export buyers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white font-bold text-[16px] px-9 py-4 rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all"
              style={{ color: '#39962c' }}
            >
              Request a Sample
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-[16px] px-9 py-4 rounded-full hover:-translate-y-1 transition-all"
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
