'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import { Check, Mail, Phone, User, Users, MessageSquare } from 'lucide-react'

interface BookingFormProps {
  selectedDate: string | null
  selectedTime: string | null
  selectedService: string
}

const BookingForm = ({ selectedDate, selectedTime, selectedService }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1,
    specialRequests: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceNames = {
    'open-studio': 'Offenes Atelier',
    'group-event': 'Gruppen-Event',
    'date-night': 'Date-Night',
    'workshop': 'Workshop'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          service: selectedService,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          participants: formData.participants,
          specialRequests: formData.specialRequests
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset form after success
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            participants: 1,
            specialRequests: ''
          })
        }, 3000)
      } else {
        const error = await response.json()
        alert(`Booking failed: ${error.error}`)
      }
    } catch (error) {
      console.error('Error creating booking:', error)
      alert('Booking failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.phone && selectedDate && selectedTime

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-ceramic-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-ceramic-sage" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Buchung erfolgreich!</h3>
        <p className="text-gray-600">
          Wir haben deine Buchung erhalten und senden dir in Kürze eine Bestätigung per E-Mail.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Booking Summary */}
      {(selectedDate || selectedTime) && (
        <div className="bg-ceramic-cream/30 rounded-lg p-4 space-y-2">
          <h4 className="font-semibold text-gray-900">Deine Auswahl:</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Service:</strong> {serviceNames[selectedService as keyof typeof serviceNames]}</p>
            {selectedDate && (
              <p><strong>Datum:</strong> {format(new Date(selectedDate), 'dd. MMMM yyyy', { locale: de })}</p>
            )}
            {selectedTime && (
              <p><strong>Uhrzeit:</strong> {selectedTime}</p>
            )}
          </div>
        </div>
      )}

      {/* Personal Information */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta focus:border-transparent"
            placeholder="Dein vollständiger Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline h-4 w-4 mr-1" />
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta focus:border-transparent"
            placeholder="deine@email.de"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline h-4 w-4 mr-1" />
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta focus:border-transparent"
            placeholder="0221 12345678"
            required
          />
        </div>

        <div>
          <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="inline h-4 w-4 mr-1" />
            Anzahl Personen
          </label>
          <select
            id="participants"
            name="participants"
            value={formData.participants}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta focus:border-transparent text-base"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num} Person{num > 1 ? 'en' : ''}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="inline h-4 w-4 mr-1" />
            Besondere Wünsche
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta focus:border-transparent"
            placeholder="Allergien, besondere Wünsche, etc."
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          isFormValid && !isSubmitting
            ? 'bg-ceramic-terracotta hover:bg-ceramic-brown text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? 'Wird gebucht...' : 'Jetzt buchen'}
      </button>

      {/* Info Text */}
      <p className="text-xs text-gray-600 text-center">
        Mit der Buchung stimmst du unseren AGB zu. Du erhältst eine Bestätigung per E-Mail.
      </p>
    </form>
  )
}

export default BookingForm