'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Plus, Edit, Trash2, Calendar, Clock, Users, Save, X } from 'lucide-react'
import { format, addDays, startOfWeek } from 'date-fns'
import { de } from 'date-fns/locale'

export default function AdminAvailability() {
  const [availability, setAvailability] = useState([])
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [isEditing, setIsEditing] = useState(false)
  const [editingSlot, setEditingSlot] = useState(null)

  useEffect(() => {
    fetchAvailability()
  }, [])

  const fetchAvailability = async () => {
    try {
      const response = await fetch('/api/availability')
      const data = await response.json()
      setAvailability(data)
    } catch (error) {
      console.error('Error fetching availability:', error)
    }
  }

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ]

  const services = [
    { id: 'open-studio', name: 'Offenes Atelier' },
    { id: 'group-event', name: 'Gruppen-Event' },
    { id: 'date-night', name: 'Date-Night' },
    { id: 'workshop', name: 'Workshop' }
  ]

  const getWeekDays = () => {
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 })
    return Array.from({ length: 7 }, (_, i) => addDays(startDate, i))
  }

  const getAvailabilityForDate = (date: string) => {
    const dateData = availability.find((d: any) => d.date === date)
    return dateData ? dateData.timeSlots : []
  }

  const addTimeSlot = async (date: string, time: string) => {
    const newSlot = {
      id: `${date}-${time}`,
      time,
      available: true,
      maxCapacity: 8,
      currentBookings: 0
    }

    // In a real app, this would be an API call
    const updatedAvailability = availability.map((d: any) => {
      if (d.date === date) {
        return {
          ...d,
          timeSlots: [...d.timeSlots, newSlot].sort((a, b) => a.time.localeCompare(b.time))
        }
      }
      return d
    })

    // If date doesn't exist, create it
    if (!availability.find((d: any) => d.date === date)) {
      updatedAvailability.push({
        date,
        timeSlots: [newSlot]
      })
    }

    setAvailability(updatedAvailability)
  }

  const removeTimeSlot = async (date: string, slotId: string) => {
    const updatedAvailability = availability.map((d: any) => {
      if (d.date === date) {
        return {
          ...d,
          timeSlots: d.timeSlots.filter((slot: any) => slot.id !== slotId)
        }
      }
      return d
    })

    setAvailability(updatedAvailability)
  }

  const updateTimeSlot = async (date: string, slotId: string, updates: any) => {
    const updatedAvailability = availability.map((d: any) => {
      if (d.date === date) {
        return {
          ...d,
          timeSlots: d.timeSlots.map((slot: any) => 
            slot.id === slotId ? { ...slot, ...updates } : slot
          )
        }
      }
      return d
    })

    setAvailability(updatedAvailability)
  }

  const generateWeeklySlots = () => {
    const weekDays = getWeekDays()
    const defaultTimes = ['10:00', '14:00', '18:00']
    
    weekDays.forEach(day => {
      const dateStr = format(day, 'yyyy-MM-dd')
      const existingSlots = getAvailabilityForDate(dateStr)
      
      defaultTimes.forEach(time => {
        const slotExists = existingSlots.find((slot: any) => slot.time === time)
        if (!slotExists) {
          addTimeSlot(dateStr, time)
        }
      })
    })
  }

  return (
    <AdminLayout title="Verfügbarkeit verwalten">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Verfügbarkeit bearbeiten</h3>
              <p className="text-sm text-gray-600">
                Verwalte die verfügbaren Termine für dein Atelier
              </p>
            </div>
            <button
              onClick={generateWeeklySlots}
              className="ceramic-button flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Woche generieren</span>
            </button>
          </div>
        </div>

        {/* Calendar View */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Wochenansicht</h3>
            <p className="text-sm text-gray-600">
              {format(getWeekDays()[0], 'dd. MMMM', { locale: de })} - {format(getWeekDays()[6], 'dd. MMMM yyyy', { locale: de })}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Zeit
                  </th>
                  {getWeekDays().map(day => (
                    <th key={day.toISOString()} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div>
                        <div>{format(day, 'EEE', { locale: de })}</div>
                        <div className="font-normal">{format(day, 'dd.MM')}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timeSlots.map(time => (
                  <tr key={time}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {time}
                    </td>
                    {getWeekDays().map(day => {
                      const dateStr = format(day, 'yyyy-MM-dd')
                      const daySlots = getAvailabilityForDate(dateStr)
                      const slot = daySlots.find((s: any) => s.time === time)
                      
                      return (
                        <td key={`${dateStr}-${time}`} className="px-6 py-4 whitespace-nowrap">
                          {slot ? (
                            <div className="flex items-center space-x-2">
                              <div className={`px-2 py-1 rounded text-xs font-medium ${
                                slot.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {slot.available ? 'Verfügbar' : 'Belegt'}
                              </div>
                              <div className="text-xs text-gray-600">
                                {slot.currentBookings}/{slot.maxCapacity}
                              </div>
                              <button
                                onClick={() => setEditingSlot({ date: dateStr, slot })}
                                className="text-ceramic-terracotta hover:text-ceramic-brown"
                              >
                                <Edit className="h-3 w-3" />
                              </button>
                              <button
                                onClick={() => removeTimeSlot(dateStr, slot.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addTimeSlot(dateStr, time)}
                              className="text-ceramic-terracotta hover:text-ceramic-brown"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal */}
        {editingSlot && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Zeitslot bearbeiten
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Datum
                    </label>
                    <input
                      type="text"
                      value={format(new Date(editingSlot.date), 'dd. MMMM yyyy', { locale: de })}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zeit
                    </label>
                    <input
                      type="text"
                      value={editingSlot.slot.time}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max. Kapazität
                    </label>
                    <input
                      type="number"
                      value={editingSlot.slot.maxCapacity}
                      onChange={(e) => setEditingSlot({
                        ...editingSlot,
                        slot: { ...editingSlot.slot, maxCapacity: parseInt(e.target.value) }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingSlot.slot.available}
                        onChange={(e) => setEditingSlot({
                          ...editingSlot,
                          slot: { ...editingSlot.slot, available: e.target.checked }
                        })}
                        className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                      />
                      <span className="text-sm text-gray-700">Verfügbar</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setEditingSlot(null)}
                    className="ceramic-button-outline flex items-center space-x-1"
                  >
                    <X className="h-4 w-4" />
                    <span>Abbrechen</span>
                  </button>
                  <button
                    onClick={() => {
                      updateTimeSlot(editingSlot.date, editingSlot.slot.id, {
                        maxCapacity: editingSlot.slot.maxCapacity,
                        available: editingSlot.slot.available
                      })
                      setEditingSlot(null)
                    }}
                    className="ceramic-button flex items-center space-x-1"
                  >
                    <Save className="h-4 w-4" />
                    <span>Speichern</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}