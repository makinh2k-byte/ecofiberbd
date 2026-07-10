import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const PATTERN = '/ecofiber-background-Pattern.png'
const UPDATED = 'January 2026'

const h2 = { fontSize: '1.5rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem' }
const p  = { color: '#4b5563', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1rem' }
const li = { color: '#4b5563', fontSize: '1rem', lineHeight: 1.85, marginBottom: '0.5rem' }

export default function Terms() {
  useSEO({
    title: 'Terms & Conditions | EcoFiber BD — Banana Fiber Supplier Bangladesh',
    description: 'Terms and Conditions for using the EcoFiber BD website and for the sale of our banana fiber products, including orders, pricing, samples and quality.',
    keywords: 'EcoFiber BD terms and conditions, banana fiber supplier terms',
    url: 'https://ecofiberbd.com/terms',
  })

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '5rem', background: 'linear-gradient(160deg,#1a3820 0%,#2d5533 55%,#39962c 100%)' }}>
        <div className="absolute inset-0 leaf-anim" style={{ backgroundImage: `url(${PATTERN})`, backgroundSize: '420px 420px', backgroundRepeat: 'repeat' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.86) 0%,rgba(20,50,24,0.80) 55%,rgba(40,110,30,0.72) 100%)' }} />
        <div className="hero-rise" style={{ position: 'relative', zIndex: 10, maxWidth: '44rem', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 4rem)', marginBottom: '1rem', color: '#fff' }}>Terms &amp; Conditions</h1>
          <p style={{ color: 'rgba(220,252,231,0.7)', fontSize: '1rem', fontWeight: 300 }}>Last updated: {UPDATED}</p>
        </div>
      </section>

      <section style={{ background: '#fff', paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 2rem' }}>
          <p style={p}>
            These Terms &amp; Conditions (“Terms”) govern your use of the website <strong>ecofiberbd.com</strong> and any purchase of banana fiber products from EcoFiber BD (“we”, “us”, “our”). By accessing our website or placing an order, you agree to these Terms.
          </p>

          <h2 style={h2}>About our products</h2>
          <p style={p}>
            EcoFiber BD supplies and exports raw banana fiber in Grade A, B and C. Because banana fiber is a natural material, colour, length and texture may vary slightly between batches. Specifications and images on the website are provided in good faith as a general guide and are not binding exact representations of every shipment.
          </p>

          <h2 style={h2}>Inquiries, quotes & orders</h2>
          <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc', marginBottom: '1rem' }}>
            <li style={li}>Prices shown on the website are indicative. Final pricing is confirmed in a written quotation based on grade, quantity, packaging and destination.</li>
            <li style={li}>An order is confirmed only once we agree the quotation and any deposit or payment terms in writing.</li>
            <li style={li}>Minimum order quantities (MOQ) apply per grade as stated on the product pages.</li>
          </ul>

          <h2 style={h2}>Pricing & payment</h2>
          <p style={p}>
            All prices are exclusive of shipping, duties and taxes unless otherwise stated. Payment terms, currency and method are agreed in the quotation. We reserve the right to change prices before an order is confirmed.
          </p>

          <h2 style={h2}>Samples</h2>
          <p style={p}>
            Samples are provided so you can assess quality before ordering. Sample costs and shipping, where applicable, are communicated in advance. Samples represent typical quality but natural variation between production batches may occur.
          </p>

          <h2 style={h2}>Shipping & delivery</h2>
          <p style={p}>
            Delivery timelines are estimates and depend on order size, availability and shipping arrangements. We are not liable for delays caused by carriers, customs or events beyond our reasonable control.
          </p>

          <h2 style={h2}>Quality & returns</h2>
          <p style={p}>
            We stand behind the quality of our fiber. If a delivered order materially differs from the agreed specification, notify us in writing within a reasonable period of receipt so we can investigate and, where justified, arrange a suitable remedy.
          </p>

          <h2 style={h2}>Intellectual property</h2>
          <p style={p}>
            All content on this website — text, images, logos and design — is the property of EcoFiber BD and may not be copied or reused without our written permission.
          </p>

          <h2 style={h2}>Limitation of liability</h2>
          <p style={p}>
            To the maximum extent permitted by law, EcoFiber BD is not liable for indirect or consequential losses arising from use of this website or our products. Our total liability for any order is limited to the value of that order.
          </p>

          <h2 style={h2}>Governing law</h2>
          <p style={p}>
            These Terms are governed by the laws of Bangladesh, and any disputes will be subject to the jurisdiction of the courts of Dhaka, Bangladesh.
          </p>

          <h2 style={h2}>Contact us</h2>
          <p style={p}>
            Questions about these Terms? Contact us at <a href="mailto:info@ecofiberbd.com" style={{ color: '#39962c', fontWeight: 600 }}>info@ecofiberbd.com</a> or +8801672268121. EcoFiber BD, Flat: D-2, House: 9, Road: 13 (New), Dhanmondi, Dhaka-1209, Bangladesh.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
