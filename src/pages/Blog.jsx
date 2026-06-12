import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { ARTICLES } from '../data/articles'

function ArticleCard({ a, index }) {
  const ref = useReveal(index)
  return (
    <Link to={`/blog/${a.slug}`} ref={ref}
      className="reveal transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
      style={{ background: '#fff', borderRadius: '1.25rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
      <div style={{ height: '13rem', overflow: 'hidden', flexShrink: 0 }}>
        <img src={a.cover} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div style={{ padding: '1.75rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', color: '#9ca3af', fontSize: '0.8125rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}><Calendar size={14} /> {new Date(a.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}><Clock size={14} /> {a.readTime}</span>
        </div>
        <h2 style={{ fontSize: '1.25rem', color: '#111827', lineHeight: 1.35, marginBottom: '0.75rem' }}>{a.title}</h2>
        <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.5rem', flex: 1 }}>{a.excerpt}</p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#39962c', fontWeight: 600, fontSize: '0.9375rem' }}>
          Read article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default function Blog() {
  useSEO({
    title: 'Banana Fiber Blog | Prices, Uses & Guides — EcoFiber BD Bangladesh',
    description: 'Guides and insights on banana fiber: 2026 price guide, banana fiber vs jute, how it is made, and top uses. From EcoFiber BD, a banana fiber supplier in Bangladesh.',
    keywords: 'banana fiber blog, banana fiber guide, banana fiber price, banana fiber uses, banana fiber vs jute, banana fiber Bangladesh',
    url: 'https://ecofiberbd.com/blog',
    image: 'https://ecofiberbd.com/Images/Banana_fiber_Grade%20A.jpg'
  })

  const headRef = useReveal(0)

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '6rem', background: 'linear-gradient(160deg,#1a3820 0%,#2d5533 55%,#39962c 100%)', backgroundImage: 'url(/ecofiber\ background\ Pattern.svg)', backgroundSize: '600px 600px', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.88) 55%,rgba(40,110,30,0.82) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '52rem', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 4rem)', textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>Banana Fiber Insights</h1>
          <p style={{ color: 'rgba(220,252,231,0.65)', fontSize: '1.125rem', fontWeight: 300, maxWidth: '40rem', margin: '0 auto', lineHeight: 1.9, textAlign: 'center' }}>
            Prices, comparisons and practical guides on raw banana fiber — from Bangladesh's trusted supplier and exporter.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '76rem', margin: '0 auto', padding: '5rem 2rem 8rem' }}>
        <div ref={headRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {ARTICLES.map((a, i) => <ArticleCard key={a.slug} a={a} index={i} />)}
        </div>
      </div>

      <Footer />
    </div>
  )
}
