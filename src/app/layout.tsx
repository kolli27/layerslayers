import type { Metadata } from 'next'
import './globals.css'
import FloatingBookingWidget from '@/components/FloatingBookingWidget'
import { ContentProvider } from '@/lib/contentContext'

export const metadata: Metadata = {
  title: 'LAYERS - Keramik Atelier Köln',
  description: 'Kreatives Keramik-Atelier in Köln. Bemale deine eigene Keramik in entspannter Atmosphäre.',
  keywords: 'Keramik, Köln, Atelier, Keramik bemalen, Kreativ, Workshop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        <ContentProvider>
          {children}
          <FloatingBookingWidget />
        </ContentProvider>
      </body>
    </html>
  )
}