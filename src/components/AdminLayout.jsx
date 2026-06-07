import { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, Package, MessageSquare, LogOut } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'

export default function AdminLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!sessionStorage.getItem('admin_auth')) {
      navigate('/admin')
    }
  }, [])

  const logout = () => {
    sessionStorage.removeItem('admin_auth')
    navigate('/admin')
  }

  const nav = [
    { to: '/admin/inquiries', icon: MessageSquare, label: 'Inquiries' },
    { to: '/admin/products', icon: Package, label: 'Products' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#37593b] text-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-white/10">
          <img src={logoLight} alt="EcoFiber BD" className="h-10 w-auto" />
          <p className="text-green-300 text-xs mt-2">Admin Panel</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                location.pathname === item.to
                  ? 'bg-white/20 text-white font-semibold'
                  : 'text-green-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={logout}
            className="flex items-center gap-3 text-green-300 hover:text-white px-4 py-3 w-full rounded-xl hover:bg-white/10 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
