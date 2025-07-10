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

// Content Management Types
export interface ContentSection {
  id: string
  type: 'hero' | 'about' | 'services' | 'contact' | 'testimonials' | 'process'
  data: any
  lastModified: string
}

export interface HeroContent {
  title: string
  subtitle: string
  description: string
  primaryButton: string
  secondaryButton: string
  heroImage?: string
}

export interface AboutContent {
  title: string
  description: string
  features: string[]
  stats: {
    label: string
    value: string
    icon: string
  }[]
}

export interface ServiceContent {
  id: string
  icon: string
  title: string
  description: string
  price: string
  features: string[]
  cta: string
  featured: boolean
  badge?: string
}

export interface ContactContent {
  address: string
  phone: string
  email: string
  openingHours: {
    day: string
    hours: string
  }[]
}

export interface TestimonialContent {
  id: string
  rating: number
  text: string
  author: string
  source: string
  featured: boolean
}

export interface ProcessStepContent {
  id: string
  number: number
  title: string
  description: string
  icon?: string
}

export interface WebsiteContent {
  hero: HeroContent
  about: AboutContent
  services: ServiceContent[]
  contact: ContactContent
  testimonials: TestimonialContent[]
  process: ProcessStepContent[]
}