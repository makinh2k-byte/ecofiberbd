import { useState } from 'react'
import { Plus, Edit2, Trash2, X, Save, ToggleLeft, ToggleRight } from 'lucide-react'
import AdminLayout from '../components/AdminLayout'

const INITIAL_PRODUCTS = [
  {
    id: 1, name: 'Grade A Premium Banana Fiber', grade: 'Grade A',
    fiber_length_cm: '90–120', moisture_content_percent: 13,
    moq_kg: 100, price_per_kg: 8.5, stock_kg: 2000,
    description: 'Premium long-staple banana fiber ideal for fine textiles.', is_active: true,
  },
  {
    id: 2, name: 'Grade B Standard Banana Fiber', grade: 'Grade B',
    fiber_length_cm: '60–90', moisture_content_percent: 13,
    moq_kg: 150, price_per_kg: 6.0, stock_kg: 3500,
    description: 'Mid-grade fiber for home furnishings and handicrafts.', is_active: true,
  },
  {
    id: 3, name: 'Grade C Industrial Banana Fiber', grade: 'Grade C',
    fiber_length_cm: '30–60', moisture_content_percent: 13,
    moq_kg: 200, price_per_kg: 4.0, stock_kg: 5000,
    description: 'Industrial-grade fiber for marine and composite applications.', is_active: true,
  },
]

const empty = {
  name: '', grade: 'Grade A', fiber_length_cm: '', moisture_content_percent: 13,
  moq_kg: '', price_per_kg: '', stock_kg: '', description: '', is_active: true,
}

export default function AdminProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(empty)

  const openNew = () => { setForm(empty); setEditing(null); setShowForm(true) }
  const openEdit = p => { setForm({ ...p }); setEditing(p.id); setShowForm(true) }

  const handleSave = () => {
    if (editing) {
      setProducts(prev => prev.map(p => p.id === editing ? { ...form, id: editing } : p))
    } else {
      setProducts(prev => [...prev, { ...form, id: Date.now() }])
    }
    setShowForm(false)
  }

  const handleDelete = id => {
    if (confirm('Delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== id))
    }
  }

  const toggleActive = id => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, is_active: !p.is_active } : p))
  }

  const gradeColor = {
    'Grade A': 'bg-[#39962c]',
    'Grade B': 'bg-[#8dc63f]',
    'Grade C': 'bg-[#37593b]',
  }

  return (
    <AdminLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">{products.length} products total</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-[#39962c] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#2d7a22] transition-colors"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['Product', 'Grade', 'Length', 'Price/kg', 'MOQ', 'Stock', 'Status', 'Actions'].map(h => (
                  <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map(p => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-medium text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 max-w-xs truncate">{p.description}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`${gradeColor[p.grade]} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                      {p.grade}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-700">{p.fiber_length_cm} cm</td>
                  <td className="px-5 py-4 text-sm font-semibold text-[#39962c]">${p.price_per_kg}</td>
                  <td className="px-5 py-4 text-sm text-gray-700">{p.moq_kg} kg</td>
                  <td className="px-5 py-4 text-sm text-gray-700">{p.stock_kg?.toLocaleString()} kg</td>
                  <td className="px-5 py-4">
                    <button onClick={() => toggleActive(p.id)}>
                      {p.is_active
                        ? <ToggleRight size={28} className="text-[#39962c]" />
                        : <ToggleLeft size={28} className="text-gray-300" />}
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEdit(p)}
                        className="p-2 text-gray-500 hover:text-[#39962c] hover:bg-green-50 rounded-lg transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="bg-[#37593b] text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="font-semibold">{editing ? 'Edit Product' : 'Add New Product'}</h3>
              <button onClick={() => setShowForm(false)}><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                  <select value={form.grade} onChange={e => setForm({ ...form, grade: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] bg-white">
                    {['Grade A', 'Grade B', 'Grade C'].map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fiber Length (cm)</label>
                  <input value={form.fiber_length_cm} onChange={e => setForm({ ...form, fiber_length_cm: e.target.value })}
                    placeholder="e.g. 90–120"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price per kg ($)</label>
                  <input type="number" value={form.price_per_kg} onChange={e => setForm({ ...form, price_per_kg: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">MOQ (kg)</label>
                  <input type="number" value={form.moq_kg} onChange={e => setForm({ ...form, moq_kg: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock (kg)</label>
                  <input type="number" value={form.stock_kg} onChange={e => setForm({ ...form, stock_kg: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Moisture Content (%)</label>
                  <input type="number" value={form.moisture_content_percent} onChange={e => setForm({ ...form, moisture_content_percent: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c]" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#39962c] resize-none" />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#39962c] text-white py-3 rounded-xl font-semibold hover:bg-[#2d7a22] transition-colors"
                >
                  <Save size={16} /> {editing ? 'Save Changes' : 'Add Product'}
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:border-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
