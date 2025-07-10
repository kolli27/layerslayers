
'use client'

import { useContent } from '@/lib/contentContext'

const Services = () => {
  const { content } = useContent()

  // Fallback services data
  const fallbackServices = [
    {
      id: "1",
      icon: "🎨",
      title: 'Offenes Atelier',
      description: 'Komm spontan vorbei und bemale Keramik in entspannter Atmosphäre. Perfekt für einen kreativen Nachmittag.',
      price: 'ab 15€',
      features: ['Keine Voranmeldung nötig', 'Alle Materialien inklusive', 'Professioneller Brand', 'Abholung nach 1 Woche'],
      cta: 'Platz buchen',
      featured: false
    },
    {
      id: "2",
      icon: "👥",
      title: 'Gruppenevents',
      description: 'Private Events für Teams, Geburtstage, JGA oder Familienfeiern. Unvergessliche Erlebnisse garantiert!',
      price: 'ab 25€/Person',
      features: ['Exklusive Nutzung des Studios', 'Persönliche Betreuung', 'Catering möglich', 'Flexible Termine'],
      cta: 'Event planen',
      featured: true,
      badge: 'Beliebt'
    },
    {
      id: "3",
      icon: "🏠",
      title: 'Keramik@Home',
      description: 'Nimm Keramik mit nach Hause, bemale sie in Ruhe und bringe sie zum professionellen Brennen zurück.',
      price: 'ab 12€',
      features: ['Flexible Gestaltung zu Hause', 'Farben & Pinsel inklusive', 'Professioneller Brand', 'Perfekt für Familien'],
      cta: 'Mehr erfahren',
      featured: false
    }
  ]

  const services = content?.services || fallbackServices

  return (
    <section id="services" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Unsere Angebote
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Für jeden das passende Erlebnis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl shadow-small hover:shadow-medium transition-all duration-300 overflow-hidden relative ${
                service.featured ? 'border-2 border-primary transform scale-105' : 'hover:-translate-y-1'
              }`}
            >
              {service.badge && (
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.badge}
                </div>
              )}
              
              <div className="p-8 text-center bg-background-light">
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-2xl font-bold text-primary">
                  {service.price}
                </p>
              </div>
              
              <div className="p-6">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-text-secondary">
                      <span className="text-primary font-bold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services