import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const PATTERN = '/ecofiber background Pattern.svg'
const UPDATED = 'January 2026'

const h2 = { fontSize: '1.5rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem' }
const p  = { color: '#4b5563', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1rem' }
const li = { color: '#4b5563', fontSize: '1rem', lineHeight: 1.85, marginBottom: '0.5rem' }

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy | EcoFiber BD — Banana Fiber Supplier Bangladesh',
    description: 'Privacy Policy for EcoFiber BD. How we collect, use and protect the personal information you share when inquiring about our banana fiber products.',
    keywords: 'EcoFiber BD privacy policy, banana fiber supplier privacy',
    url: 'https://ecofiberbd.com/privacy',
  })

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#f7f5f0' }}>
      <Navbar />

      <section style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', paddingTop: '10rem', paddingBottom: '5rem', background: 'linear-gradient(160deg,#1a3820 0%,#2d5533 55%,#39962c 100%)', backgroundImage: `url(${PATTERN})`, backgroundSize: '600px 600px', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,rgba(8,20,9,0.92) 0%,rgba(20,50,24,0.88) 55%,rgba(40,110,30,0.82) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '44rem', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 4rem)', marginBottom: '1rem', color: '#fff' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(220,252,231,0.7)', fontSize: '1rem', fontWeight: 300 }}>Last updated: {UPDATED}</p>
        </div>
      </section>

      <section style={{ background: '#fff', paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 2rem' }}>
          <p style={p}>
            EcoFiber BD (“we”, “us”, “our”) operates the website <strong>ecofiberbd.com</strong>. This Privacy Policy explains what information we collect when you visit our site or contact us about our banana fiber products, how we use it, and the choices you have. By using our website you agree to the practices described below.
          </p>

          <h2 style={h2}>Information we collect</h2>
          <p style={p}>We only collect information you choose to give us, plus basic technical data needed to run the site:</p>
          <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc', marginBottom: '1rem' }}>
            <li style={li}><strong>Inquiry details</strong> — when you submit our contact form or message us on WhatsApp, we receive your name, email, phone number, country, the product you are interested in, and your message.</li>
            <li style={li}><strong>Technical data</strong> — like most websites, our hosting provider may log IP addresses, browser type, and pages visited to keep the service secure and reliable.</li>
          </ul>

          <h2 style={h2}>How we use your information</h2>
          <p style={p}>We use the information you provide solely to:</p>
          <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc', marginBottom: '1rem' }}>
            <li style={li}>Respond to your inquiries and provide quotes, samples and pricing.</li>
            <li style={li}>Fulfil and follow up on orders for banana fiber.</li>
            <li style={li}>Improve our products, service and website.</li>
          </ul>
          <p style={p}>We do <strong>not</strong> sell, rent or trade your personal information to third parties.</p>

          <h2 style={h2}>Sharing of information</h2>
          <p style={p}>
            We may share limited information with trusted service providers who help us operate (for example, our website host and email provider), only to the extent needed to deliver our service, and with authorities where required by law. These providers are expected to keep your information confidential.
          </p>

          <h2 style={h2}>Data retention & security</h2>
          <p style={p}>
            We keep inquiry information only as long as necessary to serve you and maintain our business records, and we apply reasonable technical and organisational measures to protect it. No method of transmission over the internet is 100% secure, but we work to safeguard your data.
          </p>

          <h2 style={h2}>Your rights</h2>
          <p style={p}>
            You may ask us to access, correct or delete the personal information you have shared with us. To make a request, email us at <a href="mailto:info@ecofiberbd.com" style={{ color: '#39962c', fontWeight: 600 }}>info@ecofiberbd.com</a> and we will respond within a reasonable time.
          </p>

          <h2 style={h2}>Cookies</h2>
          <p style={p}>
            Our website uses only essential functionality and does not run advertising trackers. Any cookies present are used to keep the site working correctly. You can disable cookies in your browser settings.
          </p>

          <h2 style={h2}>Changes to this policy</h2>
          <p style={p}>
            We may update this Privacy Policy from time to time. The “Last updated” date above reflects the most recent revision.
          </p>

          <h2 style={h2}>Contact us</h2>
          <p style={p}>
            If you have any questions about this Privacy Policy, contact us at <a href="mailto:info@ecofiberbd.com" style={{ color: '#39962c', fontWeight: 600 }}>info@ecofiberbd.com</a> or +8801672268121. EcoFiber BD, Flat: D-2, House: 9, Road: 13 (New), Dhanmondi, Dhaka-1209, Bangladesh.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
