import { addDays, format } from 'date-fns'
import type { AvailableDate, Booking } from '@/types'

// Mock data storage
let bookings: Booking[] = []
let availableDates: AvailableDate[] = []

// Initialize mock data
const initializeMockData = () => {
  availableDates = [
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
    },
    {
      date: format(addDays(new Date(), 7), 'yyyy-MM-dd'),
      timeSlots: [
        { id: '7', time: '10:00', available: true, maxCapacity: 8, currentBookings: 1 },
        { id: '8', time: '14:00', available: true, maxCapacity: 8, currentBookings: 3 },
        { id: '9', time: '18:00', available: true, maxCapacity: 6, currentBookings: 2 }
      ]
    },
    {
      date: format(addDays(new Date(), 14), 'yyyy-MM-dd'),
      timeSlots: [
        { id: '10', time: '10:00', available: true, maxCapacity: 8, currentBookings: 0 },
        { id: '11', time: '14:00', available: true, maxCapacity: 8, currentBookings: 2 },
        { id: '12', time: '18:00', available: true, maxCapacity: 6, currentBookings: 1 }
      ]
    },
    {
      date: format(addDays(new Date(), 21), 'yyyy-MM-dd'),
      timeSlots: [
        { id: '13', time: '10:00', available: true, maxCapacity: 8, currentBookings: 4 },
        { id: '14', time: '14:00', available: true, maxCapacity: 8, currentBookings: 1 },
        { id: '15', time: '18:00', available: true, maxCapacity: 6, currentBookings: 0 }
      ]
    },
    {
      date: format(addDays(new Date(), 28), 'yyyy-MM-dd'),
      timeSlots: [
        { id: '16', time: '10:00', available: true, maxCapacity: 8, currentBookings: 2 },
        { id: '17', time: '14:00', available: true, maxCapacity: 8, currentBookings: 1 },
        { id: '18', time: '18:00', available: true, maxCapacity: 6, currentBookings: 0 }
      ]
    }
  ]
}

// Initialize data
initializeMockData()

export const getAvailability = async (service: string, startDate: string, endDate: string) => {
  return availableDates.filter(date => date.date >= startDate && date.date <= endDate)
}

export const createBooking = async (bookingData: {
  date: string
  time: string
  service: string
  name: string
  email: string
  phone: string
  participants: number
  specialRequests?: string
}) => {
  // Find the availability slot
  const dateAvailability = availableDates.find(d => d.date === bookingData.date)
  const timeSlot = dateAvailability?.timeSlots.find(t => t.time === bookingData.time)
  
  if (!timeSlot) {
    throw new Error('Time slot not found')
  }
  
  if (!timeSlot.available) {
    throw new Error('Time slot not available')
  }
  
  const availableSpots = timeSlot.maxCapacity - timeSlot.currentBookings
  if (availableSpots < bookingData.participants) {
    throw new Error(`Not enough spots available. Only ${availableSpots} spots left.`)
  }
  
  // Create booking
  const booking: Booking = {
    id: `booking-${Date.now()}`,
    date: bookingData.date,
    time: bookingData.time,
    name: bookingData.name,
    email: bookingData.email,
    phone: bookingData.phone,
    participants: bookingData.participants,
    specialRequests: bookingData.specialRequests,
    createdAt: new Date().toISOString(),
    status: 'pending'
  }
  
  bookings.push(booking)
  
  // Update availability
  timeSlot.currentBookings += bookingData.participants
  if (timeSlot.currentBookings >= timeSlot.maxCapacity) {
    timeSlot.available = false
  }
  
  return booking
}

export const getBookings = async (email?: string) => {
  if (email) {
    return bookings.filter(b => b.email === email && b.status !== 'cancelled')
  }
  return bookings.filter(b => b.status !== 'cancelled')
}