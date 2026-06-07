import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

/* ─── Images ──────────────────────────────────────────────── */
const IMG = {
  hero:       'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1920&q=85',
  about:      'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=80',
  gradeA:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  gradeB:     'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
  gradeC:     'https://images.unsplash.com/photo-1519752327041-5a77f2a92e3d?auto=format&fit=crop&w=800&q=80',
  textile:    'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=600&q=80',
  home:       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
  handicraft: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=600&q=80',
  rope:       'https://images.unsplash.com/photo-1519752327041-5a77f2a92e3d?auto=format&fit=crop&w=600&q=80',
  paper:      'https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?auto=format&fit=crop&w=600&q=80',
}

/* ─── Slope dividers ──────────────────────────────────────── */
const Slope = ({ dir = 'down', from, to }) => (
  <div style={{ background: to, lineHeight: 0, display: 'block', fontSize: 0 }}>
    <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 72 }}>
      {dir === 'down'
        ? <polygon points="0,0 1440,0 1440,72 0,0" fill={from} />
        : <polygon points="0,72 1440,0 1440,72 0,72" fill={from} />}
    </svg>
  </div>
)

/* ─── Data ────────────────────────────────────────────────── */
const stats = [
  { value: '100%',   label: 'Biodegradable' },
  { value: '500+',   label: 'MPa Tensile Strength' },
  { value: '3–6 mo', label: 'Decomposition Time' },
  { value: '120 cm', label: 'Max Fiber Length' },
]

const features = [
  { num: '01', title: 'Eco-Friendly',       desc: 'Sourced from post-harvest agricultural waste — no extra land, water, or fertilizers needed.' },
  { num: '02', title: 'High Strength',       desc: 'Tensile strength of 500–600 MPa, comparable to glass fiber. UV and saltwater resistant.' },
  { num: '03', title: 'Safe & Non-Toxic',    desc: 'Naturally fire-resistant. Free from hazardous chemicals or synthetic coatings.' },
  { num: '04', title: 'Zero-Waste Process',  desc: 'Harvested from banana pseudostems — turning by-products into premium material.' },
  { num: '05', title: 'Global Reach',        desc: 'Supplied to textile mills, paper manufacturers, and export buyers worldwide.' },
  { num: '06', title: 'Multiple Grades',     desc: 'Grade A, B, and C with fiber lengths 30–120 cm to suit every application.' },
]

const grades = [
  { grade: 'Grade A', accent: '#39962c', img: IMG.gradeA, length: '90–120 cm', use: 'Textile · Fashion · Paper',   desc: 'Premium long-staple fiber. Ideal for fine textiles, "Banana Silk", and high-end paper.' },
  { grade: 'Grade B', accent: '#8dc63f', img: IMG.gradeB, length: '60–90 cm',  use: 'Handicrafts · Furnishings',   desc: 'Mid-grade fiber for home furnishings, handicrafts, and industrial blended products.' },
  { grade: 'Grade C', accent: '#37593b', img: IMG.gradeC, length: '30–60 cm',  use: 'Industrial · Marine',         desc: 'Coarser fiber for rope making, marine applications, and composite reinforcements.' },
]

const applications = [
  { title: 'Textile & Fashion',  desc: 'Banana Silk fabrics, sarees, blended garments', img: IMG.textile },
  { title: 'Home Furnishings',   desc: 'Curtains, table mats, cushion covers',           img: IMG.home },
  { title: 'Handicrafts',        desc: 'Baskets, bags, hats, carpets',                   img: IMG.handicraft },
  { title: 'Industrial Use',     desc: 'Marine ropes, cables, biocomposites',            img: IMG.rope },
  { title: 'Paper Industry',     desc: 'Archival paper, currency paper, tea bags',       img: IMG.paper },
]

/* ─── Sub-components (hooks called at component top-level, not in loops) ── */

function FeatureCard({ f, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref}
      className="reveal p-8 rounded-2xl border border-white/10 hover:border-[#8dc63f]/40 transition-all duration-500 hover:-translate-y-1"
      style={{ background: 'rgba(255,255,255,0.06)' }}>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#8dc63f] font-bold text-xs tracking-[0.2em]">{f.num}</span>
        <div className="flex-1 h-px bg-[#8dc63f]/25" />
      </div>
      <h3 className="text-lg text-white mb-3">{f.title}</h3>
      <p className="text-green-200/50 text-sm leading-[1.85]">{f.desc}</p>
    </div>
  )
}

function GradeCard({ g, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref}
      className="reveal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col">
      <div className="h-52 overflow-hidden relative flex-shrink-0">
        <img src={g.img} alt={g.grade} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top,${g.accent}dd 0%,transparent 55%)` }} />
        <span className="absolute bottom-4 left-5 text-white text-xl font-bold">{g.grade}</span>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <p className="text-gray-500 text-sm leading-[1.85] mb-6 flex-1">{g.desc}</p>
        <div className="space-y-3 border-t border-gray-100 pt-5">
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Fiber Length</span>
            <span className="font-bold text-gray-800 text-sm">{g.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-sm">Best For</span>
            <span className="font-bold text-gray-800 text-sm text-right">{g.use}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppCard({ a, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref}
      className="reveal bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100">
      <div className="h-40 overflow-hidden">
        <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-5 text-center">
        <h4 className="font-bold text-gray-900 text-sm mb-1.5">{a.title}</h4>
        <p className="text-xs text-gray-400 leading-relaxed">{a.desc}</p>
      </div>
    </div>
  )
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  const aboutTextRef = useReveal(0)
  const aboutImgRef  = useReveal(1)
  const featHeadRef  = useReveal(0)
  const gradeHeadRef = useReveal(0)
  const appHeadRef   = useReveal(0)
  const ctaRef       = useReveal(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ════════════════════════════════ HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Banana plantation" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.87) 50%,rgba(40,110,30,0.82) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />

        {/* Hero Content — fully centered */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-5 py-2.5 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-[#8dc63f] pulse-dot" />
            Premium Natural Fiber from Bangladesh
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-7 text-center w-full">
            Transforming Waste<br />
            into{' '}
            <span style={{
              background: 'linear-gradient(90deg,#8dc63f 0%,#c0f060 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Sustainable</span>
            <br />Solutions
          </h1>

          <p className="text-lg md:text-xl text-green-100/70 max-w-2xl mb-12 leading-[1.85] font-light text-center">
            100% biodegradable raw banana fiber — high tensile strength, lustrous silk-like texture.
            The eco-friendly alternative to synthetic fibers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products"
              className="group inline-flex items-center justify-center gap-2.5 font-semibold text-base px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-white"
              style={{ background: '#39962c', boxShadow: '0 6px 28px rgba(57,150,44,0.45)' }}>
              View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1">
              Request Sample
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl px-5 py-5 text-center border border-white/15"
                style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(10px)' }}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-green-200/60 font-semibold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#ffffff" />

      {/* ════════════════════════════════ ABOUT */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div ref={aboutTextRef} className="reveal-left">
              <span className="text-[#39962c] font-bold uppercase tracking-[0.2em] text-xs">About EcoFiber BD</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">
                Nature's Strongest<br />
                <span style={{ color: '#39962c' }}>Sustainable Fiber</span>
              </h2>
              <p className="text-gray-500 text-base leading-[1.9] mb-4">
                Our <strong className="text-gray-700">Premium Raw Banana Fiber</strong> is a high-grade natural
                lignocellulosic fiber extracted from the pseudostems of the banana plant (<em>Musa species</em>).
                Known for exceptional durability and natural luster, it's a superior sustainable alternative
                to synthetic fibers and traditional coarse fibers like jute.
              </p>
              <p className="text-gray-500 text-base leading-[1.9] mb-10">
                Harvested from agricultural by-products — a zero-waste solution supporting Bangladesh's
                circular economy while empowering local banana farmers.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {[
                  { label: '100% Natural',  sub: 'No chemicals or coatings' },
                  { label: '500–600 MPa',   sub: 'Tensile strength' },
                  { label: 'Silky Texture', sub: 'Natural sheen & luster' },
                  { label: 'Compostable',   sub: 'Decomposes in 3–6 months' },
                ].map((c, i) => (
                  <div key={i} className="border-l-4 border-[#39962c] pl-4">
                    <div className="font-bold text-gray-900 text-base">{c.label}</div>
                    <div className="text-sm text-gray-400 mt-0.5 leading-snug">{c.sub}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact"
                className="inline-flex items-center gap-2.5 font-semibold px-8 py-4 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)' }}>
                Get in Touch <ArrowRight size={17} />
              </Link>
            </div>

            <div ref={aboutImgRef} className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={IMG.about} alt="Natural banana fiber" className="w-full h-full object-cover img-zoom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slope dir="up" from="#0d2010" to="#ffffff" />

      {/* ════════════════════════════════ FEATURES */}
      <section style={{ background: 'linear-gradient(160deg,#0d2010 0%,#1a3820 55%,#2e5535 100%)' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div ref={featHeadRef} className="reveal text-center mb-16">
            <span className="text-[#8dc63f] font-bold uppercase tracking-[0.2em] text-xs">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl text-white mt-4">Key Features & Benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} f={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#f7f5f0" />

      {/* ════════════════════════════════ GRADES */}
      <section style={{ background: '#f7f5f0' }} className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div ref={gradeHeadRef} className="reveal text-center mb-16">
            <span className="text-[#39962c] font-bold uppercase tracking-[0.2em] text-xs">Our Products</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mt-4">Available Fiber Grades</h2>
            <p className="text-gray-400 mt-4 text-base max-w-lg mx-auto leading-relaxed">
              Three grades to match your exact application — from premium textile-grade to industrial fiber.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grades.map((g, i) => (
              <GradeCard key={i} g={g} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products"
              className="inline-flex items-center gap-2.5 font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-white"
              style={{ background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)' }}>
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Slope dir="up" from="#ffffff" to="#f7f5f0" />

      {/* ════════════════════════════════ APPLICATIONS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div ref={appHeadRef} className="reveal text-center mb-16">
            <span className="text-[#39962c] font-bold uppercase tracking-[0.2em] text-xs">Use Cases</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mt-4">Applications & Usage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {applications.map((a, i) => (
              <AppCard key={i} a={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Slope dir="up" from="#1a3820" to="#ffffff" />

      {/* ════════════════════════════════ CTA */}
      <section style={{ background: 'linear-gradient(135deg,#1a3820 0%,#39962c 100%)' }} className="py-24">
        <div ref={ctaRef} className="reveal max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
            Ready to Source<br />Sustainable Fiber?
          </h2>
          <p className="text-lg text-green-100/65 mb-12 font-light leading-[1.9] max-w-xl mx-auto">
            Contact us for samples, pricing, and bulk orders. We supply to textile mills,
            paper manufacturers, and export buyers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center font-bold text-base px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              style={{ background: '#fff', color: '#39962c' }}>
              Request a Sample
            </Link>
            <Link to="/products"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-bold text-base px-10 py-4 rounded-full hover:-translate-y-1 transition-all duration-300">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
