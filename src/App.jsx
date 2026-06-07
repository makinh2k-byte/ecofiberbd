import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import AdminProducts from './pages/AdminProducts'
import AdminInquiries from './pages/AdminInquiries'
import { useScrollToTop } from './hooks/useScrollToTop'

const WHATSAPP_NUMBER = '8801672268121'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20EcoFiber%20BD%2C%20I%20would%20like%20to%20inquire%20about%20your%20banana%20fiber%20products.`

/**
 * Scroll to top wrapper component
 */
function ScrollToTop() {
  useScrollToTop()
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/inquiries" element={<AdminInquiries />} />
      </Routes>

      {/* Floating WhatsApp Button */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
        title="Chat with us on WhatsApp">
        <MessageCircle size={32} color="white" fill="white" />
      </a>
    </BrowserRouter>
  )
}
