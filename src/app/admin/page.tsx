'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Calendar, Users, Euro, Clock, TrendingUp, AlertCircle } from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    todayBookings: 0,
    totalBookings: 0,
    revenue: 0,
    availableSlots: 0
  })
  const [recentBookings, setRecentBookings] = useState([])

  useEffect(() => {
    // Fetch dashboard data
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Fetch recent bookings
      const bookingsResponse = await fetch('/api/bookings')
      const bookings = await bookingsResponse.json()
      
      // Calculate stats
      const today = new Date().toISOString().split('T')[0]
      const todayBookings = bookings.filter((booking: any) => booking.date === today)
      
      setStats({
        todayBookings: todayBookings.length,
        totalBookings: bookings.length,
        revenue: bookings.length * 25, // Estimated revenue
        availableSlots: 12 // Mock available slots
      })
      
      setRecentBookings(bookings.slice(-5))
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    }
  }

  const statCards = [
    {
      title: 'Heute',
      value: stats.todayBookings,
      icon: Calendar,
      color: 'bg-blue-500',
      description: 'Termine heute'
    },
    {
      title: 'Gesamt',
      value: stats.totalBookings,
      icon: Users,
      color: 'bg-green-500',
      description: 'Alle Buchungen'
    },
    {
      title: 'Umsatz',
      value: `${stats.revenue}€`,
      icon: Euro,
      color: 'bg-yellow-500',
      description: 'Geschätzter Umsatz'
    },
    {
      title: 'Verfügbar',
      value: stats.availableSlots,
      icon: Clock,
      color: 'bg-purple-500',
      description: 'Freie Plätze heute'
    }
  ]

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  <p className="text-xs text-gray-500">{card.description}</p>
                </div>
                <div className={`p-3 rounded-full ${card.color}`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Bookings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Neueste Buchungen</h3>
            <div className="space-y-3">
              {recentBookings.length > 0 ? (
                recentBookings.map((booking: any) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{booking.name}</p>
                      <p className="text-sm text-gray-600">{booking.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{booking.date}</p>
                      <p className="text-sm text-gray-600">{booking.time}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Keine Buchungen vorhanden</p>
                </div>
              )}
            </div>
            <div className="mt-4">
              <a
                href="/admin/bookings"
                className="text-ceramic-terracotta hover:text-ceramic-brown text-sm font-medium"
              >
                Alle Buchungen ansehen →
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Schnellaktionen</h3>
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = '/admin/bookings'}
                className="w-full flex items-center justify-between p-3 bg-ceramic-cream/30 rounded-lg hover:bg-ceramic-cream/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-ceramic-terracotta" />
                  <span className="font-medium text-gray-900">Termine verwalten</span>
                </div>
                <span className="text-sm text-gray-600">→</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/admin/availability'}
                className="w-full flex items-center justify-between p-3 bg-ceramic-cream/30 rounded-lg hover:bg-ceramic-cream/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-ceramic-terracotta" />
                  <span className="font-medium text-gray-900">Verfügbarkeit bearbeiten</span>
                </div>
                <span className="text-sm text-gray-600">→</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/admin/content'}
                className="w-full flex items-center justify-between p-3 bg-ceramic-cream/30 rounded-lg hover:bg-ceramic-cream/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-ceramic-terracotta" />
                  <span className="font-medium text-gray-900">Inhalte bearbeiten</span>
                </div>
                <span className="text-sm text-gray-600">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}