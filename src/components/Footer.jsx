import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #16331a 0%, #37593b 100%)' }}>
      {/* Sloped top */}
      <div style={{ marginTop: '-1px' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 60L1440 0V60H0Z" fill="#16331a" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <img src={logoLight} alt="EcoFiber BD" className="h-14 w-auto mb-5" />
            <p className="text-green-200/80 leading-relaxed max-w-sm text-[15px]">
              Transforming Waste into Sustainable Solutions. Premium raw banana fiber
              sourced from Bangladesh's finest banana plantations.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-[#39962c] px-4 py-2 rounded-full transition-all text-sm font-semibold text-white"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-[#39962c] px-4 py-2 rounded-full transition-all text-sm font-semibold text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white text-lg mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/contact', label: 'Contact Us' },
              ].map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-green-200/70 hover:text-[#8dc63f] transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39962c] group-hover:bg-[#8dc63f] transition-colors"></span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-white text-lg mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-200/70">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#8dc63f]" />
                <span className="text-[15px]">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-green-200/70">
                <Mail size={17} className="shrink-0 text-[#8dc63f]" />
                <a href="mailto:makin@ecofiberbd.com" className="hover:text-[#8dc63f] transition-colors text-[15px]">
                  makin@ecofiberbd.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-green-200/70">
                <Phone size={17} className="shrink-0 text-[#8dc63f]" />
                <span className="text-[15px]">+880 1XXX-XXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-green-300/50 text-sm">
          <p>© {new Date().getFullYear()} EcoFiber BD. All rights reserved.</p>
          <p>Premium Raw Banana Fiber Supplier — Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}
