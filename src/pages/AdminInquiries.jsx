import { useState, useEffect } from 'react'
import { Mail, Phone, Globe, Calendar, Eye, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import AdminLayout from '../components/AdminLayout'

const MOCK_INQUIRIES = [
  {
    id: 1, name: 'Ahmad Rahman', email: 'ahmad@textilebd.com', phone: '+880 1711-111111',
    country: 'Bangladesh', product: 'Grade A Premium Banana Fiber',
    message: 'We are a textile manufacturer looking for 500kg of Grade A fiber monthly. Can you provide samples first?',
    status: 'new', created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 2, name: 'Hiroshi Tanaka', email: 'h.tanaka@japanfabrics.jp', phone: '+81 3-1234-5678',
    country: 'Japan', product: 'Grade B Standard Banana Fiber',
    message: 'Interested in importing 2 tons monthly for our handicraft business. Please send pricing and export documentation.',
    status: 'read', created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 3, name: 'Maria Schmidt', email: 'maria@ecocompany.de', phone: '+49 30 12345678',
    country: 'Germany', product: 'Grade C Industrial Banana Fiber',
    message: 'We produce biocomposite panels and looking for a reliable supplier. What is your maximum monthly capacity?',
    status: 'replied', created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

const statusConfig = {
  new: { label: 'New', color: 'bg-blue-100 text-blue-700', icon: AlertCircle },
  read: { label: 'Read', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
  replied: { label: 'Replied', color: 'bg-green-100 text-green-700', icon: CheckCircle },
}

function timeAgo(isoStr) {
  const diff = Date.now() - new Date(isoStr).getTime()
  const hours = Math.floor(diff / 3600000)
  if (hours < 1) return 'Just now'
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState(MOCK_INQUIRIES)
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? inquiries : inquiries.filter(i => i.status === filter)

  const updateStatus = (id, status) => {
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i))
    if (selected?.id === id) setSelected(prev => ({ ...prev, status }))
  }

  const newCount = inquiries.filter(i => i.status === 'new').length

  return (
    <AdminLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
          <p className="text-gray-500 mt-1">{newCount > 0 ? `${newCount} new inquiry${newCount > 1 ? 'ies' : ''}` : 'All caught up'}</p>
        </div>
        <div className="flex gap-2">
          {['all', 'new', 'read', 'replied'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${
                filter === f ? 'bg-[#39962c] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#39962c]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center text-gray-500 border border-gray-100">
              No inquiries found.
            </div>
          ) : filtered.map(inq => {
            const sc = statusConfig[inq.status]
            return (
              <div
                key={inq.id}
                onClick={() => { setSelected(inq); updateStatus(inq.id, inq.status === 'new' ? 'read' : inq.status) }}
                className={`bg-white rounded-2xl p-5 border cursor-pointer transition-all hover:shadow-md ${
                  selected?.id === inq.id ? 'border-[#39962c] shadow-md' : 'border-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{inq.name}</h3>
                    <p className="text-sm text-gray-500">{inq.country} · {timeAgo(inq.created_at)}</p>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${sc.color}`}>
                    <sc.icon size={12} /> {sc.label}
                  </span>
                </div>
                <p className="text-sm text-[#39962c] font-medium mb-1">{inq.product}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{inq.message}</p>
              </div>
            )
          })}
        </div>

        {/* Detail */}
        <div>
          {selected ? (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-8">
              <div className="bg-[#37593b] text-white px-6 py-4 flex items-center justify-between">
                <h3 className="font-semibold">Inquiry Detail</h3>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusConfig[selected.status].color}`}>
                  {statusConfig[selected.status].label}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{selected.name}</h4>
                  <p className="text-sm text-gray-500">{timeAgo(selected.created_at)}</p>
                </div>
                {[
                  { icon: Mail, value: selected.email },
                  { icon: Phone, value: selected.phone || '—' },
                  { icon: Globe, value: selected.country },
                ].map(item => (
                  <div key={item.value} className="flex items-center gap-3 text-gray-700 text-sm">
                    <item.icon size={16} className="text-[#39962c] shrink-0" />
                    {item.value}
                  </div>
                ))}
                <div className="bg-[#39962c]/10 rounded-xl px-4 py-2 text-sm font-medium text-[#39962c]">
                  {selected.product}
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
                  {selected.message}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={`mailto:${selected.email}`}
                    onClick={() => updateStatus(selected.id, 'replied')}
                    className="flex-1 text-center bg-[#39962c] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#2d7a22] transition-colors"
                  >
                    Reply via Email
                  </a>
                  <button
                    onClick={() => updateStatus(selected.id, 'replied')}
                    className="px-4 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:border-[#39962c] transition-colors"
                  >
                    Mark Replied
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-500">
              <Eye size={40} className="mx-auto mb-4 text-gray-300" />
              <p>Select an inquiry to view details</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
