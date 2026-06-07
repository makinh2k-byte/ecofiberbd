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
  { grade: 'Grade A', accent: '#39962c', img: IMG.gradeA, length: '90–120 cm', use: 'Textile · Fashion · Paper',  desc: 'Premium long-staple fiber. Ideal for fine textiles, "Banana Silk", and high-end paper.' },
  { grade: 'Grade B', accent: '#8dc63f', img: IMG.gradeB, length: '60–90 cm',  use: 'Handicrafts · Furnishings', desc: 'Mid-grade fiber for home furnishings, handicrafts, and industrial blended products.' },
  { grade: 'Grade C', accent: '#37593b', img: IMG.gradeC, length: '30–60 cm',  use: 'Industrial · Marine',       desc: 'Coarser fiber for rope making, marine applications, and composite reinforcements.' },
]

const applications = [
  { title: 'Textile & Fashion',  desc: 'Banana Silk fabrics, sarees, blended garments', img: IMG.textile },
  { title: 'Home Furnishings',   desc: 'Curtains, table mats, cushion covers',           img: IMG.home },
  { title: 'Handicrafts',        desc: 'Baskets, bags, hats, carpets',                   img: IMG.handicraft },
  { title: 'Industrial Use',     desc: 'Marine ropes, cables, biocomposites',            img: IMG.rope },
  { title: 'Paper Industry',     desc: 'Archival paper, currency paper, tea bags',       img: IMG.paper },
]

/* ─── Sub-components (hooks MUST be at top-level of each component) ── */

function FeatureCard({ f, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref}
      className="reveal p-8 rounded-2xl border border-white/10 hover:border-[#8dc63f]/40 transition-all duration-500 hover:-translate-y-1"
      style={{ background: 'rgba(255,255,255,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <span style={{ color: '#8dc63f', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em' }}>{f.num}</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(141,198,63,0.25)' }} />
      </div>
      <h3 style={{ color: '#fff', fontSize: '1.125rem', marginBottom: '0.75rem' }}>{f.title}</h3>
      <p style={{ color: 'rgba(187,247,208,0.5)', fontSize: '0.875rem', lineHeight: 1.85 }}>{f.desc}</p>
    </div>
  )
}

function GradeCard({ g, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref}
      className="reveal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
      style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '13rem', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img src={g.img} alt={g.grade} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top,${g.accent}dd 0%,transparent 55%)` }} />
        <span style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>{g.grade}</span>
      </div>
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.85, marginBottom: '1.5rem', flex: 1 }}>{g.desc}</p>
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Fiber Length</span>
            <span style={{ fontWeight: 700, color: '#1f2937', fontSize: '0.875rem' }}>{g.length}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Best For</span>
            <span style={{ fontWeight: 700, color: '#1f2937', fontSize: '0.875rem', textAlign: 'right' }}>{g.use}</span>
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
      <div style={{ height: '10rem', overflow: 'hidden' }}>
        <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div style={{ padding: '1.25rem', textAlign: 'center' }}>
        <h4 style={{ fontWeight: 700, color: '#111827', fontSize: '0.875rem', marginBottom: '0.375rem' }}>{a.title}</h4>
        <p style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.6 }}>{a.desc}</p>
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

      {/* ══════════════════════════════ HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', overflow: 'hidden' }}>
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Banana plantation" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.87) 50%,rgba(40,110,30,0.82) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.3,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '56rem', margin: '0 auto', padding: '8rem 1.5rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 500, padding: '0.625rem 1.25rem', borderRadius: '9999px', marginBottom: '2.5rem' }}>
            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#8dc63f', display: 'inline-block' }} />
            Premium Natural Fiber from Bangladesh
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: '1.75rem', textAlign: 'center', color: '#fff' }}>
            Transforming Waste<br />
            into{' '}
            <span style={{ background: 'linear-gradient(90deg,#8dc63f 0%,#c0f060 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Sustainable
            </span>
            <br />Solutions
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(220,252,231,0.7)', maxWidth: '42rem', marginBottom: '3rem', lineHeight: 1.85, fontWeight: 300, textAlign: 'center' }}>
            100% biodegradable raw banana fiber — high tensile strength, lustrous silk-like texture.
            The eco-friendly alternative to synthetic fibers.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/products"
              className="group inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#39962c', boxShadow: '0 6px 28px rgba(57,150,44,0.45)', color: '#fff', padding: '1rem 2.25rem', borderRadius: '9999px', fontSize: '1rem' }}>
              View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 600, fontSize: '1rem', padding: '1rem 2.25rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
              Request Sample
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '1rem', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(187,247,208,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#ffffff" />

      {/* ══════════════════════════════ ABOUT */}
      <section style={{ background: '#fff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="md:grid-cols-2">

            <div ref={aboutTextRef} className="reveal-left">
              <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>About EcoFiber BD</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Nature's Strongest<br />
                <span style={{ color: '#39962c' }}>Sustainable Fiber</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1rem' }}>
                Our <strong style={{ color: '#374151' }}>Premium Raw Banana Fiber</strong> is a high-grade natural lignocellulosic fiber extracted from the pseudostems of the banana plant (<em>Musa species</em>). Known for exceptional durability and natural luster, it's a superior sustainable alternative to synthetic fibers and traditional coarse fibers like jute.
              </p>
              <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                Harvested from agricultural by-products — a zero-waste solution supporting Bangladesh's circular economy while empowering local banana farmers.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2rem', marginBottom: '2.5rem' }}>
                {[
                  { label: '100% Natural',  sub: 'No chemicals or coatings' },
                  { label: '500–600 MPa',   sub: 'Tensile strength' },
                  { label: 'Silky Texture', sub: 'Natural sheen & luster' },
                  { label: 'Compostable',   sub: 'Decomposes in 3–6 months' },
                ].map((c, i) => (
                  <div key={i} style={{ borderLeft: '4px solid #39962c', paddingLeft: '1rem' }}>
                    <div style={{ fontWeight: 700, color: '#111827', fontSize: '1rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '0.125rem', lineHeight: 1.4 }}>{c.sub}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact"
                className="inline-flex items-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)', color: '#fff', padding: '1rem 2rem', borderRadius: '9999px' }}>
                Get in Touch <ArrowRight size={17} />
              </Link>
            </div>

            <div ref={aboutImgRef} className="reveal-right">
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', aspectRatio: '4/5' }}>
                <img src={IMG.about} alt="Natural banana fiber" className="w-full h-full object-cover img-zoom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slope dir="up" from="#0d2010" to="#ffffff" />

      {/* ══════════════════════════════ FEATURES */}
      <section style={{ background: 'linear-gradient(160deg,#0d2010 0%,#1a3820 55%,#2e5535 100%)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div ref={featHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#8dc63f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Why Choose Us</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginTop: '1rem', textAlign: 'center' }}>Key Features & Benefits</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={i} f={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#f7f5f0" />

      {/* ══════════════════════════════ GRADES */}
      <section style={{ background: '#f7f5f0', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div ref={gradeHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Our Products</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginTop: '1rem', textAlign: 'center' }}>Available Fiber Grades</h2>
            <p style={{ color: '#9ca3af', marginTop: '1rem', fontSize: '1rem', maxWidth: '32rem', margin: '1rem auto 0', lineHeight: 1.6, textAlign: 'center' }}>
              Three grades to match your exact application — from premium textile-grade to industrial fiber.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }} className="md:grid-cols-3">
            {grades.map((g, i) => (
              <GradeCard key={i} g={g} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products"
              className="inline-flex items-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1rem' }}>
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Slope dir="up" from="#ffffff" to="#f7f5f0" />

      {/* ══════════════════════════════ APPLICATIONS */}
      <section style={{ background: '#fff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div ref={appHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Use Cases</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginTop: '1rem', textAlign: 'center' }}>Applications & Usage</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem' }} className="sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((a, i) => (
              <AppCard key={i} a={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Slope dir="up" from="#1a3820" to="#ffffff" />

      {/* ══════════════════════════════ CTA */}
      <section style={{ background: 'linear-gradient(135deg,#1a3820 0%,#39962c 100%)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div ref={ctaRef} className="reveal" style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2, textAlign: 'center' }}>
            Ready to Source<br />Sustainable Fiber?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(220,252,231,0.65)', marginBottom: '3rem', fontWeight: 300, lineHeight: 1.9, maxWidth: '36rem', margin: '0 auto 3rem', textAlign: 'center' }}>
            Contact us for samples, pricing, and bulk orders. We supply to textile mills, paper manufacturers, and export buyers worldwide.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/contact"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#fff', color: '#39962c', padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1rem' }}>
              Request a Sample
            </Link>
            <Link to="/products"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 hover:-translate-y-1"
              style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1rem' }}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
