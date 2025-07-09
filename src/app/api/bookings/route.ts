import { NextRequest, NextResponse } from 'next/server'
import { createBooking, getBookings } from '@/lib/mockDatabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date, time, service, name, email, phone, participants, specialRequests } = body

    // Validate required fields
    if (!date || !time || !service || !name || !email || !phone || !participants) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const booking = await createBooking({
      date,
      time,
      service,
      name,
      email,
      phone,
      participants,
      specialRequests
    })

    return NextResponse.json({ 
      success: true, 
      booking
    })
  } catch (error) {
    console.error('Error creating booking:', error)
    const errorMessage = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    
    const bookings = await getBookings(email || undefined)
    
    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}