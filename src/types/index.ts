export interface TimeSlot {
  id: string
  time: string
  available: boolean
  maxCapacity: number
  currentBookings: number
}

export interface AvailableDate {
  date: string
  timeSlots: TimeSlot[]
}

export interface Booking {
  id: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  participants: number
  specialRequests?: string
  createdAt: string
  status: 'pending' | 'confirmed' | 'cancelled'
}

export interface Service {
  id: string
  name: string
  description: string
  duration: number
  price: number
  maxParticipants: number
}