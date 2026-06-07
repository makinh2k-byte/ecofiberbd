import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'
import logoDark from '../assets/logo-dark.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled
  const logo = transparent ? logoDark : logoLight

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        transparent
          ? { background: 'transparent' }
          : { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', boxShadow: '0 2px 24px rgba(57,150,44,0.10)' }
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="EcoFiber BD" className="h-14 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-semibold text-[15px] tracking-wide transition-colors ${
                  location.pathname === l.to
                    ? 'text-[#39962c]'
                    : transparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-700 hover:text-[#39962c]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#39962c] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-[#2d7a22] transition-all hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${transparent ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 rounded-b-2xl shadow-xl">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-gray-800 font-semibold hover:text-[#39962c] hover:bg-green-50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-6 pt-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-[#39962c] text-white px-5 py-3 rounded-full font-semibold"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
