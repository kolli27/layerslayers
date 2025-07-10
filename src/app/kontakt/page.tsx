import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Mail, Clock, Phone } from 'lucide-react'

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Kontakt
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Wir freuen uns auf Ihre Nachricht! Kontaktieren Sie uns für Terminvereinbarungen, 
              Fragen oder individuelle Angebote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary">Adresse</h3>
                    <p className="text-text-muted">
                      Eigelstein 133<br />
                      50668 Köln
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary">E-Mail</h3>
                    <a 
                      href="mailto:hallo@layers.cologne" 
                      className="text-clay-primary hover:text-clay-dark transition-colors"
                    >
                      hallo@layers.cologne
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-primary">Öffnungszeiten</h3>
                    <p className="text-text-muted">
                      Besuch nur mit Reservierung möglich<br />
                      Verfügbare Termine finden Sie in unserem Buchungssystem
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-cream-light-alt rounded-lg border border-ui-gray-100">
                <h3 className="font-semibold text-text-primary mb-3">
                  Wichtige Hinweise
                </h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Termine nur nach Voranmeldung</li>
                  <li>• Bitte reservieren Sie rechtzeitig</li>
                  <li>• Für Gruppenevents kontaktieren Sie uns direkt</li>
                  <li>• Abholung bemalter Keramik nach Terminvereinbarung</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Nachricht senden
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-ui-gray-200 rounded-lg focus:ring-2 focus:ring-clay-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-ui-gray-200 rounded-lg focus:ring-2 focus:ring-clay-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-ui-gray-200 rounded-lg focus:ring-2 focus:ring-clay-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-ui-gray-200 rounded-lg focus:ring-2 focus:ring-clay-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-ui-gray-200 rounded-lg focus:ring-2 focus:ring-clay-primary focus:border-transparent transition-colors resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-clay-primary text-white px-6 py-3 rounded-lg hover:bg-clay-dark transition-colors font-medium"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}