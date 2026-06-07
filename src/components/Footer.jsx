import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'

export default function Footer() {
  return (
    <footer>
      {/* Slope into footer */}
      <div style={{ background: '#16331a', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 60 }}>
          <polygon points="0,60 1440,0 1440,60 0,60" fill="white" />
        </svg>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #16331a 0%, #37593b 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

            {/* Brand */}
            <div className="md:col-span-5">
              <img src={logoLight} alt="EcoFiber BD" className="h-12 w-auto mb-5" />
              <p className="text-green-200/70 leading-relaxed text-sm max-w-sm">
                Transforming Waste into Sustainable Solutions. Premium raw banana fiber
                sourced from Bangladesh's finest banana plantations.
              </p>
              <div className="flex gap-3 mt-6">
                {['Facebook', 'LinkedIn'].map(name => (
                  <a key={name} href="#"
                    className="bg-white/10 hover:bg-[#39962c] px-4 py-2 rounded-full transition-all text-sm font-semibold text-white">
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-white text-base mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {[['/', 'Home'], ['/products', 'Products'], ['/contact', 'Contact Us']].map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-green-200/60 hover:text-[#8dc63f] transition-colors text-sm font-medium flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39962c] group-hover:bg-[#8dc63f] transition-colors" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-white text-base mb-5">Contact</h4>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, text: 'Dhaka, Bangladesh',     href: null },
                  { icon: Mail,   text: 'makin@ecofiberbd.com',  href: 'mailto:makin@ecofiberbd.com' },
                  { icon: Phone,  text: '+880 1XXX-XXXXXX',      href: null },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-green-200/60">
                    <item.icon size={15} color="#8dc63f" className="shrink-0" />
                    {item.href
                      ? <a href={item.href} className="text-sm hover:text-[#8dc63f] transition-colors">{item.text}</a>
                      : <span className="text-sm">{item.text}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-green-300/40 text-xs">
            <p>© {new Date().getFullYear()} EcoFiber BD. All rights reserved.</p>
            <p>Premium Raw Banana Fiber Supplier — Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
