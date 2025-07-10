import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Euro, Palette, Coffee, Users, Star, ArrowRight } from 'lucide-react'

export default function SortimentUndPreisePage() {
  const categories = [
    {
      name: "Tassen & Becher",
      items: [
        { name: "Kaffeetasse", price: "12€", description: "Klassische Kaffeetasse, 200ml" },
        { name: "Große Tasse", price: "15€", description: "Jumbo-Tasse, 350ml" },
        { name: "Becher", price: "14€", description: "Gerader Becher, 250ml" },
        { name: "Latte Macchiato Glas", price: "18€", description: "Hoher Becher, 300ml" },
      ]
    },
    {
      name: "Teller & Schalen",
      items: [
        { name: "Dessertteller", price: "16€", description: "Kleiner Teller, Ø 20cm" },
        { name: "Speiseteller", price: "22€", description: "Großer Teller, Ø 26cm" },
        { name: "Schale klein", price: "14€", description: "Müslischale, Ø 14cm" },
        { name: "Schale groß", price: "20€", description: "Salatschale, Ø 22cm" },
      ]
    },
    {
      name: "Dekorative Objekte",
      items: [
        { name: "Windlicht", price: "18€", description: "Für Teelichter, verschiedene Formen" },
        { name: "Vase klein", price: "20€", description: "Höhe 15cm, verschiedene Formen" },
        { name: "Vase groß", price: "35€", description: "Höhe 25cm, verschiedene Formen" },
        { name: "Spardose", price: "25€", description: "Verschiedene Tiermotive" },
      ]
    },
    {
      name: "Kinder-Sortiment",
      items: [
        { name: "Kindertasse", price: "10€", description: "Kleine Tasse mit Henkeln" },
        { name: "Kinderteller", price: "12€", description: "Flacher Teller, Ø 18cm" },
        { name: "Tierfiguren", price: "15€", description: "Verschiedene Tiermotive" },
        { name: "Spardose Tier", price: "20€", description: "Kinderfreundliche Motive" },
      ]
    },
    {
      name: "Besondere Stücke",
      items: [
        { name: "Kuchenteller", price: "28€", description: "Großer Servierteller, Ø 30cm" },
        { name: "Serving Bowl", price: "45€", description: "Große Schale für Salate" },
        { name: "Geschirr-Set", price: "55€", description: "Tasse + Teller + Schale" },
        { name: "Individuelle Wünsche", price: "nach Absprache", description: "Spezielle Formen auf Anfrage" },
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Sortiment & Preise
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Entdecken Sie unsere vielfältige Auswahl an Keramik-Rohlingen - 
              von klassischen Tassen bis zu dekorativen Objekten
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {categories.map((category, index) => (
                  <div key={index} className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                      {category.name}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-cream-light p-4 rounded-lg border border-ui-gray-200">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-text-primary">{item.name}</h3>
                            <span className="text-clay-primary font-bold text-lg">{item.price}</span>
                          </div>
                          <p className="text-text-muted text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-clay-primary/10 p-6 rounded-lg border border-clay-primary/20">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Preis-Übersicht
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Studioplatzgebühr</span>
                    <span className="font-semibold text-text-primary">8€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Rohlinge</span>
                    <span className="font-semibold text-text-primary">10€ - 55€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Farben & Werkzeuge</span>
                    <span className="font-semibold text-clay-primary">inklusive</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Brennservice</span>
                    <span className="font-semibold text-clay-primary">inklusive</span>
                  </div>
                  <div className="border-t border-ui-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-text-primary">Gesamt ab</span>
                      <span className="font-bold text-clay-primary text-lg">18€</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Inklusive Services
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Palette className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Farben</h4>
                      <p className="text-text-muted text-sm">
                        Über 50 verschiedene Farben zur Auswahl
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Coffee className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Werkzeuge</h4>
                      <p className="text-text-muted text-sm">
                        Pinsel, Schwämme, Schablonen und mehr
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Brennservice</h4>
                      <p className="text-text-muted text-sm">
                        Professionelles Brennen bei 1000°C
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Betreuung</h4>
                      <p className="text-text-muted text-sm">
                        Hilfe und Tipps von unserem Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Gruppenrabatte
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">8-12 Personen</span>
                    <span className="font-semibold text-clay-primary">10% Rabatt</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">13-20 Personen</span>
                    <span className="font-semibold text-clay-primary">15% Rabatt</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Über 20 Personen</span>
                    <span className="font-semibold text-clay-primary">20% Rabatt</span>
                  </div>
                </div>
                <p className="text-text-muted text-sm mt-3">
                  Rabatt gilt nur auf Rohlinge, nicht auf Studioplatzgebühr
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Warum bei LAYERS bemalen?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-clay-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Qualität</h4>
                <p className="text-text-muted text-sm">
                  Hochwertige Keramik-Rohlinge von lokalen Töpfereien
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-clay-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Vielfalt</h4>
                <p className="text-text-muted text-sm">
                  Über 100 verschiedene Rohlinge in allen Formen und Größen
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="h-8 w-8 text-clay-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Transparent</h4>
                <p className="text-text-muted text-sm">
                  Faire Preise ohne versteckte Kosten - alles inklusive
                </p>
              </div>
            </div>
          </div>

          <div className="bg-clay-primary/10 p-8 rounded-lg border border-clay-primary/20 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Bereit zum Gestalten?
            </h3>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              Besuchen Sie uns und entdecken Sie unser komplettes Sortiment live! 
              Buchen Sie gleich Ihren Termin und lassen Sie Ihrer Kreativität freien Lauf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/reservierung" 
                className="bg-clay-primary text-white px-6 py-3 rounded-lg hover:bg-clay-dark transition-colors font-medium inline-flex items-center justify-center"
              >
                Jetzt buchen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/kontakt" 
                className="bg-cream-light border border-clay-primary text-clay-primary px-6 py-3 rounded-lg hover:bg-clay-primary hover:text-white transition-colors font-medium"
              >
                Fragen stellen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}