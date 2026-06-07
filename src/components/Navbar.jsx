import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'

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
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={transparent
        ? { background: 'transparent' }
        : { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)', boxShadow: '0 2px 20px rgba(0,0,0,0.08)' }
      }>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <img src={logo} alt="EcoFiber BD" className="h-12 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`font-semibold text-[15px] transition-colors duration-200 ${
                  location.pathname === l.to
                    ? 'text-[#39962c]'
                    : transparent ? 'text-white/85 hover:text-white' : 'text-gray-700 hover:text-[#39962c]'
                }`}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact"
              className="font-semibold text-[15px] text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#39962c', boxShadow: '0 2px 12px rgba(57,150,44,0.3)' }}>
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className={`md:hidden p-2 transition-colors ${transparent ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl border border-gray-100 py-4 mb-3">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 font-semibold text-gray-800 hover:text-[#39962c] hover:bg-green-50 transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="px-6 pt-3">
              <Link to="/contact" onClick={() => setOpen(false)}
                className="block text-center text-white font-semibold py-3 rounded-full"
                style={{ background: '#39962c' }}>
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
