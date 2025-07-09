'use client'

import { useState, useEffect } from 'react'
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isAfter, isBefore } from 'date-fns'
import { de } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import type { AvailableDate, TimeSlot } from '@/types'

interface BookingCalendarProps {
  selectedDate: string | null
  selectedService: string
  onDateSelect: (date: string) => void
  onTimeSelect: (time: string) => void
}

const BookingCalendar = ({ selectedDate, selectedService, onDateSelect, onTimeSelect }: BookingCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([])
  const [selectedDateTimeSlots, setSelectedDateTimeSlots] = useState<TimeSlot[]>([])

  const fetchAvailability = async () => {
    try {
      const startDate = format(currentMonth, 'yyyy-MM-dd')
      const endDate = format(addDays(currentMonth, 60), 'yyyy-MM-dd')
      
      const response = await fetch(
        `/api/availability?service=${selectedService}&startDate=${startDate}&endDate=${endDate}`
      )
      
      if (response.ok) {
        const data = await response.json()
        setAvailableDates(data)
      }
    } catch (error) {
      console.error('Error fetching availability:', error)
      // Fallback to mock data
      const mockData: AvailableDate[] = [
        {
          date: format(addDays(new Date(), 3), 'yyyy-MM-dd'),
          timeSlots: [
            { id: '1', time: '10:00', available: true, maxCapacity: 8, currentBookings: 2 },
            { id: '2', time: '14:00', available: true, maxCapacity: 8, currentBookings: 5 },
            { id: '3', time: '18:00', available: true, maxCapacity: 6, currentBookings: 1 }
          ]
        },
        {
          date: format(addDays(new Date(), 5), 'yyyy-MM-dd'),
          timeSlots: [
            { id: '4', time: '10:00', available: true, maxCapacity: 8, currentBookings: 0 },
            { id: '5', time: '14:00', available: false, maxCapacity: 8, currentBookings: 8 },
            { id: '6', time: '18:00', available: true, maxCapacity: 6, currentBookings: 3 }
          ]
        }
      ]
      setAvailableDates(mockData)
    }
  }

  useEffect(() => {
    fetchAvailability()
  }, [selectedService, currentMonth])

  useEffect(() => {
    if (selectedDate) {
      const dateSlots = availableDates.find(d => d.date === selectedDate)?.timeSlots || []
      setSelectedDateTimeSlots(dateSlots)
    } else {
      setSelectedDateTimeSlots([])
    }
  }, [selectedDate, availableDates])

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const isDateAvailable = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd')
    return availableDates.some(d => d.date === dateString && d.timeSlots.some(slot => slot.available))
  }

  const isDateToday = (date: Date) => {
    return isSameDay(date, new Date())
  }

  const isDatePast = (date: Date) => {
    return isBefore(date, new Date()) && !isDateToday(date)
  }

  const getAvailableSlotsCount = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd')
    const dateData = availableDates.find(d => d.date === dateString)
    return dateData ? dateData.timeSlots.filter(slot => slot.available).length : 0
  }

  const handleDateClick = (date: Date) => {
    if (isDatePast(date) || !isDateAvailable(date)) return
    
    const dateString = format(date, 'yyyy-MM-dd')
    onDateSelect(dateString)
  }

  const handleTimeClick = (time: string) => {
    onTimeSelect(time)
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))
  }

  const getNextAvailableDate = () => {
    const sortedDates = availableDates
      .filter(d => d.timeSlots.some(slot => slot.available))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    
    return sortedDates[0] ? new Date(sortedDates[0].date) : null
  }

  const nextAvailableDate = getNextAvailableDate()

  return (
    <div className="space-y-6">
      {/* Quick Info */}
      {nextAvailableDate && (
        <div className="bg-ceramic-terracotta/10 rounded-lg p-4">
          <p className="text-sm text-ceramic-brown font-medium">
            <Clock className="inline h-4 w-4 mr-1" />
            Nächster verfügbarer Termin: {format(nextAvailableDate, 'dd. MMMM yyyy', { locale: de })}
          </p>
        </div>
      )}

      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPreviousMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <h3 className="text-lg font-semibold text-gray-900">
          {format(currentMonth, 'MMMM yyyy', { locale: de })}
        </h3>
        
        <button
          onClick={goToNextMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
          <div key={day} className="p-2 text-gray-500 font-medium">
            {day}
          </div>
        ))}
        
        {monthDays.map(date => {
          const dateString = format(date, 'yyyy-MM-dd')
          const isAvailable = isDateAvailable(date)
          const isPast = isDatePast(date)
          const isSelected = selectedDate === dateString
          const availableSlots = getAvailableSlotsCount(date)

          return (
            <button
              key={dateString}
              onClick={() => handleDateClick(date)}
              disabled={isPast || !isAvailable}
              className={`
                p-2 rounded-lg text-sm font-medium transition-colors relative
                ${isSelected 
                  ? 'bg-ceramic-terracotta text-white' 
                  : isAvailable 
                  ? 'bg-ceramic-sage/20 text-ceramic-brown hover:bg-ceramic-sage/30' 
                  : isPast 
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-400 cursor-not-allowed'
                }
              `}
            >
              {format(date, 'd')}
              {isAvailable && availableSlots > 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-ceramic-terracotta rounded-full text-white text-xs flex items-center justify-center">
                  {availableSlots}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && selectedDateTimeSlots.length > 0 && (
        <div className="border-t pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Verfügbare Zeiten für {format(new Date(selectedDate), 'dd. MMMM yyyy', { locale: de })}
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedDateTimeSlots.map(slot => (
              <button
                key={slot.id}
                onClick={() => handleTimeClick(slot.time)}
                disabled={!slot.available}
                className={`
                  p-3 rounded-lg border-2 transition-colors text-left
                  ${slot.available
                    ? 'border-ceramic-terracotta/30 hover:border-ceramic-terracotta hover:bg-ceramic-terracotta/5'
                    : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                  }
                `}
              >
                <div className="font-semibold text-gray-900">{slot.time}</div>
                <div className="text-sm text-gray-600">
                  {slot.available 
                    ? `${slot.maxCapacity - slot.currentBookings} Plätze frei`
                    : 'Ausgebucht'
                  }
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingCalendar