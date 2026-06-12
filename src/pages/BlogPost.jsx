import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { getArticle, ARTICLES } from '../data/articles'

export default function BlogPost() {
  const { slug } = useParams()
  const article = getArticle(slug)

  useSEO({
    title: article ? `${article.title} | EcoFiber BD` : 'Article | EcoFiber BD',
    description: article ? article.description : '',
    keywords: article ? article.keywords : '',
    url: `https://ecofiberbd.com/blog/${slug}`,
    type: 'article',
    image: article ? `https://ecofiberbd.com${encodeURI(article.cover)}` : 'https://ecofiberbd.com/Images/Banana_fiber_Grade%20A.jpg'
  })

  // Inject Article + Breadcrumb structured data
  useEffect(() => {
    if (!article) return
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.description,
      'image': `https://ecofiberbd.com${encodeURI(article.cover)}`,
      'datePublished': article.date,
      'dateModified': article.date,
      'author': { '@type': 'Organization', 'name': 'EcoFiber BD' },
      'publisher': {
        '@type': 'Organization',
        'name': 'EcoFiber BD',
        'logo': { '@type': 'ImageObject', 'url': 'https://ecofiberbd.com/favicon.svg' }
      },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://ecofiberbd.com/blog/${slug}` }
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'article-jsonld'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    return () => { document.getElementById('article-jsonld')?.remove() }
  }, [slug, article])

  const bodyRef = useReveal(0)

  if (!article) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.25rem' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#1f2937' }}>Article not found</h2>
      <Link to="/blog" style={{ color: '#39962c', fontWeight: 500, textDecoration: 'none' }}>← Back to Blog</Link>
    </div>
  )

  const related = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 2)

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', overflow: 'hidden', paddingTop: '9rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0">
          <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(11,26,13,0.92) 0%,rgba(57,150,44,0.78) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 2rem' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '1.75rem', textDecoration: 'none', fontSize: '0.9375rem' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <h1 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 2.75rem)', lineHeight: 1.2, color: '#fff', marginBottom: '1.5rem' }}>{article.title}</h1>
          <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}><Calendar size={15} /> {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}><Clock size={15} /> {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        <article ref={bodyRef} className="reveal" style={{ background: '#fff', borderRadius: '1.25rem', padding: 'clamp(2rem, 5vw, 3.5rem)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid #f3f4f6' }}>
          <p style={{ fontSize: '1.125rem', color: '#374151', lineHeight: 1.9, marginBottom: '2.5rem', fontWeight: 500 }}>{article.excerpt}</p>
          {article.sections.map((s, i) => (
            <section key={i} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '1.25rem', lineHeight: 1.3 }}>{s.heading}</h2>
              {s.body.map((p, j) => (
                <p key={j} style={{ color: '#4b5563', fontSize: '1.0625rem', lineHeight: 1.95, marginBottom: '1rem' }}>{p}</p>
              ))}
            </section>
          ))}

          {/* CTA */}
          <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '1rem', background: 'rgba(57,150,44,0.07)', border: '1px solid rgba(57,150,44,0.18)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.75rem' }}>Looking to buy banana fiber?</h3>
            <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              EcoFiber BD supplies premium raw banana fiber — Grade A, B & C — from Bangladesh. Request a sample or wholesale quote.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/products" className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#39962c', color: '#fff', padding: '0.875rem 1.75rem', borderRadius: '9999px', textDecoration: 'none', fontSize: '0.9375rem' }}>
                View Products <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: '2px solid #39962c', color: '#39962c', padding: '0.875rem 1.75rem', borderRadius: '9999px', textDecoration: 'none', fontSize: '0.9375rem' }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </article>

        {/* Related */}
        <div style={{ marginTop: '3.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '1.5rem' }}>Related articles</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {related.map(r => (
              <Link key={r.slug} to={`/blog/${r.slug}`}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{ background: '#fff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '9rem', overflow: 'hidden' }}>
                  <img src={r.cover} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', color: '#111827', lineHeight: 1.4 }}>{r.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
