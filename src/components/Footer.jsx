import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'

export default function Footer() {
  return (
    <footer className="bg-[#37593b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logoLight} alt="EcoFiber BD" className="h-14 w-auto mb-4" />
            <p className="text-green-200 leading-relaxed max-w-sm">
              Transforming Waste into Sustainable Solutions. Premium raw banana fiber
              sourced from Bangladesh's finest banana plantations.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors text-sm font-bold">
                Facebook
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors text-sm font-bold">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/contact', label: 'Contact Us' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-green-200 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-green-200">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#8dc63f]" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-green-200">
                <Mail size={18} className="shrink-0 text-[#8dc63f]" />
                <a href="mailto:info@ecofiberbd.com" className="hover:text-white transition-colors">
                  info@ecofiberbd.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-green-200">
                <Phone size={18} className="shrink-0 text-[#8dc63f]" />
                <span>+880 1XXX-XXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-green-300 text-sm">
          <p>© {new Date().getFullYear()} EcoFiber BD. All rights reserved.</p>
          <p>Premium Raw Banana Fiber Supplier — Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}
