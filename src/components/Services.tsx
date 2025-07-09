import { Coffee, Users, Heart, Gift } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: 'Offenes Atelier',
      description: 'Komm vorbei und bemale deine eigene Keramik. Perfekt für einen entspannten Nachmittag.',
      price: 'Ab 15€',
      duration: '2-3 Stunden',
      features: ['Alle Materialien inklusive', 'Professionelle Anleitung', 'Brennservice inklusive']
    },
    {
      icon: Users,
      title: 'Gruppen-Events',
      description: 'Ideal für Kindergeburtstage, Teambuilding oder Freundinnen-Abende.',
      price: 'Ab 20€ pro Person',
      duration: '2-4 Stunden',
      features: ['Bis zu 12 Personen', 'Private Atmosphäre', 'Getränke & Snacks möglich']
    },
    {
      icon: Heart,
      title: 'Date-Night',
      description: 'Romantischer Abend zu zweit bei Wein und kreativer Arbeit.',
      price: '45€ für 2 Personen',
      duration: '3 Stunden',
      features: ['Wein & Snacks inklusive', 'Romantische Beleuchtung', 'Perfekt für Paare']
    },
    {
      icon: Gift,
      title: 'Workshops',
      description: 'Lerne spezielle Techniken und Designs in unseren geführten Workshops.',
      price: 'Ab 35€',
      duration: '3-4 Stunden',
      features: ['Professionelle Anleitung', 'Spezielle Techniken', 'Kleine Gruppen']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wähle aus verschiedenen Angeboten und finde das perfekte Erlebnis für dich
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="ceramic-card hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-ceramic-terracotta/10 rounded-lg mb-6">
                <service.icon className="h-8 w-8 text-ceramic-terracotta" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-ceramic-brown">
                  {service.price}
                </span>
                <span className="text-sm text-gray-500">
                  {service.duration}
                </span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-ceramic-sage rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full ceramic-button-outline">
                Auswählen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services