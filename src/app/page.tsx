import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProcessSteps from '@/components/ProcessSteps'
import Services from '@/components/Services'
import QuickActions from '@/components/QuickActions'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import About from '@/components/About'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProcessSteps />
      <Services />
      <QuickActions />
      <Testimonials />
      <CTA />
      <About />
      <BookingSection />
      <Footer />
    </main>
  )
}