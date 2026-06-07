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
  { icon: Leaf,    title: 'Eco-Friendly & Sustainable',  desc: 'Sourced entirely from post-harvest agricultural waste — no additional land, water, or fertilizers required.' },
  { icon: Zap,     title: 'High Strength & Durability',   desc: 'Tensile strength of 500–600 MPa, comparable to glass fiber. Resistant to saltwater and UV damage.' },
  { icon: Shield,  title: 'Safe & Non-Toxic',             desc: 'Naturally fire-resistant and free from hazardous chemicals or synthetic coatings.' },
  { icon: Recycle, title: 'Zero-Waste Process',           desc: 'Harvested from banana pseudostems — turning agricultural by-products into premium textile material.' },
  { icon: Globe,   title: 'Global Applications',          desc: 'Used in textiles, paper industry, handicrafts, marine ropes, and biocomposite manufacturing.' },
  { icon: Award,   title: 'Multiple Grades',              desc: 'Available in Grade A, B, and C — with fiber lengths from 30 cm to 120 cm to suit every application.' },
]

const applications = [
  { icon: '👗', title: 'Textile & Fashion',  desc: '"Banana Silk" fabrics, shirts, sarees, blended garments' },
  { icon: '🏠', title: 'Home Furnishings',   desc: 'Curtains, table mats, cushion covers, upholstery' },
  { icon: '🧺', title: 'Handicrafts',        desc: 'Baskets, bags, hats, carpets, wall hangings' },
  { icon: '⚓', title: 'Industrial Use',     desc: 'Marine ropes, shipping cables, biocomposite materials' },
  { icon: '📄', title: 'Paper Industry',     desc: 'Archival paper, currency paper, tea bags' },
]

const grades = [
  { grade: 'Grade A', accent: '#39962c', desc: 'Premium long-staple fiber. Ideal for fine textiles, "Banana Silk", and high-end paper production.', length: '90 – 120 cm', use: 'Textile · Fashion · Paper' },
  { grade: 'Grade B', accent: '#8dc63f', desc: 'Mid-grade fiber. Perfect for home furnishings, handicrafts, and industrial blended products.',         length: '60 – 90 cm',  use: 'Handicrafts · Furnishings' },
  { grade: 'Grade C', accent: '#37593b', desc: 'Coarser fiber for industrial applications, rope making, and composite reinforcements.',                 length: '30 – 60 cm',  use: 'Industrial · Marine · Composites' },
]

/* ─── Shared slope divider (white chevron pointing down) ─── */
function SlopeDown({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
        <polygon points="0,0 1440,0 1440,60 0,0" fill={from} />
      </svg>
    </div>
  )
}

function SlopeUp({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
        <polygon points="0,60 1440,0 1440,60 0,60" fill={from} />
      </svg>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(135deg, #0f2012 0%, #1e3d22 45%, #39962c 100%)' }}
        className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden"
      >
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(141,198,63,0.25), transparent 70%)' }} />
        <div className="absolute bottom-32 -left-20 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(57,150,44,0.20), transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full pt-32 pb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8dc63f] animate-pulse" />
            Premium Natural Fiber from Bangladesh
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            Transforming Waste<br />
            into{' '}
            <span style={{ color: '#8dc63f' }}>Sustainable</span>
            <br />Solutions
          </h1>

          <p className="text-lg md:text-xl text-green-100/75 mb-10 max-w-2xl leading-relaxed font-light">
            100% biodegradable raw banana fiber — high tensile strength, lustrous silk-like texture.
            The eco-friendly alternative to synthetic fibers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.4)' }}
            >
              View Products <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              Request Sample
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full pb-20 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/08 border border-white/12 rounded-2xl px-5 py-4 text-center backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.07)' }}>
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-green-200/60 font-medium mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* slope hero → white */}
      <SlopeDown from="#1a3d20" to="#ffffff" />

      {/* ── ABOUT ────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#39962c] font-semibold uppercase tracking-widest text-xs">About EcoFiber BD</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
                Nature's Strongest<br />
                <span style={{ color: '#39962c' }}>Sustainable Fiber</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                Our <strong className="text-gray-700">Premium Raw Banana Fiber</strong> is a high-grade natural
                lignocellulosic fiber extracted from the pseudostems of the banana plant (<em>Musa species</em>).
                Known for exceptional durability and natural luster, it's a superior sustainable alternative
                to synthetic fibers.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
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

            <div className="grid grid-cols-2 gap-4">
              {[
                { e: '🌿', t: '100% Natural',   s: 'No chemicals or synthetic coatings', bg: '#ffffff', dark: false },
                { e: '💪', t: 'Ultra Strong',    s: '500–600 MPa tensile strength',       bg: '#39962c', dark: true  },
                { e: '✨', t: 'Silky Texture',   s: 'Natural sheen & pliable feel',       bg: '#8dc63f', dark: true  },
                { e: '♻️', t: 'Compostable',     s: 'Decomposes in 3–6 months',           bg: '#ffffff', dark: false },
              ].map((c, i) => (
                <div key={i} className={`rounded-3xl p-6 ${!c.dark ? 'border border-green-100 shadow-sm' : ''}`}
                  style={{ background: c.bg }}>
                  <div className="text-3xl mb-3">{c.e}</div>
                  <h4 className={`font-bold text-base mb-1 ${c.dark ? 'text-white' : 'text-gray-900'}`}>{c.t}</h4>
                  <p className={`text-sm ${c.dark ? 'text-white/70' : 'text-gray-400'}`}>{c.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* slope white → dark */}
      <SlopeUp from="#0f2012" to="#ffffff" />

      {/* ── FEATURES ─────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #0f2012 0%, #37593b 100%)' }} className="px-6 lg:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#8dc63f] font-semibold uppercase tracking-widest text-xs">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Key Features & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="p-7 rounded-2xl border border-white/10 hover:border-[#8dc63f]/40 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(141,198,63,0.15)' }}>
                  <f.icon size={20} color="#8dc63f" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-green-200/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* slope dark → cream */}
      <SlopeDown from="#1a3d20" to="#f8f6f1" />

      {/* ── GRADES ───────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20" style={{ background: '#f8f6f1' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#39962c] font-semibold uppercase tracking-widest text-xs">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Available Fiber Grades</h2>
            <p className="text-gray-400 mt-3 text-base max-w-xl mx-auto">
              Three grades to match your exact application — from premium textile-grade to industrial fiber.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {grades.map((g, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: g.accent }} />
                <span className="inline-block text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5"
                  style={{ background: g.accent }}>{g.grade}</span>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">{g.desc}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-400 font-medium">Fiber Length</span>
                    <span className="font-bold text-gray-800">{g.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-medium">Best For</span>
                    <span className="font-bold text-gray-800">{g.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products"
              className="inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)' }}>
              View All Products <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* slope cream → white */}
      <SlopeUp from="#ffffff" to="#f8f6f1" />

      {/* ── APPLICATIONS ─────────────────────────── */}
      <section className="bg-white px-6 lg:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#39962c] font-semibold uppercase tracking-widest text-xs">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Applications & Usage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {applications.map((a, i) => (
              <div key={i}
                className="text-center p-6 rounded-2xl transition-all duration-300 cursor-default group hover:-translate-y-1 hover:shadow-lg"
                style={{ background: '#f8f6f1' }}
                onMouseEnter={e => e.currentTarget.style.background = '#39962c'}
                onMouseLeave={e => e.currentTarget.style.background = '#f8f6f1'}
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h4 className="font-bold text-gray-900 group-hover:text-white mb-2 text-sm transition-colors">{a.title}</h4>
                <p className="text-xs text-gray-400 group-hover:text-green-100 transition-colors leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* slope white → green */}
      <SlopeUp from="#39962c" to="#ffffff" />

      {/* ── CTA ──────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #39962c 0%, #1e3d22 100%)' }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Source<br />Sustainable Fiber?
          </h2>
          <p className="text-lg text-green-100/70 mb-10 font-light">
            Contact us for samples, pricing, and bulk orders. We supply to textile mills,
            paper manufacturers, and export buyers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white font-bold text-base px-9 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-2xl transition-all"
              style={{ color: '#39962c' }}>
              Request a Sample
            </Link>
            <Link to="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-base px-9 py-4 rounded-full hover:-translate-y-0.5 transition-all">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
