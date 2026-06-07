import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'

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

const Slope = ({ dir = 'down', from, to }) => (
  <div style={{ background: to, lineHeight: 0, display: 'block', fontSize: 0 }}>
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
      {dir === 'down'
        ? <polygon points="0,0 1440,0 1440,80 0,0" fill={from} />
        : <polygon points="0,80 1440,0 1440,80 0,80" fill={from} />}
    </svg>
  </div>
)

const stats = [
  { value: '100%',   label: 'Biodegradable' },
  { value: '500+',   label: 'MPa Tensile Strength' },
  { value: '3–6 mo', label: 'Decomposition Time' },
  { value: '120 cm', label: 'Max Fiber Length' },
]

const features = [
  { num: '01', title: 'Eco-Friendly',      desc: 'Sourced from post-harvest agricultural waste — no extra land, water, or fertilizers needed.' },
  { num: '02', title: 'High Strength',      desc: 'Tensile strength of 500–600 MPa, comparable to glass fiber. UV and saltwater resistant.' },
  { num: '03', title: 'Safe & Non-Toxic',   desc: 'Naturally fire-resistant. Free from hazardous chemicals or synthetic coatings.' },
  { num: '04', title: 'Zero-Waste Process', desc: 'Harvested from banana pseudostems — turning agricultural by-products into premium material.' },
  { num: '05', title: 'Global Reach',       desc: 'Supplied to textile mills, paper manufacturers, and export buyers worldwide.' },
  { num: '06', title: 'Multiple Grades',    desc: 'Grade A, B, and C with fiber lengths 30–120 cm to suit every application.' },
]

const grades = [
  { grade: 'Grade A', accent: '#39962c', img: IMG.gradeA, length: '90–120 cm', use: 'Textile · Fashion · Paper',  desc: 'Premium long-staple fiber. Ideal for fine textiles, "Banana Silk", and high-end paper production.' },
  { grade: 'Grade B', accent: '#8dc63f', img: IMG.gradeB, length: '60–90 cm',  use: 'Handicrafts · Furnishings', desc: 'Mid-grade fiber for home furnishings, handicrafts, and industrial blended products.' },
  { grade: 'Grade C', accent: '#37593b', img: IMG.gradeC, length: '30–60 cm',  use: 'Industrial · Marine',       desc: 'Coarser fiber for rope making, marine applications, and biocomposite reinforcements.' },
]

const applications = [
  { title: 'Textile & Fashion', desc: 'Banana Silk fabrics, sarees, blended garments', img: IMG.textile },
  { title: 'Home Furnishings',  desc: 'Curtains, table mats, cushion covers',           img: IMG.home },
  { title: 'Handicrafts',       desc: 'Baskets, bags, hats, carpets',                   img: IMG.handicraft },
  { title: 'Industrial Use',    desc: 'Marine ropes, cables, biocomposites',            img: IMG.rope },
  { title: 'Paper Industry',    desc: 'Archival paper, currency paper, tea bags',       img: IMG.paper },
]

/* ── Sub-components ──────────────────────────────────────── */

function FeatureCard({ f, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal transition-all duration-500 hover:-translate-y-2"
      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '1.25rem', padding: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
        <span style={{ color: '#8dc63f', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em' }}>{f.num}</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(141,198,63,0.2)' }} />
      </div>
      <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.3 }}>{f.title}</h3>
      <p style={{ color: 'rgba(187,247,208,0.55)', fontSize: '0.9375rem', lineHeight: 1.9 }}>{f.desc}</p>
    </div>
  )
}

function GradeCard({ g, index }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} className="reveal transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
      style={{ background: '#fff', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '17rem', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img src={g.img} alt={g.grade} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${g.accent}ee 0%, transparent 55%)` }} />
        <span style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', color: '#fff', fontSize: '1.375rem', fontWeight: 700 }}>{g.grade}</span>
      </div>
      <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.85, marginBottom: '2rem', flex: 1 }}>{g.desc}</p>
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Fiber Length</span>
            <span style={{ fontWeight: 700, color: '#1f2937', fontSize: '0.9375rem' }}>{g.length}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
    <div ref={ref} className="reveal transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
      style={{ background: '#fff', borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <div style={{ height: '12rem', overflow: 'hidden' }}>
        <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div style={{ padding: '1.5rem 1.25rem', textAlign: 'center' }}>
        <h4 style={{ fontWeight: 700, color: '#111827', fontSize: '0.9375rem', marginBottom: '0.5rem' }}>{a.title}</h4>
        <p style={{ fontSize: '0.8125rem', color: '#9ca3af', lineHeight: 1.65 }}>{a.desc}</p>
      </div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  const aboutTextRef = useReveal(0)
  const aboutImgRef  = useReveal(1)
  const featHeadRef  = useReveal(0)
  const gradeHeadRef = useReveal(0)
  const appHeadRef   = useReveal(0)
  const ctaRef       = useReveal(0)

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', overflow: 'hidden' }}>
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Banana plantation" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.93) 0%,rgba(20,50,24,0.88) 50%,rgba(40,110,30,0.82) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.25, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '60rem', margin: '0 auto', padding: '10rem 2rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 500, padding: '0.75rem 1.5rem', borderRadius: '9999px', marginBottom: '2.75rem' }}>
            <span className="pulse-dot" style={{ width: 9, height: 9, borderRadius: '50%', background: '#8dc63f', display: 'inline-block' }} />
            Premium Natural Fiber from Bangladesh
          </div>

          <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 5rem)', lineHeight: 1.03, letterSpacing: '-0.02em', marginBottom: '2rem', textAlign: 'center', color: '#fff' }}>
            Transforming Waste<br />
            into{' '}
            <span style={{ background: 'linear-gradient(90deg,#8dc63f,#c0f060)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Sustainable
            </span>
            <br />Solutions
          </h1>

          <p style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', color: 'rgba(220,252,231,0.72)', maxWidth: '44rem', marginBottom: '3.5rem', lineHeight: 1.9, fontWeight: 300, textAlign: 'center' }}>
            100% biodegradable raw banana fiber — high tensile strength, lustrous silk-like texture. The eco-friendly alternative to synthetic fibers.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.125rem', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/products" className="group inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#39962c', boxShadow: '0 6px 28px rgba(57,150,44,0.45)', color: '#fff', padding: '1.125rem 2.5rem', borderRadius: '9999px', fontSize: '1.0625rem' }}>
              View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 600, fontSize: '1.0625rem', padding: '1.125rem 2.5rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
              Request Sample
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '60rem', margin: '0 auto', padding: '0 2rem 6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.125rem' }} className="md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '1.125rem', padding: '1.75rem 1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.375rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(187,247,208,0.65)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#ffffff" />

      {/* ══════════ ABOUT ══════════ */}
      <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '5rem', alignItems: 'center' }} className="md:grid-cols-2">

            <div ref={aboutTextRef} className="reveal-left">
              <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>About EcoFiber BD</span>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', marginTop: '1.25rem', marginBottom: '1.75rem', lineHeight: 1.15 }}>
                Nature's Strongest<br />
                <span style={{ color: '#39962c' }}>Sustainable Fiber</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.95, marginBottom: '1.25rem' }}>
                Our <strong style={{ color: '#374151' }}>Premium Raw Banana Fiber</strong> is a high-grade natural lignocellulosic fiber extracted from the pseudostems of the banana plant (<em>Musa species</em>). Known for exceptional durability and natural luster, it's a superior sustainable alternative to synthetic fibers and traditional coarse fibers like jute.
              </p>
              <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.95, marginBottom: '3rem' }}>
                Harvested from agricultural by-products — a zero-waste solution supporting Bangladesh's circular economy while empowering local banana farmers.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem 2.5rem', marginBottom: '3rem' }}>
                {[
                  { label: '100% Natural',  sub: 'No chemicals or coatings' },
                  { label: '500–600 MPa',   sub: 'Tensile strength' },
                  { label: 'Silky Texture', sub: 'Natural sheen & luster' },
                  { label: 'Compostable',   sub: 'Decomposes in 3–6 months' },
                ].map((c, i) => (
                  <div key={i} style={{ borderLeft: '4px solid #39962c', paddingLeft: '1.25rem' }}>
                    <div style={{ fontWeight: 700, color: '#111827', fontSize: '1.0625rem' }}>{c.label}</div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '0.25rem', lineHeight: 1.5 }}>{c.sub}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)', color: '#fff', padding: '1.125rem 2.25rem', borderRadius: '9999px', textDecoration: 'none', fontSize: '1rem' }}>
                Get in Touch <ArrowRight size={17} />
              </Link>
            </div>

            <div ref={aboutImgRef} className="reveal-right">
              <div style={{ borderRadius: '1.75rem', overflow: 'hidden', boxShadow: '0 32px 64px -12px rgba(0,0,0,0.25)', aspectRatio: '4/5' }}>
                <img src={IMG.about} alt="Natural banana fiber" className="w-full h-full object-cover img-zoom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slope dir="up" from="#0d2010" to="#ffffff" />

      {/* ══════════ FEATURES ══════════ */}
      <section style={{ background: 'linear-gradient(160deg,#0d2010 0%,#1a3820 55%,#2e5535 100%)', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={featHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#8dc63f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Why Choose Us</span>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#fff', marginTop: '1.25rem', textAlign: 'center' }}>Key Features & Benefits</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.75rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => <FeatureCard key={i} f={f} index={i} />)}
          </div>
        </div>
      </section>

      <Slope dir="down" from="#1a3820" to="#f7f5f0" />

      {/* ══════════ GRADES ══════════ */}
      <section style={{ background: '#f7f5f0', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={gradeHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Our Products</span>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#111827', marginTop: '1.25rem', textAlign: 'center' }}>Available Fiber Grades</h2>
            <p style={{ color: '#9ca3af', marginTop: '1.25rem', fontSize: '1.0625rem', maxWidth: '36rem', margin: '1.25rem auto 0', lineHeight: 1.75, textAlign: 'center' }}>
              Three grades to match your exact application — from premium textile-grade to industrial fiber.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2.25rem' }} className="md:grid-cols-3">
            {grades.map((g, i) => <GradeCard key={i} g={g} index={i} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/products" className="inline-flex items-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)', color: '#fff', padding: '1.125rem 2.75rem', borderRadius: '9999px', fontSize: '1.0625rem', textDecoration: 'none' }}>
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Slope dir="up" from="#ffffff" to="#f7f5f0" />

      {/* ══════════ APPLICATIONS ══════════ */}
      <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={appHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Use Cases</span>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#111827', marginTop: '1.25rem', textAlign: 'center' }}>Applications & Usage</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem' }} className="sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((a, i) => <AppCard key={i} a={a} index={i} />)}
          </div>
        </div>
      </section>

      <Slope dir="up" from="#1a3820" to="#ffffff" />

      {/* ══════════ CTA ══════════ */}
      <section style={{ background: 'linear-gradient(135deg,#1a3820 0%,#39962c 100%)', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div ref={ctaRef} className="reveal" style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', color: '#fff', marginBottom: '1.75rem', lineHeight: 1.15, textAlign: 'center' }}>
            Ready to Source<br />Sustainable Fiber?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(220,252,231,0.65)', marginBottom: '3.5rem', fontWeight: 300, lineHeight: 1.95, maxWidth: '38rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            Contact us for samples, pricing, and bulk orders. We supply to textile mills, paper manufacturers, and export buyers worldwide.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.125rem', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/contact" className="inline-flex items-center justify-center font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#fff', color: '#39962c', padding: '1.125rem 2.75rem', borderRadius: '9999px', fontSize: '1.0625rem', textDecoration: 'none' }}>
              Request a Sample
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center font-bold transition-all duration-300 hover:-translate-y-1"
              style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#fff', padding: '1.125rem 2.75rem', borderRadius: '9999px', fontSize: '1.0625rem', textDecoration: 'none' }}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
