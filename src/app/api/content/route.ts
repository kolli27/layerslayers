import { NextRequest, NextResponse } from 'next/server'
import { 
  getWebsiteContent, 
  updateWebsiteContent, 
  updateHeroContent, 
  updateAboutContent, 
  updateServicesContent, 
  updateContactContent,
  updateTestimonialsContent,
  updateProcessContent
} from '@/lib/mockDatabase'

export async function GET(request: NextRequest) {
  try {
    const content = await getWebsiteContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error fetching website content:', error)
    return NextResponse.json(
      { error: 'Failed to fetch website content' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { section, data } = body

    let updatedContent

    switch (section) {
      case 'hero':
        updatedContent = await updateHeroContent(data)
        break
      case 'about':
        updatedContent = await updateAboutContent(data)
        break
      case 'services':
        updatedContent = await updateServicesContent(data)
        break
      case 'contact':
        updatedContent = await updateContactContent(data)
        break
      case 'testimonials':
        updatedContent = await updateTestimonialsContent(data)
        break
      case 'process':
        updatedContent = await updateProcessContent(data)
        break
      case 'all':
        updatedContent = await updateWebsiteContent(data)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid section specified' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      success: true,
      message: `${section} content updated successfully`,
      data: updatedContent
    })
  } catch (error) {
    console.error('Error updating website content:', error)
    return NextResponse.json(
      { error: 'Failed to update website content' },
      { status: 500 }
    )
  }
}