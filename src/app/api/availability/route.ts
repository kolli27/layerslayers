import { NextRequest, NextResponse } from 'next/server'
import { getAvailability } from '@/lib/mockDatabase'
import { addDays, format } from 'date-fns'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const service = searchParams.get('service') || 'open-studio'
    const startDate = searchParams.get('startDate') || format(new Date(), 'yyyy-MM-dd')
    const endDate = searchParams.get('endDate') || format(addDays(new Date(), 60), 'yyyy-MM-dd')

    const availability = await getAvailability(service, startDate, endDate)
    
    return NextResponse.json(availability)
  } catch (error) {
    console.error('Error fetching availability:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}