import { addDays, format } from 'date-fns'
import type { AvailableDate, Booking, WebsiteContent, HeroContent, AboutContent, ServiceContent, ContactContent, TestimonialContent, ProcessStepContent } from '@/types'

// Mock data storage
let bookings: Booking[] = []
let availableDates: AvailableDate[] = []
let websiteContent: WebsiteContent

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

// Initialize website content
const initializeWebsiteContent = () => {
  websiteContent = {
    hero: {
      title: "Eure kreativen Ideen",
      subtitle: "zum Leben",
      description: "Bei layers tauchst du in die kreative Welt des Keramikbemalens ein und schaffst alltagstaugliche Unikate, die entspannte Atmosphäre in unserem Malstudio lädt dazu ein, deiner Kreativität freien Lauf zu lassen - egal, ob du noch nie einen Pinsel in der Hand hattest oder bereits Erfahrung hast. Lass dich inspirieren und gestalte Keramik, die so individuell ist wie du.",
      primaryButton: "Ich bin dabei!",
      secondaryButton: "Gutschein kaufen",
      heroImage: "/images/hero-ceramics.jpg"
    },
    about: {
      title: "Über unser Atelier",
      description: "LAYERS ist mehr als nur ein Keramik-Atelier - es ist ein Ort der Kreativität und Entspannung im Herzen von Köln. Hier kannst du deiner Fantasie freien Lauf lassen und einzigartige Keramikstücke gestalten.",
      features: [
        "Hochwertige Materialien",
        "Persönliche Betreuung",
        "Entspannte Atmosphäre",
        "Professioneller Brennservice",
        "Kreative Workshops",
        "Flexible Termine"
      ],
      stats: [
        { label: "Zufriedene Kunden", value: "500+", icon: "👥" },
        { label: "Auszeichnungen", value: "3", icon: "🏆" },
        { label: "Jahre Erfahrung", value: "5", icon: "⏰" },
        { label: "Standorte", value: "1", icon: "📍" }
      ]
    },
    services: [
      {
        id: "1",
        icon: "🎨",
        title: "Offenes Atelier",
        description: "Komm spontan vorbei und bemale Keramik in entspannter Atmosphäre. Perfekt für einen kreativen Nachmittag.",
        price: "ab 15€",
        features: ["Keine Voranmeldung nötig", "Alle Materialien inklusive", "Professioneller Brand", "Abholung nach 1 Woche"],
        cta: "Platz buchen",
        featured: false
      },
      {
        id: "2",
        icon: "👥",
        title: "Gruppenevents",
        description: "Private Events für Teams, Geburtstage, JGA oder Familienfeiern. Unvergessliche Erlebnisse garantiert!",
        price: "ab 25€/Person",
        features: ["Exklusive Nutzung des Studios", "Persönliche Betreuung", "Catering möglich", "Flexible Termine"],
        cta: "Event planen",
        featured: true,
        badge: "Beliebt"
      },
      {
        id: "3",
        icon: "🏠",
        title: "Keramik@Home",
        description: "Nimm Keramik mit nach Hause, bemale sie in Ruhe und bringe sie zum professionellen Brennen zurück.",
        price: "ab 12€",
        features: ["Flexible Gestaltung zu Hause", "Farben & Pinsel inklusive", "Professioneller Brand", "Perfekt für Familien"],
        cta: "Mehr erfahren",
        featured: false
      }
    ],
    contact: {
      address: "Musterstraße 123, 50667 Köln",
      phone: "0221 123 456 78",
      email: "info@layers-koeln.de",
      openingHours: [
        { day: "Montag", hours: "Geschlossen" },
        { day: "Dienstag", hours: "14:00 - 20:00" },
        { day: "Mittwoch", hours: "14:00 - 20:00" },
        { day: "Donnerstag", hours: "14:00 - 20:00" },
        { day: "Freitag", hours: "14:00 - 20:00" },
        { day: "Samstag", hours: "10:00 - 18:00" },
        { day: "Sonntag", hours: "10:00 - 18:00" }
      ]
    },
    testimonials: [
      {
        id: "1",
        rating: 5,
        text: "Wunderschönes Studio mit super freundlichem Personal. Perfekt für einen entspannten Nachmittag mit Freunden!",
        author: "Sarah M.",
        source: "Google Bewertung",
        featured: true
      },
      {
        id: "2",
        rating: 5,
        text: "Unser Teamevent war ein voller Erfolg! Tolle Atmosphäre und professionelle Betreuung. Sehr empfehlenswert!",
        author: "Michael K.",
        source: "Google Bewertung",
        featured: true
      },
      {
        id: "3",
        rating: 5,
        text: "Die Keramik@Home Option ist genial! Kann in Ruhe zu Hause gestalten und bekommt trotzdem professionelle Ergebnisse.",
        author: "Anna L.",
        source: "Google Bewertung",
        featured: true
      }
    ],
    process: [
      {
        id: "1",
        number: 1,
        title: "Platz reservieren",
        description: "Sichere dir online deinen Platz und plane deine kreative Zeit bei uns.",
        icon: "📅"
      },
      {
        id: "2",
        number: 2,
        title: "Ankommen & Einführung",
        description: "Lass dich von unserem Team begrüßen und in entspannter Atmosphäre",
        icon: "👋"
      },
      {
        id: "3",
        number: 3,
        title: "Bemalen",
        description: "Gestalte dein Unikat in entspannter Atmosphäre und kreiere dein individuelles Handwerk.",
        icon: "🎨"
      },
      {
        id: "4",
        number: 4,
        title: "Glasurbrand & Abholung",
        description: "In zweiwöchigem Turnus wird dein Werk gebrannt und du kannst es voller Stolz mitnehmen.",
        icon: "🔥"
      }
    ]
  }
}

// Initialize data
initializeMockData()
initializeWebsiteContent()

export const getAvailability = async (service: string, startDate: string, endDate: string) => {
  // service parameter is available for future filtering by service type
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

// Content Management Functions
export const getWebsiteContent = async () => {
  return websiteContent
}

export const updateWebsiteContent = async (content: Partial<WebsiteContent>) => {
  websiteContent = { ...websiteContent, ...content }
  return websiteContent
}

export const updateHeroContent = async (heroData: Partial<HeroContent>) => {
  websiteContent.hero = { ...websiteContent.hero, ...heroData }
  return websiteContent.hero
}

export const updateAboutContent = async (aboutData: Partial<AboutContent>) => {
  websiteContent.about = { ...websiteContent.about, ...aboutData }
  return websiteContent.about
}

export const updateServicesContent = async (services: ServiceContent[]) => {
  websiteContent.services = services
  return websiteContent.services
}

export const updateContactContent = async (contactData: Partial<ContactContent>) => {
  websiteContent.contact = { ...websiteContent.contact, ...contactData }
  return websiteContent.contact
}

export const updateTestimonialsContent = async (testimonials: TestimonialContent[]) => {
  websiteContent.testimonials = testimonials
  return websiteContent.testimonials
}

export const updateProcessContent = async (process: ProcessStepContent[]) => {
  websiteContent.process = process
  return websiteContent.process
}