import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingCalendar from '@/components/BookingCalendar'
import { Calendar, Clock, Users, Info } from 'lucide-react'

export default function ReservierungPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Reservierung
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Buchen Sie Ihren Termin bei LAYERS - einfach, schnell und bequem online
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100 mb-6">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Verfügbare Termine
                </h2>
                <p className="text-text-muted mb-4">
                  Wählen Sie einen passenden Termin aus unserem Kalender. 
                  Alle verfügbaren Zeiten werden automatisch aktualisiert.
                </p>
                <BookingCalendar />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Buchungsinfo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Öffnungszeiten</h4>
                      <p className="text-text-muted text-sm">
                        Nur mit Terminvereinbarung<br />
                        Täglich 10:00 - 20:00 Uhr
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Gruppengröße</h4>
                      <p className="text-text-muted text-sm">
                        1-8 Personen pro Termin<br />
                        Größere Gruppen auf Anfrage
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Vorlaufzeit</h4>
                      <p className="text-text-muted text-sm">
                        Mindestens 24h im Voraus<br />
                        Wochenenden: 48h im Voraus
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-clay-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Stornierung</h4>
                      <p className="text-text-muted text-sm">
                        Kostenlos bis 48h vorher<br />
                        Danach 50% Stornogebühr
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-clay-primary/10 p-6 rounded-lg border border-clay-primary/20">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Preise
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Studioplatzgebühr</span>
                    <span className="font-semibold text-text-primary">8€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Rohlinge</span>
                    <span className="font-semibold text-text-primary">ab 12€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Brennservice</span>
                    <span className="font-semibold text-text-primary">inkl.</span>
                  </div>
                  <div className="border-t border-ui-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-text-primary">Gesamt ab</span>
                      <span className="font-bold text-clay-primary">20€</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-muted text-sm mt-4">
                  Farben und Werkzeuge sind immer inklusive
                </p>
              </div>

              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Noch Fragen?
                </h3>
                <p className="text-text-muted mb-4">
                  Wir helfen Ihnen gerne bei der Terminplanung und 
                  beantworten alle Ihre Fragen.
                </p>
                <div className="space-y-3">
                  <a 
                    href="/faq"
                    className="block w-full bg-cream-light border border-clay-primary text-clay-primary px-4 py-2 rounded-lg hover:bg-clay-primary hover:text-white transition-colors font-medium text-center"
                  >
                    Häufige Fragen
                  </a>
                  <a 
                    href="/kontakt"
                    className="block w-full bg-clay-primary text-white px-4 py-2 rounded-lg hover:bg-clay-dark transition-colors font-medium text-center"
                  >
                    Kontakt
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              So funktioniert's
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Termin wählen</h4>
                <p className="text-text-muted text-sm">
                  Verfügbaren Termin im Kalender auswählen
                </p>
              </div>
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Daten eingeben</h4>
                <p className="text-text-muted text-sm">
                  Persönliche Informationen und Teilnehmerzahl
                </p>
              </div>
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Bestätigung</h4>
                <p className="text-text-muted text-sm">
                  E-Mail-Bestätigung mit allen Details
                </p>
              </div>
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Kreativ werden</h4>
                <p className="text-text-muted text-sm">
                  Bei uns im Studio Ihrer Kreativität freien Lauf lassen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}