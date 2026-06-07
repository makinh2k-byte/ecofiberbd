import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Zap, Shield, Recycle, Globe, Award } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

/* ── Slope SVG helpers ───────────────────────────────────── */
function SlopeDown({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0, display: 'block' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 80 }}>
        <polygon points="0,0 1440,0 1440,80 0,0" fill={from} />
      </svg>
    </div>
  )
}
function SlopeUp({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0, display: 'block' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 80 }}>
        <polygon points="0,80 1440,0 1440,80 0,80" fill={from} />
      </svg>
    </div>
  )
}

/* ── Data ─────────────────────────────────────────────────── */
const stats = [
  { value: '100%', label: 'Biodegradable' },
  { value: '500+', label: 'MPa Tensile Strength' },
  { value: '3–6 mo', label: 'Decomposition Time' },
  { value: '120 cm', label: 'Max Fiber Length' },
]

const features = [
  { icon: Leaf,    title: 'Eco-Friendly & Sustainable',  desc: 'Sourced entirely from post-harvest agricultural waste — no additional land, water, or fertilizers required.' },
  { icon: Zap,     title: 'High Strength & Durability',   desc: 'Tensile strength of 500–600 MPa, comparable to glass fiber. Resistant to saltwater and UV damage.' },
  { icon: Shield,  title: 'Safe & Non-Toxic',             desc: 'Naturally fire-resistant and free from hazardous chemicals or synthetic coatings.' },
  { icon: Recycle, title: 'Zero-Waste Process',           desc: 'Harvested from banana pseudostems — turning agricultural by-products into premium textile material.' },
  { icon: Globe,   title: 'Global Applications',          desc: 'Used in textiles, paper, handicrafts, marine ropes, and biocomposite manufacturing.' },
  { icon: Award,   title: 'Multiple Grades',              desc: 'Available in Grade A, B, and C — fiber lengths from 30 cm to 120 cm to suit every application.' },
]

const applications = [
  { icon: '👗', title: 'Textile & Fashion',  desc: '"Banana Silk" fabrics, shirts, sarees, and blended garments' },
  { icon: '🏠', title: 'Home Furnishings',   desc: 'Curtains, table mats, cushion covers, and upholstery' },
  { icon: '🧺', title: 'Handicrafts',        desc: 'Baskets, bags, hats, carpets, and wall hangings' },
  { icon: '⚓', title: 'Industrial Use',     desc: 'Marine ropes, shipping cables, and biocomposite materials' },
  { icon: '📄', title: 'Paper Industry',     desc: 'Archival paper, currency paper, and tea bags' },
]

const grades = [
  { grade: 'Grade A', accent: '#39962c', lightBg: 'rgba(57,150,44,0.08)',  desc: 'Premium long-staple fiber. Ideal for fine textiles, "Banana Silk", and high-end paper production.',    length: '90 – 120 cm', use: 'Textile · Fashion · Paper' },
  { grade: 'Grade B', accent: '#8dc63f', lightBg: 'rgba(141,198,63,0.10)', desc: 'Mid-grade fiber. Perfect for home furnishings, handicrafts, and industrial blended products.',          length: '60 – 90 cm',  use: 'Handicrafts · Furnishings' },
  { grade: 'Grade C', accent: '#37593b', lightBg: 'rgba(55,89,59,0.08)',   desc: 'Coarser fiber for industrial rope making, marine applications, and composite reinforcements.',           length: '30 – 60 cm',  use: 'Industrial · Marine · Composites' },
]

/* ── Feature card with reveal ─────────────────────────────── */
function FeatureCard({ f, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal group p-8 rounded-2xl border border-white/10 hover:border-[#8dc63f]/50 transition-all duration-500 cursor-default"
      style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(6px)' }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
        style={{ background: 'rgba(141,198,63,0.15)' }}>
        <f.icon size={24} color="#8dc63f" />
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
      <p className="text-green-200/55 text-sm leading-loose">{f.desc}</p>
    </div>
  )
}

/* ── Grade card with reveal ───────────────────────────────── */
function GradeCard({ g, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Gradient header */}
      <div className="h-28 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${g.accent}ee, ${g.accent}99)` }}>
        <span className="text-white text-3xl font-bold tracking-wide opacity-20 absolute"
          style={{ fontSize: 80, lineHeight: 1, bottom: -10 }}>{g.grade.split(' ')[1]}</span>
        <span className="relative z-10 text-white text-2xl font-bold">{g.grade}</span>
      </div>
      <div className="p-8">
        <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">{g.desc}</p>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-100">
            <span className="text-gray-400 text-sm font-medium">Fiber Length</span>
            <span className="font-bold text-gray-800">{g.length}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-400 text-sm font-medium">Best For</span>
            <span className="font-bold text-gray-800 text-right text-sm">{g.use}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── App card with reveal ─────────────────────────────────── */
function AppCard({ a, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal text-center p-8 rounded-2xl transition-all duration-300 cursor-default group hover:-translate-y-2 hover:shadow-xl"
      style={{ background: '#f8f6f1' }}
      onMouseEnter={e => { e.currentTarget.style.background = '#39962c' }}
      onMouseLeave={e => { e.currentTarget.style.background = '#f8f6f1' }}
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl"
        style={{ background: 'rgba(57,150,44,0.10)' }}>{a.icon}</div>
      <h4 className="font-bold text-gray-900 group-hover:text-white mb-3 text-base transition-colors">{a.title}</h4>
      <p className="text-sm text-gray-400 group-hover:text-green-100 transition-colors leading-relaxed">{a.desc}</p>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  const aboutTextRef   = useReveal(0)
  const aboutCardsRef  = useReveal(1)
  const ctaRef         = useReveal(0)
  const gradesHeadRef  = useReveal(0)
  const appsHeadRef    = useReveal(0)
  const ctaBtnRef      = useReveal(1)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ══ HERO ══════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0b1a0d 0%, #1a3d1e 45%, #2d7a22 100%)' }}
      >
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }} />
        {/* Glow orbs */}
        <div className="absolute -top-10 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(141,198,63,0.18),transparent 65%)' }} />
        <div className="absolute bottom-20 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(57,150,44,0.18),transparent 65%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-14 w-full pt-36 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8dc63f] pulse-dot" />
            Premium Natural Fiber from Bangladesh
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-[72px] leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Transforming Waste<br />
            into{' '}
            <span style={{
              background: 'linear-gradient(90deg, #8dc63f, #b5e55a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Sustainable
            </span>
            <br />Solutions
          </h1>

          <p className="text-lg md:text-xl text-green-100/70 mb-12 max-w-2xl leading-[1.8] font-light">
            100% biodegradable raw banana fiber — high tensile strength, lustrous silk-like texture.
            The eco-friendly alternative to synthetic fibers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products"
              className="group inline-flex items-center justify-center gap-2.5 font-semibold text-base px-9 py-4 rounded-full transition-all hover:-translate-y-1"
              style={{ background: '#39962c', boxShadow: '0 6px 30px rgba(57,150,44,0.45)' }}>
              View Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold text-base px-9 py-4 rounded-full transition-all hover:-translate-y-1 hover:border-white/40">
              Request Sample
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-14 w-full pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl px-6 py-5 text-center border border-white/12"
                style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}>
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-green-200/55 font-medium uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SlopeDown from="#1a3d1e" to="#ffffff" />

      {/* ══ ABOUT ════════════════════════════════ */}
      <section className="bg-white px-6 lg:px-14 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div ref={aboutTextRef} className="reveal-left">
              <span className="text-[#39962c] font-bold uppercase tracking-[0.22em] text-xs">About EcoFiber BD</span>
              <h2 className="text-4xl md:text-5xl mt-5 mb-7 leading-tight">
                Nature's Strongest<br />
                <span style={{ color: '#39962c' }}>Sustainable Fiber</span>
              </h2>
              <p className="text-gray-500 text-base leading-[1.9] mb-5">
                Our <strong className="text-gray-700">Premium Raw Banana Fiber</strong> is a high-grade natural lignocellulosic fiber
                extracted from the pseudostems of the banana plant (<em>Musa species</em>). Known for exceptional
                durability and natural luster, it's a superior sustainable alternative to synthetic fibers.
              </p>
              <p className="text-gray-500 text-base leading-[1.9] mb-10">
                Harvested from agricultural by-products — a zero-waste solution supporting Bangladesh's
                circular economy while empowering local banana farmers.
              </p>
              <Link to="/contact"
                className="inline-flex items-center gap-2.5 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl text-white"
                style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)' }}>
                Get in Touch <ArrowRight size={17} />
              </Link>
            </div>

            <div ref={aboutCardsRef} className="reveal-right grid grid-cols-2 gap-5">
              {[
                { e: '🌿', t: '100% Natural',  s: 'No chemicals or synthetic coatings', bg: '#ffffff', dark: false },
                { e: '💪', t: 'Ultra Strong',   s: '500–600 MPa tensile strength',       bg: '#39962c', dark: true  },
                { e: '✨', t: 'Silky Texture',  s: 'Natural sheen & pliable feel',       bg: '#8dc63f', dark: true  },
                { e: '♻️', t: 'Compostable',    s: 'Decomposes in 3–6 months',           bg: '#ffffff', dark: false },
              ].map((c, i) => (
                <div key={i}
                  className={`rounded-3xl p-7 ${!c.dark ? 'border border-green-100 shadow-sm hover:shadow-md' : 'hover:opacity-90'} transition-all`}
                  style={{ background: c.bg }}>
                  <div className="text-4xl mb-4">{c.e}</div>
                  <h4 className={`font-bold text-base mb-2 ${c.dark ? 'text-white' : 'text-gray-900'}`}>{c.t}</h4>
                  <p className={`text-sm leading-relaxed ${c.dark ? 'text-white/70' : 'text-gray-400'}`}>{c.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SlopeUp from="#0f2012" to="#ffffff" />

      {/* ══ FEATURES ══════════════════════════════ */}
      <section style={{ background: 'linear-gradient(150deg,#0b1a0d 0%,#1e3d22 60%,#37593b 100%)' }}
        className="px-6 lg:px-14 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#8dc63f] font-bold uppercase tracking-[0.22em] text-xs">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl text-white mt-5">Key Features & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => <FeatureCard key={i} f={f} index={i} />)}
          </div>
        </div>
      </section>

      <SlopeDown from="#1a3d1e" to="#f8f6f1" />

      {/* ══ GRADES ════════════════════════════════ */}
      <section style={{ background: '#f8f6f1' }} className="px-6 lg:px-14 py-28">
        <div className="max-w-6xl mx-auto">
          <div ref={gradesHeadRef} className="reveal text-center mb-20">
            <span className="text-[#39962c] font-bold uppercase tracking-[0.22em] text-xs">Our Products</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mt-5">Available Fiber Grades</h2>
            <p className="text-gray-400 mt-5 text-base max-w-xl mx-auto leading-relaxed">
              Three grades to match your exact application — from premium textile-grade to industrial fiber.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {grades.map((g, i) => <GradeCard key={i} g={g} index={i} />)}
          </div>
          <div className="text-center mt-14">
            <Link to="/products"
              className="inline-flex items-center gap-2.5 font-semibold text-base px-10 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-2xl text-white"
              style={{ background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)' }}>
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SlopeUp from="#ffffff" to="#f8f6f1" />

      {/* ══ APPLICATIONS ═══════════════════════════ */}
      <section className="bg-white px-6 lg:px-14 py-28">
        <div className="max-w-6xl mx-auto">
          <div ref={appsHeadRef} className="reveal text-center mb-20">
            <span className="text-[#39962c] font-bold uppercase tracking-[0.22em] text-xs">Use Cases</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mt-5">Applications & Usage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {applications.map((a, i) => <AppCard key={i} a={a} index={i} />)}
          </div>
        </div>
      </section>

      <SlopeUp from="#1a3d1e" to="#ffffff" />

      {/* ══ CTA ════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg,#1a3d1e 0%,#39962c 100%)' }}
        className="px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={ctaRef} className="reveal">
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              Ready to Source<br />Sustainable Fiber?
            </h2>
            <p className="text-lg text-green-100/65 mb-14 font-light leading-[1.9]">
              Contact us for samples, pricing, and bulk orders. We supply to textile mills,
              paper manufacturers, and export buyers worldwide.
            </p>
          </div>
          <div ref={ctaBtnRef} className="reveal flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center font-bold text-base px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all"
              style={{ background: '#fff', color: '#39962c' }}>
              Request a Sample
            </Link>
            <Link to="/products"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-bold text-base px-10 py-4 rounded-full hover:-translate-y-1 transition-all">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
