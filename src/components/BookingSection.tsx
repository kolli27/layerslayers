'use client'

import { useState } from 'react'
import BookingCalendar from './BookingCalendar'
import BookingForm from './BookingForm'
import { Calendar, Clock, Users } from 'lucide-react'

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>('open-studio')

  const services = [
    { id: 'open-studio', name: 'Offenes Atelier', duration: '2-3h', price: 'Ab 15€' },
    { id: 'group-event', name: 'Gruppen-Event', duration: '2-4h', price: 'Ab 20€/Person' },
    { id: 'date-night', name: 'Date-Night', duration: '3h', price: '45€ für 2' },
    { id: 'workshop', name: 'Workshop', duration: '3-4h', price: 'Ab 35€' }
  ]

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Termin buchen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wähle deinen bevorzugten Service und buche deinen Termin ganz einfach online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Service Selection */}
          <div className="ceramic-card">
            <div className="flex items-center space-x-2 mb-6">
              <Users className="h-6 w-6 text-ceramic-terracotta" />
              <h3 className="text-xl font-semibold text-gray-900">1. Service wählen</h3>
            </div>
            
            <div className="space-y-3">
              {services.map((service) => (
                <label
                  key={service.id}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    selectedService === service.id
                      ? 'border-ceramic-terracotta bg-ceramic-terracotta/5'
                      : 'border-gray-200 hover:border-ceramic-terracotta/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="service"
                    value={service.id}
                    checked={selectedService === service.id}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.duration}</div>
                    </div>
                    <div className="text-ceramic-brown font-semibold">{service.price}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="ceramic-card">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="h-6 w-6 text-ceramic-terracotta" />
              <h3 className="text-xl font-semibold text-gray-900">2. Datum wählen</h3>
            </div>
            
            <BookingCalendar
              selectedDate={selectedDate}
              selectedService={selectedService}
              onDateSelect={handleDateSelect}
              onTimeSelect={handleTimeSelect}
            />
          </div>

          {/* Booking Form */}
          <div className="ceramic-card">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-ceramic-terracotta" />
              <h3 className="text-xl font-semibold text-gray-900">3. Buchung abschließen</h3>
            </div>
            
            <BookingForm
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedService={selectedService}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection