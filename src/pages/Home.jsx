import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

const IMG = {
  hero:       '/Images/hero.jpg',
  about:      '/Images/fiber-texture.jpg',
  gradeA:     '/Images/Banana_fiber_Grade A.jpg',
  gradeB:     '/Images/Banana_fiber_Grade B.jpeg',
  gradeC:     '/Images/Banana_fiber_Grade C.jpeg',
  textile:    '/Images/app-textile.jpg',
  home:       '/Images/app-home.jpg',
  handicraft: '/Images/app-handicraft.jpg',
  rope:       '/Images/app-rope.jpg',
  paper:      '/Images/app-paper.jpg',
}

const faqs = [
  {
    q: 'What is banana fiber?',
    a: 'Banana fiber is a natural cellulosic fiber mechanically extracted from the pseudo-stem of the banana plant (Musa spp.) — the trunk left over after harvest. It is 100% biodegradable, has a silky sheen, and offers high tensile strength (typically 500–900 MPa), making it a sustainable alternative to synthetic fibers.',
  },
  {
    q: 'How much does banana fiber cost?',
    a: 'We quote every order individually rather than publishing a price list, because the rate depends on grade, fiber form, order volume, packaging and destination. Send your requirement through our quote request form, WhatsApp or email and we will reply with a written quotation within 24 hours.',
  },
  {
    q: 'Do you export banana fiber from Bangladesh?',
    a: 'Yes. EcoFiber BD is a banana fiber supplier and exporter based in Dhaka, Bangladesh, shipping to textile mills, paper manufacturers, handicraft makers and industrial buyers worldwide. We provide export-ready grading and packaging.',
  },
  {
    q: 'What are the grades of banana fiber you supply?',
    a: 'We supply three grades: Grade A for fine textiles and banana silk, Grade B for home furnishings, handicrafts and blended textiles, and Grade C for ropes, cordage and biocomposites. All grades are supplied in the same fiber lengths — standard 36 inches (91 cm), with lengths up to 60 inches (152 cm) available.',
  },
  {
    q: 'Can I get a sample before ordering?',
    a: 'Absolutely. We provide samples so you can assess quality before placing a bulk order. Tick the sample option on our quote request form, or message us on WhatsApp, and we will respond within 24 hours.',
  },
  {
    q: 'What is banana fiber used for?',
    a: 'Banana fiber is used in textiles and "banana silk" fabric, eco-friendly paper, ropes and cables, handicrafts, home furnishings, and biocomposite materials. Its strength and biodegradability make it popular across sustainable industries.',
  },
]

const stats = [
  { value: '100%',   label: 'Biodegradable' },
  { value: '500+',   label: 'MPa Tensile Strength' },
  { value: '60–65%', label: 'Cellulose Content' },
  { value: '60 in',  label: 'Max Fiber Length (152 cm)' },
]

const features = [
  { num: '01', title: 'Eco-Friendly',      desc: 'Sourced from post-harvest agricultural waste — no extra land, water, or fertilizers needed.' },
  { num: '02', title: 'High Strength',      desc: 'Tensile strength of 500–900 MPa with a Young\'s modulus of 8–32 GPa — strong enough for composite reinforcement.' },
  { num: '03', title: 'Safe & Non-Toxic',   desc: 'Naturally fire-resistant. Free from hazardous chemicals or synthetic coatings.' },
  { num: '04', title: 'Zero-Waste Process', desc: 'Harvested from banana pseudostems — turning agricultural by-products into premium material.' },
  { num: '05', title: 'Global Reach',       desc: 'Supplied to textile mills, paper manufacturers, and export buyers worldwide.' },
  { num: '06', title: 'Multiple Grades',    desc: 'Grade A, B and C to suit every application - all supplied in the same fiber lengths.' },
]

const grades = [
  { grade: 'Grade A', accent: '#39962c', img: IMG.gradeA, length: '36–60 in', lengthCm: '91–152 cm', use: 'Textile · Fashion · Paper',  desc: 'Premium-grade fiber. Ideal for fine textiles, "Banana Silk", and high-end paper production.' },
  { grade: 'Grade B', accent: '#8dc63f', img: IMG.gradeB, length: '36–60 in', lengthCm: '91–152 cm',  use: 'Handicrafts · Furnishings', desc: 'Mid-grade fiber for home furnishings, handicrafts, and industrial blended products.' },
  { grade: 'Grade C', accent: '#37593b', img: IMG.gradeC, length: '36–60 in', lengthCm: '91–152 cm',  use: 'Industrial · Marine',       desc: 'Coarser fiber for rope making, marine applications, and biocomposite reinforcements.' },
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
      style={{ background: 'rgba(10,26,12,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '1.25rem', padding: '2.5rem', boxShadow: '0 8px 28px rgba(0,0,0,0.25)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
        <span style={{ color: '#8dc63f', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.25em' }}>{f.num}</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(141,198,63,0.25)' }} />
      </div>
      <h3 style={{ color: '#fff', fontSize: 'calc(1.2rem + 3px)', marginBottom: '1rem', lineHeight: 1.3 }}>{f.title}</h3>
      <p style={{ color: 'rgba(220,252,231,0.85)', fontSize: '0.9375rem', lineHeight: 1.9 }}>{f.desc}</p>
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
            <span style={{ textAlign: 'right', lineHeight: 1.35 }}>
              <span style={{ display: 'block', fontWeight: 700, color: '#1f2937', fontSize: '0.9375rem', whiteSpace: 'nowrap' }}>{g.length}</span>
              <span style={{ display: 'block', color: '#9ca3af', fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>{g.lengthCm}</span>
            </span>
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
        <h4 style={{ fontWeight: 700, color: '#111827', fontSize: 'calc(0.9375rem + 3px)', marginBottom: '0.5rem' }}>{a.title}</h4>
        <p style={{ fontSize: '0.8125rem', color: '#9ca3af', lineHeight: 1.65 }}>{a.desc}</p>
      </div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  useSEO({
    title: 'Banana Fiber Bangladesh | Raw Banana Fiber Supplier & Exporter — EcoFiber BD',
    description: "Source premium raw banana fiber from Bangladesh's trusted supplier & exporter. 100% biodegradable, high-tensile (500–900 MPa). Grade A, B & C — request a quote or sample today.",
    keywords: 'banana fiber, banana fiber Bangladesh, banana fiber supplier, banana fiber exporter, raw banana fiber, banana pseudo-stem fiber, banana fiber quote, banana fiber sample, biodegradable fiber, sustainable natural fiber, banana fiber Dhaka',
    url: 'https://ecofiberbd.com/',
    image: 'https://ecofiberbd.com/Images/Banana_fiber_Grade%20A.jpg'
  })

  const aboutTextRef = useReveal(0)
  const aboutImgRef  = useReveal(1)
  const featHeadRef  = useReveal(0)
  const gradeHeadRef = useReveal(0)
  const appHeadRef   = useReveal(0)
  const faqHeadRef   = useReveal(0)
  const ctaRef       = useReveal(0)

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="hero-fit" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', overflow: 'hidden' }}>
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Raw banana fiber sourced from a banana plantation in Bangladesh" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(8,20,9,0.22) 0%, rgba(8,20,9,0.30) 30%, rgba(11,28,13,0.62) 50%, rgba(10,26,12,0.84) 72%, rgba(10,26,12,0.88) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,20,9,0.55) 0%, rgba(8,20,9,0.10) 35%, transparent 60%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.25, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

        {/* Hero content */}
        <div className="hero-row" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '76rem', margin: '0 auto', padding: 'clamp(5rem, 9.5vh, 10rem) 1.5rem clamp(0.75rem, 2.5vh, 2.5rem)', display: 'flex' }}>
          <div className="hero-rise hero-panel" style={{ width: '100%', maxWidth: '36rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', padding: 0 }}>

          <h1 style={{ fontSize: 'clamp(1.875rem, min(7.5vw, 8vh), calc(4.5rem + 3px))', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 'clamp(0.625rem, 1.8vh, 1.75rem)', textAlign: 'right', color: '#fff' }}>
            Transforming Waste<br />
            into{' '}
            <span style={{ background: 'linear-gradient(90deg,#8dc63f,#c0f060)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: 'none' }}>
              Sustainable
            </span>
            <br />Solutions
          </h1>

          <p style={{ fontSize: 'clamp(0.875rem, min(2vw, 2.1vh), 1.25rem)', color: 'rgba(233,253,238,0.94)', maxWidth: '34rem', marginBottom: 'clamp(0.75rem, 2vh, 3rem)', lineHeight: 1.62, fontWeight: 300, textAlign: 'justify', textAlignLast: 'right', hyphens: 'auto' }}>
            Source premium <strong style={{ fontWeight: 600, color: 'rgba(255,255,255,0.92)' }}>raw banana fiber</strong> from Bangladesh's trusted supplier and exporter. 100% biodegradable, high tensile strength and a silky sheen — the sustainable, eco-friendly alternative to synthetic fibers. Every order quoted individually.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.125rem', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Link to="/products" className="group inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#39962c', boxShadow: '0 6px 28px rgba(57,150,44,0.45)', color: '#fff', padding: 'clamp(0.8rem, 1.7vh, 1.125rem) 1.75rem', borderRadius: '9999px', fontSize: 'clamp(0.9375rem, 1.9vh, 1.0625rem)', border: '1px solid transparent', minWidth: '14rem' }}>
              View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/quote"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 600, fontSize: 'clamp(0.9375rem, 1.9vh, 1.0625rem)', padding: 'clamp(0.8rem, 1.7vh, 1.125rem) 1.75rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', minWidth: '14rem' }}>
              Request a Quote
            </Link>
          </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '60rem', margin: '0 auto', padding: '0 1.5rem clamp(0.75rem, 3vh, 3.5rem)' }}>
          <div className="grid-md-4" style={{ display: 'grid', gap: '1.125rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '1.125rem', padding: 'clamp(0.6rem, 1.6vh, 1.75rem) 0.875rem', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.125rem, min(3.5vw, 3vh), 2rem)', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>{s.value}</div>
                <div style={{ fontSize: 'clamp(0.625rem, 1.4vh, 0.75rem)', color: 'rgba(187,247,208,0.65)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>

            <div ref={aboutTextRef} className="reveal-left">
              <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>About EcoFiber BD</span>
              <h2 style={{ fontSize: 'clamp(calc(2rem + 3px), 4vw, calc(2.85rem + 3px))', marginTop: '1.25rem', marginBottom: '1.75rem', lineHeight: 1.15 }}>
                Premium Raw<br />
                <span style={{ color: '#39962c' }}>Banana Fiber</span>
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
                  { label: '500–900 MPa',   sub: 'Tensile strength' },
                  { label: 'Silky Texture', sub: 'Natural sheen & luster' },
                  { label: 'Compostable',   sub: '100% biodegradable' },
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

            <div ref={aboutImgRef} className="reveal-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ borderRadius: '1.75rem', overflow: 'hidden', boxShadow: '0 32px 64px -12px rgba(0,0,0,0.25)', aspectRatio: '4/5', width: '100%', height: '100%' }}>
                <img src={IMG.about} alt="Premium raw banana fiber supplied by EcoFiber BD, Bangladesh" className="w-full h-full object-cover img-zoom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="leaf-anim" style={{ background: 'linear-gradient(160deg,#0d2010 0%,#1a3820 55%,#2e5535 100%)', backgroundImage: 'url(/ecofiber-background-Pattern.png)', backgroundSize: '420px 420px', backgroundRepeat: 'repeat', paddingTop: '8rem', paddingBottom: '8rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(13,32,16,0.85) 0%,rgba(26,56,32,0.83) 55%,rgba(46,85,53,0.80) 100%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
          <div ref={featHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#8dc63f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Why Choose Us</span>
            <h2 style={{ fontSize: 'clamp(calc(2rem + 3px), 4vw, calc(2.85rem + 3px))', color: '#fff', marginTop: '1.25rem', textAlign: 'center' }}>Key Features & Benefits</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.75rem' }}>
            {features.map((f, i) => <FeatureCard key={i} f={f} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════ GRADES ══════════ */}
      <section style={{ background: '#f7f5f0', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={gradeHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Our Products</span>
            <h2 style={{ fontSize: 'clamp(calc(2rem + 3px), 4vw, calc(2.85rem + 3px))', color: '#111827', marginTop: '1.25rem', textAlign: 'center' }}>Available Fiber Grades</h2>
            <p style={{ color: '#9ca3af', marginTop: '1.25rem', fontSize: '1.0625rem', maxWidth: '36rem', margin: '1.25rem auto 0', lineHeight: 1.75, textAlign: 'center' }}>
              Three grades to match your exact application — from premium textile-grade to industrial fiber.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.25rem' }}>
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

      {/* ══════════ APPLICATIONS ══════════ */}
      <section style={{ background: '#fff', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={appHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Use Cases</span>
            <h2 style={{ fontSize: 'clamp(calc(2rem + 3px), 4vw, calc(2.85rem + 3px))', color: '#111827', marginTop: '1.25rem', textAlign: 'center' }}>Applications & Usage</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {applications.map((a, i) => <AppCard key={i} a={a} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section style={{ background: '#f7f5f0', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={faqHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>FAQ</span>
            <h2 style={{ fontSize: 'clamp(calc(2rem + 3px), 4vw, calc(2.85rem + 3px))', color: '#111827', marginTop: '1.25rem', textAlign: 'center' }}>Banana Fiber — Common Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ background: '#fff', borderRadius: '1rem', border: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', padding: '1.5rem 1.75rem' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 700, color: '#111827', fontSize: '1.0625rem', listStyle: 'none' }}>{f.q}</summary>
                <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.9, marginTop: '1rem' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="leaf-anim" style={{ background: 'linear-gradient(135deg,#1a3820 0%,#39962c 100%)', backgroundImage: 'url(/ecofiber-background-Pattern.png)', backgroundSize: '420px 420px', backgroundRepeat: 'repeat', paddingTop: '8rem', paddingBottom: '8rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(26,56,32,0.85) 0%,rgba(57,150,44,0.82) 100%)', pointerEvents: 'none' }} />
        <div ref={ctaRef} className="reveal" style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: 'clamp(calc(2rem + 3px), 4vw, calc(2.85rem + 3px))', color: '#fff', marginBottom: '1.75rem', lineHeight: 1.15, textAlign: 'center' }}>
            Ready to Source<br />Sustainable Fiber?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(220,252,231,0.65)', marginBottom: '3.5rem', fontWeight: 300, lineHeight: 1.95, maxWidth: '38rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            Tell us your grade, quantity and destination and we will send a written quotation within 24 hours — by email or WhatsApp. We supply textile mills, paper manufacturers, and export buyers worldwide.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.125rem', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/quote" className="inline-flex items-center justify-center font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#fff', color: '#39962c', padding: '1.125rem 2.75rem', borderRadius: '9999px', fontSize: '1.0625rem', textDecoration: 'none' }}>
              Request a Quote
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
