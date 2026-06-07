import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'

export default function Footer() {
  return (
    <footer>
      {/* Slope into footer — white wedge on dark bg */}
      <div style={{ background: '#0b1a0d', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 80 }}>
          <polygon points="0,80 1440,0 1440,80 0,80" fill="white" />
        </svg>
      </div>

      <div style={{ background: 'linear-gradient(150deg,#0b1a0d 0%,#1e3d22 60%,#37593b 100%)', backgroundImage: 'url(/ecofiber\ background\ Pattern.svg)', backgroundSize: '600px 600px', backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,rgba(11,26,13,0.93) 0%,rgba(30,61,34,0.93) 60%,rgba(55,89,59,0.93) 100%)', pointerEvents: 'none' }} />
        <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-24 pb-28" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">

            {/* Brand */}
            <div>
              <img src={logoLight} alt="EcoFiber BD" className="h-20 w-auto mb-8" />
              <p className="text-green-200/60 leading-[1.85] text-sm max-w-xs">
                Transforming Waste into Sustainable Solutions. Premium raw banana fiber
                sourced from Bangladesh's finest banana plantations.
              </p>
              <div className="flex gap-3 mt-10">
                {['Facebook', 'LinkedIn'].map(name => (
                  <a key={name} href="#"
                    className="bg-white/10 hover:bg-[#39962c] px-5 py-2.5 rounded-full transition-all text-sm font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg">
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-base mb-8 tracking-wide">Quick Links</h4>
              <ul className="space-y-5">
                {[['/', 'Home'], ['/products', 'Products'], ['/contact', 'Contact Us']].map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-green-200/55 hover:text-[#8dc63f] transition-colors text-sm font-medium flex items-center gap-2.5 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39962c] group-hover:bg-[#8dc63f] transition-colors shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white text-base mb-8 tracking-wide">Contact</h4>
              <ul className="space-y-6">
                {[
                  { icon: MapPin, text: 'Dhaka, Bangladesh',   href: null },
                  { icon: Mail,   text: 'info@ecofiberbd.com', href: 'mailto:info@ecofiberbd.com' },
                  { icon: Phone,  text: '+8801672268121',       href: 'tel:+8801672268121' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon size={18} color="#8dc63f" className="shrink-0 mt-0.5" />
                    <div>
                      {item.href
                        ? <a href={item.href} className="text-green-200/60 text-sm hover:text-[#8dc63f] transition-colors font-medium">{item.text}</a>
                        : <span className="text-green-200/60 text-sm font-medium">{item.text}</span>
                      }
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-green-300/35 text-xs">
            <p>© {new Date().getFullYear()} EcoFiber BD. All rights reserved.</p>
            <p>Premium Raw Banana Fiber Supplier — Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
