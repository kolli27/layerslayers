'use client'

import { useState } from 'react'
import { X, Calendar, ChevronRight } from 'lucide-react'
import BookingCalendar from './BookingCalendar'
import BookingForm from './BookingForm'

const FloatingBookingWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>('open-studio')
  const [step, setStep] = useState<'service' | 'calendar' | 'form'>('service')

  const services = [
    { id: 'open-studio', name: 'Offenes Atelier', duration: '2-3h', price: 'Ab 15€' },
    { id: 'group-event', name: 'Gruppen-Event', duration: '2-4h', price: 'Ab 20€/Person' },
    { id: 'date-night', name: 'Date-Night', duration: '3h', price: '45€ für 2' },
    { id: 'workshop', name: 'Workshop', duration: '3-4h', price: 'Ab 35€' }
  ]

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedTime(null)
    setStep('calendar')
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep('form')
  }

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep('calendar')
  }

  const resetWidget = () => {
    setStep('service')
    setSelectedDate(null)
    setSelectedTime(null)
    setSelectedService('open-studio')
  }

  const closeWidget = () => {
    setIsOpen(false)
    setTimeout(() => resetWidget(), 300)
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 text-sm sm:text-base"
        >
          <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Termin buchen</span>
          <span className="sm:hidden">Buchen</span>
        </button>
      </div>

      {/* Widget Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-cream-light rounded-2xl shadow-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-cta text-ui-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Schnell buchen</h2>
              <button
                onClick={closeWidget}
                className="p-1 hover:bg-black/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 max-h-[85vh] sm:max-h-[80vh] overflow-y-auto">
              {step === 'service' && (
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Service wählen</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className="ceramic-card hover-lift text-left group"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-text-primary group-hover:text-clay-primary transition-colors">{service.name}</h4>
                            <p className="text-sm text-text-muted">{service.duration}</p>
                          </div>
                          <div className="text-clay-primary font-semibold text-sm">
                            {service.price}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-clay-primary mt-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 'calendar' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-text-primary">Datum & Zeit wählen</h3>
                    <button
                      onClick={() => setStep('service')}
                      className="text-clay-primary hover:text-clay-dark text-sm font-medium"
                    >
                      Service ändern
                    </button>
                  </div>
                  
                  <div className="bg-cream-base rounded-lg p-3 mb-4">
                    <p className="text-sm text-text-secondary">
                      <strong>Gewählt:</strong> {services.find(s => s.id === selectedService)?.name}
                    </p>
                  </div>

                  <BookingCalendar
                    selectedDate={selectedDate}
                    selectedService={selectedService}
                    onDateSelect={handleDateSelect}
                    onTimeSelect={handleTimeSelect}
                  />
                </div>
              )}

              {step === 'form' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-text-primary">Buchung abschließen</h3>
                    <button
                      onClick={() => setStep('calendar')}
                      className="text-clay-primary hover:text-clay-dark text-sm font-medium"
                    >
                      Zeit ändern
                    </button>
                  </div>

                  <BookingForm
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    selectedService={selectedService}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingBookingWidget