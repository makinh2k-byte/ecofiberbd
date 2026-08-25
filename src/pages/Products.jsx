import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import {
  PRODUCTS, TDS, DATA_SOURCE_NOTE,
  PHYSICAL_PROPERTIES, MECHANICAL_PROPERTIES, CHEMICAL_COMPOSITION,
  AVAILABLE_FORMS, QUALITY_STATEMENT, STORAGE_HANDLING,
} from '../data/products'

function ProductCard({ p, index }) {
  const ref = useReveal(index)
  const accent = p.accent
  const img    = p.img
  return (
    <div ref={ref} className="reveal transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
      style={{ background: '#fff', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '16rem', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img src={img} alt={p.grade} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${accent}ee 0%, transparent 55%)` }} />
        <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <span style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 700 }}>{p.grade}</span>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.8125rem', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.375rem 0.75rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.35)' }}>Price on request</span>
        </div>
      </div>
      <div style={{ padding: '1.375rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '0.625rem', fontSize: 'calc(1.375rem + 3px)', lineHeight: 1.25 }}>{p.name}</h3>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.125rem', flex: 1 }}>{p.description}</p>
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            ['Fiber Length', `${p.fiber_length_cm} cm`],
            ['Moisture',     `${p.moisture_content_percent}%`],
            ['Order Volume', 'Quoted per enquiry'],
          ].map(([l, v]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#9ca3af', fontSize: '0.8125rem' }}>{l}</span>
              <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.875rem' }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to={`/products/${p.id}`}
            className="flex-1 text-center font-semibold rounded-full text-sm transition-all duration-300"
            style={{ border: `2px solid ${accent}`, color: accent, padding: '0.875rem', display: 'block', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = accent }}>
            Details
          </Link>
          <Link to={`/quote?product=${encodeURIComponent(p.name)}`}
            className="flex-1 text-center text-white font-semibold rounded-full text-sm transition-all duration-300 hover:opacity-90"
            style={{ background: accent, padding: '0.875rem', display: 'block', textDecoration: 'none' }}>
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  useSEO({
    title: 'Banana Fiber Grades A, B & C — Technical Data & Quotes | EcoFiber BD Bangladesh',
    description: 'Raw banana pseudo-stem fiber from Bangladesh in Grade A, B and C. Full technical data sheet — tensile 500–900 MPa, cellulose 60–65%, moisture 10–13%. Request a quote or sample.',
    keywords: 'banana fiber, banana fiber grades, banana fiber technical data sheet, banana fiber specifications, banana fiber Bangladesh, Grade A banana fiber, raw banana fiber supplier, banana pseudo-stem fiber, request banana fiber quote',
    url: 'https://ecofiberbd.com/products',
    image: 'https://ecofiberbd.com/Images/Banana_fiber_Grade%20A.jpg'
  })

  const [search, setSearch]           = useState('')
  const [gradeFilter, setGradeFilter] = useState('All')
  const specsRef = useReveal(0)
  const grades   = ['All', 'Grade A', 'Grade B', 'Grade C']

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (gradeFilter === 'All' || p.grade === gradeFilter)
  )

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section className="leaf-anim" style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem', background: 'linear-gradient(160deg,#1a3820 0%,#2d5533 55%,#39962c 100%)', backgroundImage: 'url(/ecofiber-background-Pattern.png)', backgroundSize: '420px 420px', backgroundRepeat: 'repeat' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.86) 0%,rgba(20,50,24,0.80) 55%,rgba(40,110,30,0.72) 100%)' }} />
        <div className="hero-rise" style={{ position: 'relative', zIndex: 10, maxWidth: '52rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(calc(2.75rem + 3px), 7vw, calc(4rem + 3px))', textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>Our Products</h1>
          <p style={{ color: 'rgba(220,252,231,0.65)', fontSize: '1.125rem', fontWeight: 300, maxWidth: '40rem', margin: '0 auto', lineHeight: 1.9, textAlign: 'center' }}>
            Natural banana pseudo-stem fiber (Musa spp.) in three grades — mechanically extracted, washed and sun-dried, sourced across Bangladesh. Every order is quoted individually.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 2rem 8rem' }}>

        {/* Filter bar */}
        <div style={{ background: '#fff', borderRadius: '1.25rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6', padding: '1.5rem 2rem', marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '22rem' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input type="text" placeholder="Search products…" value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', paddingLeft: '2.75rem', paddingRight: '1rem', paddingTop: '0.875rem', paddingBottom: '0.875rem', borderRadius: '0.875rem', border: '1px solid #f3f4f6', background: '#f9fafb', outline: 'none', color: '#1f2937', fontSize: '0.9375rem', fontFamily: 'inherit' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
            {grades.map(g => (
              <button key={g} onClick={() => setGradeFilter(g)}
                className="transition-all duration-300 hover:-translate-y-0.5"
                style={gradeFilter === g
                  ? { background: '#39962c', color: '#fff', boxShadow: '0 4px 16px rgba(57,150,44,0.35)', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontSize: '0.9375rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }
                  : { background: '#f3f4f6', color: '#6b7280', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontSize: '0.9375rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }
                }>{g}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '8rem 0', color: '#9ca3af' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>No products found.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {filtered.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
          </div>
        )}

        {/* Tech specs */}
        <div ref={specsRef} className="reveal" style={{ marginTop: '5rem', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
          <div style={{ position: 'relative', height: '12rem', overflow: 'hidden' }}>
            <img src="/Images/fiber-texture.jpg" alt="Close-up texture of premium raw banana fiber" className="w-full h-full object-cover" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 3rem', background: 'linear-gradient(135deg,rgba(8,20,9,0.92),rgba(55,89,59,0.88))' }}>
              <div>
                <span style={{ color: '#8dc63f', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem' }}>Technical Data Sheet · {TDS.docNo} · {TDS.revision}</span>
                <h3 style={{ fontSize: 'calc(2rem + 3px)', color: '#fff', marginTop: '0.75rem' }}>Technical Specifications</h3>
              </div>
            </div>
          </div>
          <div style={{ padding: '3rem', background: 'linear-gradient(135deg,#0d2010,#1e3d22)' }}>
            <p style={{ color: 'rgba(187,247,208,0.55)', lineHeight: 1.95, fontSize: '0.9375rem', maxWidth: '54rem', marginBottom: '2.5rem' }}>
              Banana fiber is a natural cellulosic bast/leaf-sheath fiber mechanically extracted from the pseudo-stem of the banana plant (<em>Musa</em> species) — a by-product of banana cultivation. It is biodegradable, renewable, and produced without additional land or water beyond existing banana cultivation.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="md:grid-cols-3">
              {[
                ['Physical Properties',  PHYSICAL_PROPERTIES],
                ['Mechanical Properties', MECHANICAL_PROPERTIES],
                ['Chemical Composition', CHEMICAL_COMPOSITION],
              ].map(([heading, rows]) => (
                <div key={heading}>
                  <div style={{ color: '#8dc63f', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.125rem' }}>{heading}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {rows.map(([l, v]) => (
                      <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        <span style={{ color: 'rgba(187,247,208,0.55)', fontSize: '0.8125rem' }}>{l}</span>
                        <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem', textAlign: 'right' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ color: 'rgba(187,247,208,0.4)', lineHeight: 1.85, fontSize: '0.8125rem', marginTop: '2.5rem', maxWidth: '54rem' }}>
              {DATA_SOURCE_NOTE}
            </p>
          </div>
        </div>

        {/* Available forms */}
        <div style={{ marginTop: '2.5rem', background: '#fff', borderRadius: '1.25rem', padding: '2.5rem 2.75rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
          <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '1.25rem', fontSize: 'calc(1.3125rem + 3px)' }}>Available Forms &amp; Grades</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: '52rem' }}>
            {AVAILABLE_FORMS.map(f => (
              <li key={f} style={{ display: 'flex', gap: '0.875rem', color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                <span style={{ color: '#39962c', flexShrink: 0 }}>◆</span>{f}
              </li>
            ))}
          </ul>
        </div>

        {/* Quality & sourcing */}
        <div style={{ marginTop: '2.5rem', background: '#fff', borderRadius: '1.25rem', padding: '2.5rem 2.75rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
          <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '1rem', fontSize: 'calc(1.3125rem + 3px)' }}>Quality &amp; Sourcing</h3>
          <p style={{ fontSize: '0.9375rem', color: '#6b7280', lineHeight: 1.85, maxWidth: '52rem' }}>{QUALITY_STATEMENT}</p>
        </div>

        {/* Packaging & Storage */}
        <div style={{ marginTop: '2.5rem', borderRadius: '1.25rem', padding: '2.5rem 2.75rem', border: '1px solid rgba(57,150,44,0.2)', background: 'rgba(57,150,44,0.06)' }}>
          <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '1rem', fontSize: 'calc(1.3125rem + 3px)' }}>Packaging, Storage &amp; Handling</h3>
          <p style={{ fontSize: '0.9375rem', color: '#6b7280', lineHeight: 1.85, maxWidth: '48rem', marginBottom: '1.25rem' }}>
            Compressed bales in jute or PP bags, or loose bundles as per buyer requirement.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '48rem' }}>
            {STORAGE_HANDLING.map(s => (
              <li key={s} style={{ display: 'flex', gap: '0.875rem', color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                <span style={{ color: '#39962c', flexShrink: 0 }}>◆</span>{s}
              </li>
            ))}
          </ul>
        </div>

        {/* Quote CTA */}
        <div style={{ marginTop: '2.5rem', borderRadius: '1.25rem', padding: '3rem 2.75rem', textAlign: 'center', background: 'linear-gradient(135deg,#1a3820,#39962c)', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
          <h3 style={{ fontWeight: 700, color: '#fff', marginBottom: '0.875rem', fontSize: 'calc(1.5rem + 3px)' }}>Need pricing?</h3>
          <p style={{ color: 'rgba(220,252,231,0.72)', fontSize: '0.9375rem', lineHeight: 1.8, maxWidth: '34rem', margin: '0 auto 2rem' }}>
            Rates depend on grade, fiber form, volume, packaging and destination — so we quote each enquiry individually. Send us your requirement and we will reply within 24 hours.
          </p>
          <Link to="/quote"
            className="inline-block font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ background: '#fff', color: '#1a3820', padding: '1.125rem 2.75rem', textDecoration: 'none', fontSize: '1rem' }}>
            Request a Quote
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
