'use client'

import { useContent } from '@/lib/contentContext'

const Testimonials = () => {
  const { content } = useContent()

  const fallbackTestimonials = [
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
  ]

  const testimonials = content?.testimonials || fallbackTestimonials

  const generateStars = (rating: number) => {
    return "⭐".repeat(rating)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Was unsere Kunden sagen
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-small hover:shadow-medium transition-all duration-300">
              <div className="text-2xl mb-4">
                {generateStars(testimonial.rating)}
              </div>
              <p className="text-text-secondary mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-light">
                  {testimonial.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials