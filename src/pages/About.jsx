import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Award, Globe, Recycle, Users, ShieldCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

const PATTERN = '/ecofiber background Pattern.svg'

const values = [
  { icon: Recycle,     title: 'Zero-Waste Sourcing', desc: 'Our fiber comes from banana pseudostems — an agricultural by-product that would otherwise be discarded. No extra land, water or fertilizer required.' },
  { icon: Leaf,        title: 'Sustainability First', desc: '100% natural and biodegradable. We offer a genuine alternative to synthetic fibers, helping our partners cut their environmental footprint.' },
  { icon: ShieldCheck, title: 'Consistent Quality',   desc: 'Carefully decorticated, sun-dried and sorted into clear grades, so you receive reliable fiber length, cleanliness and strength every time.' },
  { icon: Users,       title: 'Empowering Farmers',   desc: 'By turning crop waste into income, we support local banana farmers and contribute to a circular rural economy in Bangladesh.' },
  { icon: Globe,       title: 'Built for Export',     desc: 'Export-ready packaging and grading for textile mills, paper manufacturers and buyers worldwide.' },
  { icon: Award,       title: 'Premium Standards',    desc: 'High tensile strength (500–600 MPa) and a natural silk-like luster — fiber that performs as good as it looks.' },
]

const stats = [
  { value: '100%',   label: 'Natural & Biodegradable' },
  { value: '500+',   label: 'MPa Tensile Strength' },
  { value: '3',      label: 'Grades for Every Use' },
  { value: '3–6 mo', label: 'Decomposition Time' },
]

function ValueCard({ v, index }) {
  const ref = useReveal(index)
  const Icon = v.icon
  return (
    <div ref={ref} className="reveal transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
      style={{ background: '#fff', borderRadius: '1.25rem', padding: '2.25rem', border: '1px solid #f3f4f6', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(57,150,44,0.10)', marginBottom: '1.5rem' }}>
        <Icon size={24} color="#39962c" />
      </div>
      <h3 style={{ fontWeight: 700, color: '#111827', fontSize: '1.125rem', marginBottom: '0.75rem' }}>{v.title}</h3>
      <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.85 }}>{v.desc}</p>
    </div>
  )
}

export default function About() {
  useSEO({
    title: 'About EcoFiber BD | Banana Fiber Supplier & Exporter in Bangladesh',
    description: 'Learn about EcoFiber BD — a banana fiber supplier and exporter in Dhaka, Bangladesh. We transform banana-plant waste into premium, 100% biodegradable raw banana fiber.',
    keywords: 'about EcoFiber BD, banana fiber company Bangladesh, banana fiber supplier, banana fiber manufacturer, sustainable fiber company',
    url: 'https://ecofiberbd.com/about',
    image: 'https://ecofiberbd.com/Images/hero.jpg'
  })

  const introTextRef = useReveal(0)
  const introImgRef  = useReveal(1)
  const missionRef   = useReveal(0)
  const visionRef    = useReveal(1)
  const valuesHeadRef = useReveal(0)
  const ctaRef       = useReveal(0)

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem', background: 'linear-gradient(160deg,#1a3820 0%,#2d5533 55%,#39962c 100%)', backgroundImage: `url(${PATTERN})`, backgroundSize: '600px 600px', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.88) 55%,rgba(40,110,30,0.82) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '52rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 4rem)', textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>About EcoFiber BD</h1>
          <p style={{ color: 'rgba(220,252,231,0.7)', fontSize: '1.125rem', fontWeight: 300, maxWidth: '40rem', margin: '0 auto', lineHeight: 1.9, textAlign: 'center' }}>
            Transforming Waste into Sustainable Solutions — a banana fiber supplier and exporter based in Dhaka, Bangladesh.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section style={{ background: '#fff', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div ref={introTextRef} className="reveal-left">
              <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Who We Are</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', marginTop: '1.25rem', marginBottom: '1.75rem', lineHeight: 1.2, color: '#111827' }}>
                Premium banana fiber,<br /><span style={{ color: '#39962c' }}>sustainably sourced</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.95, marginBottom: '1.25rem' }}>
                EcoFiber BD supplies and exports premium <strong style={{ color: '#374151' }}>raw banana fiber</strong> from Bangladesh. Our fiber is extracted from the pseudostems of the banana plant (<em>Musa species</em>) — a natural, lignocellulosic material known for its exceptional strength and silk-like luster.
              </p>
              <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.95, marginBottom: '2rem' }}>
                What begins as agricultural waste becomes a high-value, 100% biodegradable resource. We grade every batch as A, B or C so textile mills, paper manufacturers, handicraft makers and industrial buyers get exactly the fiber their application needs.
              </p>
              <Link to="/products" className="inline-flex items-center gap-2.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#39962c', boxShadow: '0 4px 20px rgba(57,150,44,0.3)', color: '#fff', padding: '1.125rem 2.25rem', borderRadius: '9999px', textDecoration: 'none', fontSize: '1rem' }}>
                Explore Our Products <ArrowRight size={17} />
              </Link>
            </div>
            <div ref={introImgRef} className="reveal-right" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ borderRadius: '1.75rem', overflow: 'hidden', boxShadow: '0 32px 64px -12px rgba(0,0,0,0.25)', aspectRatio: '4/5', width: '100%' }}>
                <img src="/Images/fiber-texture.jpg" alt="Premium raw banana fiber from EcoFiber BD, Bangladesh" className="w-full h-full object-cover img-zoom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: '#f7f5f0', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div ref={missionRef} className="reveal" style={{ background: '#fff', borderRadius: '1.25rem', padding: '2.75rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.9 }}>
                To turn banana-plant waste into premium, sustainable fiber — giving manufacturers a biodegradable alternative to synthetic materials while creating new income for farmers in Bangladesh.
              </p>
            </div>
            <div ref={visionRef} className="reveal" style={{ background: '#fff', borderRadius: '1.25rem', padding: '2.75rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.9 }}>
                To make Bangladesh a recognised global source of high-quality natural banana fiber, advancing a circular economy where nothing from the harvest goes to waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#fff', paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={valuesHeadRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: '#39962c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>What We Stand For</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', color: '#111827', marginTop: '1.25rem', textAlign: 'center' }}>Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {values.map((v, i) => <ValueCard key={i} v={v} index={i} />)}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,#1a3820 0%,#39962c 100%)', backgroundImage: `url(${PATTERN})`, backgroundSize: '600px 600px', backgroundPosition: 'center', backgroundAttachment: 'fixed', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(26,56,32,0.94) 0%,rgba(57,150,44,0.94) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '76rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '0.375rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(220,252,231,0.75)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f7f5f0', paddingTop: '6rem', paddingBottom: '7rem' }}>
        <div ref={ctaRef} className="reveal" style={{ maxWidth: '46rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', color: '#111827', marginBottom: '1.25rem', lineHeight: 1.2, textAlign: 'center' }}>Let's work together</h2>
          <p style={{ fontSize: '1.0625rem', color: '#6b7280', marginBottom: '2.5rem', lineHeight: 1.9, maxWidth: '34rem', margin: '0 auto 2.5rem', textAlign: 'center' }}>
            Looking for a reliable banana fiber supplier in Bangladesh? Request a sample, ask about wholesale pricing, or tell us about your project.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: '#39962c', boxShadow: '0 4px 24px rgba(57,150,44,0.35)', color: '#fff', padding: '1.125rem 2.5rem', borderRadius: '9999px', fontSize: '1.0625rem', textDecoration: 'none' }}>
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="inline-flex items-center font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{ border: '2px solid #39962c', color: '#39962c', padding: '1.125rem 2.5rem', borderRadius: '9999px', fontSize: '1.0625rem', textDecoration: 'none' }}>
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
