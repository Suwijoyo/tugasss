'use client';

import Link from 'next/link';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ title, value, change, positive, icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
          {icon}
        </div>
        <span className={`text-sm font-medium ${positive ? 'text-green-600' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900">SIP Terpadu</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Beranda</Link>
            <Link href="/dashboard" className="text-sm font-medium text-blue-600">Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Selamat datang di Sistem Informasi Terpadu</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Pengguna"
            value="1,248"
            change="+12%"
            positive={true}
            color="bg-blue-100"
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
          <StatCard
            title="Dokumen Aktif"
            value="3,842"
            change="+8%"
            positive={true}
            color="bg-green-100"
            icon={
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
          <StatCard
            title="Laporan Bulan Ini"
            value="156"
            change="+23%"
            positive={true}
            color="bg-purple-100"
            icon={
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          <StatCard
            title="Tugas Tertunda"
            value="24"
            change="-5%"
            positive={false}
            color="bg-orange-100"
            icon={
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h2>
          <div className="space-y-4">
            {[
              { action: 'Dokumen baru ditambahkan', user: 'Ahmad Fauzi', time: '5 menit lalu', type: 'add' },
              { action: 'Laporan bulanan diperbarui', user: 'Siti Rahayu', time: '1 jam lalu', type: 'edit' },
              { action: 'Pengguna baru terdaftar', user: 'Budi Santoso', time: '3 jam lalu', type: 'user' },
              { action: 'Data diekspor ke Excel', user: 'Dewi Lestari', time: '5 jam lalu', type: 'export' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.type === 'add' ? 'bg-green-100' :
                  item.type === 'edit' ? 'bg-blue-100' :
                  item.type === 'user' ? 'bg-purple-100' : 'bg-orange-100'
                }`}>
                  <svg className={`w-4 h-4 ${
                    item.type === 'add' ? 'text-green-600' :
                    item.type === 'edit' ? 'text-blue-600' :
                    item.type === 'user' ? 'text-purple-600' : 'text-orange-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.type === 'add' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />}
                    {item.type === 'edit' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />}
                    {item.type === 'user' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                    {item.type === 'export' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-500">oleh {item.user}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
