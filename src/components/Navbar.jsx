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
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled
  const bg = transparent ? 'bg-transparent' : 'bg-white shadow-md'
  const textColor = transparent ? 'text-white' : 'text-gray-800'
  const logo = transparent ? logoDark : logoLight

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="EcoFiber BD" className="h-12 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-medium transition-colors hover:text-[#39962c] ${
                  location.pathname === l.to ? 'text-[#39962c]' : textColor
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#39962c] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#2d7a22] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-800 font-medium hover:text-[#39962c] hover:bg-gray-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-[#39962c] text-white px-5 py-2.5 rounded-lg font-medium"
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
