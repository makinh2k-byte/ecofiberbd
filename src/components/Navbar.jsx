import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'

const WHATSAPP_NUMBER = '8801672268121'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20EcoFiber%20BD%2C%20I%20would%20like%20to%20inquire%20about%20your%20banana%20fiber%20products.`

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location              = useLocation()
  const isHome                = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  const transparent = isHome && !scrolled
  const logo = transparent ? logoDark : logoLight

  const links = [
    { to: '/',        label: 'Home'    },
    { to: '/products',label: 'Products'},
    { to: '/blog',    label: 'Blog'    },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={transparent
        ? { background: 'transparent' }
        : { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)', boxShadow: '0 2px 20px rgba(0,0,0,0.08)' }
      }>
      <div className="max-w-6xl mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between h-20 px-4">
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="EcoFiber BD" className="h-20 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`font-semibold text-[15px] transition-all duration-200 relative group ${
                  location.pathname === l.to
                    ? 'text-[#39962c]'
                    : transparent ? 'text-white/85 hover:text-white' : 'text-gray-700 hover:text-[#39962c]'
                }`}>
                {l.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#39962c] transition-all duration-300 ${location.pathname === l.to ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-[16px] text-white px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg transform hover:scale-105"
              style={{ background: '#25D366', boxShadow: '0 2px 12px rgba(37,211,102,0.3)' }}
              title="Chat with us on WhatsApp">
              <MessageCircle size={20} className="transition-transform group-hover:rotate-12" />
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button className={`md:hidden p-2 transition-all duration-300 transform ${open ? 'rotate-90' : 'rotate-0'} ${transparent ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-gray-200 ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
          style={transparent ? { borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.95)' } : { background: 'rgba(255,255,255,0.98)', borderColor: '#e5e7eb' }}>
          <div className="py-3 px-6">
            {links.map((l, i) => (
              <Link key={l.to} to={l.to}
                onClick={() => setOpen(false)}
                className={`block py-3 px-3 font-semibold text-[15px] rounded-lg transition-all duration-200 ${
                  location.pathname === l.to
                    ? 'text-[#39962c] bg-green-50'
                    : 'text-gray-700 hover:text-[#39962c] hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${i * 30}ms` }}>
                {l.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 text-center text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-[15px] mt-2 hover:scale-105"
                style={{ background: '#25D366', boxShadow: '0 2px 12px rgba(37,211,102,0.3)' }}>
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
