import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

/* ── Images ─────────────────────────────────────────────── */
const IMG = {
  hero:     'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1920&q=85',
  about:    'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=900&q=80',
  gradeA:   'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80',
  gradeB:   'https://images.unsplash.com/photo-1612690669207-fed642192c40?auto=format&fit=crop&w=700&q=80',
  gradeC:   'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=80',
  appTextile:    'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=500&q=80',
  appHome:       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80',
  appHandicraft: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=500&q=80',
  appIndustrial: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=500&q=80',
  appPaper:      'https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?auto=format&fit=crop&w=500&q=80',
}

/* ── Slopes ─────────────────────────────────────────────── */
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
function SlopeUp({ from, to }) {
  return (
    <div style={{ background: to, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: 80 }}>
        <polygon points="0,80 1440,0 1440,80 0,80" fill={from} />
      </svg>
    </div>
  )
}

/* ── Data ───────────────────────────────────────────────── */
const stats = [
  { value: '100%', label: 'Biodegradable' },
  { value: '500+', label: 'MPa Tensile Strength' },
  { value: '3–6 mo', label: 'Decomposition Time' },
  { value: '120 cm', label: 'Max Fiber Length' },
]

const features = [
  { num: '01', title: 'Eco-Friendly & Sustainable',  desc: 'Sourced entirely from post-harvest agricultural waste — no additional land, water, or fertilizers required.' },
  { num: '02', title: 'High Strength & Durability',   desc: 'Tensile strength of 500–600 MPa, comparable to glass fiber. Resistant to saltwater and UV damage.' },
  { num: '03', title: 'Safe & Non-Toxic',             desc: 'Naturally fire-resistant and free from hazardous chemicals or synthetic coatings.' },
  { num: '04', title: 'Zero-Waste Process',           desc: 'Harvested from banana pseudostems — turning agricultural by-products into premium textile material.' },
  { num: '05', title: 'Global Applications',          desc: 'Used in textiles, paper, handicrafts, marine ropes, and biocomposite manufacturing.' },
  { num: '06', title: 'Multiple Grades',              desc: 'Available in Grade A, B, and C — fiber lengths from 30 cm to 120 cm to suit every application.' },
]

const applications = [
  { title: 'Textile & Fashion',  desc: '"Banana Silk" fabrics, shirts, sarees, and blended garments',   img: IMG.appTextile },
  { title: 'Home Furnishings',   desc: 'Curtains, table mats, cushion covers, and upholstery',           img: IMG.appHome },
  { title: 'Handicrafts',        desc: 'Baskets, bags, hats, carpets, and wall hangings',                img: IMG.appHandicraft },
  { title: 'Industrial Use',     desc: 'Marine ropes, shipping cables, and biocomposite materials',       img: IMG.appIndustrial },
  { title: 'Paper Industry',     desc: 'Archival paper, currency paper, and tea bags',                    img: IMG.appPaper },
]

const grades = [
  { grade: 'Grade A', accent: '#39962c', desc: 'Premium long-staple fiber. Ideal for fine textiles, "Banana Silk", and high-end paper production.',    length: '90 – 120 cm', use: 'Textile · Fashion · Paper', img: IMG.gradeA },
  { grade: 'Grade B', accent: '#8dc63f', desc: 'Mid-grade fiber. Perfect for home furnishings, handicrafts, and industrial blended products.',          length: '60 – 90 cm',  use: 'Handicrafts · Furnishings',  img: IMG.gradeB },
  { grade: 'Grade C', accent: '#37593b', desc: 'Coarser fiber for industrial rope making, marine applications, and composite reinforcements.',           length: '30 – 60 cm',  use: 'Industrial · Marine',         img: IMG.gradeC },
]

/* ── Sub-components ─────────────────────────────────────── */
function FeatureCard({ f, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal group p-8 rounded-2xl border border-white/10 hover:border-[#8dc63f]/40 transition-all duration-500"
      style={{ background: 'rgba(255,255,255,0.06)' }}>
      <div className="text-[#8dc63f] text-xs font-bold tracking-[0.22em] mb-5">{f.num}</div>
      <div className="w-10 h-0.5 bg-[#8dc63f]/40 mb-6 group-hover:bg-[#8dc63f] transition-colors" />
      <h3 className="text-lg text-white mb-4">{f.title}</h3>
      <p className="text-green-200/50 text-sm leading-[1.9]">{f.desc}</p>
    </div>
  )
}

function GradeCard({ g, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="h-52 overflow-hidden relative">
        <img src={g.img} alt={g.grade} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${g.accent}cc 0%, transparent 60%)` }} />
        <span className="absolute bottom-4 left-5 text-white text-xl font-bold">{g.grade}</span>
      </div>
      <div className="p-8">
        <p className="text-gray-500 leading-[1.9] mb-7 text-[15px]">{g.desc}</p>
        <div className="space-y-4 border-t border-gray-100 pt-5">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Fiber Length</span>
            <span className="font-bold text-gray-800">{g.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Best For</span>
            <span className="font-bold text-gray-800 text-right text-sm">{g.use}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppCard({ a, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 group">
      <div className="h-48 overflow-hidden relative">
        <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      </div>
      <div className="bg-white p-6">
        <h4 className="font-bold text-gray-900 mb-2 text-[15px]">{a.title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
      </div>
    </div>
  )
}

/* ── Page ───────────────────────────────────────────────── */
export default function Home() {
  const aboutTextRef  = useReveal(0)
  const aboutImgRef   = useReveal(1)
  const ctaRef        = useReveal(0)
  const ctaBtnRef     = useReveal(1)
  const gradesHeadRef = useReveal(0)
  const appsHeadRef   = useReveal(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ══ HERO ════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Banana plantation" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,26,13,0.93) 0%, rgba(26,61,30,0.85) 50%, rgba(45,122,34,0.80) 100%)' }} />
        </div>

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-14 w-full pt-36 pb-16">
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8dc63f] pulse-dot" />
            Premium Natural Fiber from Bangladesh
          </div>

          <h1 className="text-5xl md:text-[72px] leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Transforming Waste<br />
            into{' '}
            <span style={{
              background: 'linear-gradient(90deg,#8dc63f,#b5e55a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Sustainable</span>
            <br />Solutions
          </h1>

          <p className="text-lg md:text-xl text-green-100/70 mb-12 max-w-2xl leading-[1.85] font-light">
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

        {/* Stats */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-14 w-full pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl px-6 py-5 text-center border border-white/12"
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-green-200/55 font-medium uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SlopeDown from="#1a3d1e" to="#ffffff" />

      {/* ══ ABOUT ═══════════════════════════════ */}
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
                Our <strong className="text-gray-700">Premium Raw Banana Fiber</strong> is a high-grade natural
                lignocellulosic fiber extracted from the pseudostems of the banana plant (<em>Musa species</em>).
                Known for exceptional durability and natural luster, it's a superior sustainable alternative
                to synthetic fibers and traditional coarse fibers like jute.
              </p>
              <p className="text-gray-500 text-base leading-[1.9] mb-10">
                Harvested from agricultural by-products — a zero-waste solution supporting Bangladesh's
                circular economy while empowering local banana farmers.
              </p>

              {/* Inline stats */}
              <div className="grid grid-cols-2 gap-5 mb-10">
                {[
                  { label: '100% Natural',  sub: 'No chemicals or coatings' },
                  { label: '500–600 MPa',   sub: 'Tensile strength' },
                  { label: 'Silky Texture', sub: 'Natural sheen & luster' },
                  { label: 'Compostable',   sub: 'Decomposes in 3–6 months' },
                ].map((c, i) => (
                  <div key={i} className="border-l-2 border-[#39962c] pl-4">
                    <div className="font-bold text-gray-900 text-[15px]">{c.label}</div>
                    <div className="text-sm text-gray-400 mt-0.5">{c.sub}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact"
                className="inline-flex items-center gap-2.5 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl text-white"
                style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)' }}>
                Get in Touch <ArrowRight size={17} />
              </Link>
            </div>

            {/* Photo */}
            <div ref={aboutImgRef} className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[520px]">
                <img src={IMG.about} alt="Natural banana fiber" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SlopeUp from="#0f2012" to="#ffffff" />

      {/* ══ FEATURES ════════════════════════════ */}
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

      {/* ══ GRADES ══════════════════════════════ */}
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

      {/* ══ APPLICATIONS ════════════════════════ */}
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

      {/* ══ CTA ═════════════════════════════════ */}
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
