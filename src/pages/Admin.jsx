import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff } from 'lucide-react'
import logoLight from '../assets/logo-light.svg'

const ADMIN_PASSWORD = 'Eco@2026!!'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', 'true')
      navigate('/admin/inquiries')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #37593b 0%, #39962c 100%)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <img src={logoLight} alt="EcoFiber BD" className="h-14 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">Enter your password to continue</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-5 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Enter admin password"
                className="w-full pl-9 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c]"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#39962c] text-white py-3 rounded-xl font-semibold hover:bg-[#2d7a22] transition-colors"
          >
            Login to Admin
          </button>
        </form>
      </div>
    </div>
  )
}
