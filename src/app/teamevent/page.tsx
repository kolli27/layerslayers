import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Target, Lightbulb, Trophy, Clock, ArrowRight } from 'lucide-react'

export default function TeameventPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Teamevents
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Stärken Sie Ihr Team durch gemeinsame kreative Erlebnisse - 
              Teambuilding mal anders bei LAYERS
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Teambuilding durch Kreativität
              </h2>
              <div className="space-y-4 text-text-muted">
                <p>
                  Verlassen Sie die gewohnten Büroräume und erleben Sie Ihr Team 
                  von einer neuen Seite! Beim gemeinsamen Keramik bemalen entstehen 
                  nicht nur schöne Kunstwerke, sondern auch stärkere Verbindungen 
                  zwischen den Teammitgliedern.
                </p>
                <p>
                  Die entspannte Atmosphäre in unserem Studio bietet den perfekten 
                  Rahmen für ungezwungene Gespräche und kreative Zusammenarbeit. 
                  Hier können sich Kollegen abseits des Arbeitsalltags kennenlernen 
                  und gemeinsam neue Seiten an sich entdecken.
                </p>
                <p>
                  Ideal für Abteilungsausflüge, Weihnachtsfeiern, Projektabschlüsse 
                  oder einfach als Belohnung für gute Leistungen. Ein Teamevent, 
                  das in Erinnerung bleibt und das Wir-Gefühl stärkt.
                </p>
              </div>
            </div>
            
            <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Warum Teamevents bei LAYERS?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Teambuilding</h4>
                    <p className="text-text-muted">
                      Stärken Sie Zusammenhalt und Kommunikation im Team
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Kreativität</h4>
                    <p className="text-text-muted">
                      Fördern Sie kreatives Denken außerhalb der Arbeitsroutine
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Entspannung</h4>
                    <p className="text-text-muted">
                      Stress abbauen und das Team in entspannter Atmosphäre erleben
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Trophy className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Anerkennung</h4>
                    <p className="text-text-muted">
                      Zeigen Sie Wertschätzung für Ihr Team mit einem besonderen Event
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
              Team-Pakete
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Team-Basis
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 2,5 Stunden Studio-Zeit</p>
                  <p>• Rohling-Auswahl (bis 25€)</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Getränke & Snacks</p>
                  <p>• Teambetreuung</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 40€ <span className="text-sm text-text-muted">pro Person</span>
                </div>
                <p className="text-sm text-text-muted">
                  Für kleinere Teams (5-8 Personen)
                </p>
              </div>
              
              <div className="bg-clay-primary/10 p-6 rounded-lg border border-clay-primary relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-clay-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Team-Komfort
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 3 Stunden Studio-Zeit</p>
                  <p>• Rohling-Auswahl (bis 35€)</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Catering-Menü</p>
                  <p>• Teambetreuung</p>
                  <p>• Gruppenrabatt 10%</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 55€ <span className="text-sm text-text-muted">pro Person</span>
                </div>
                <p className="text-sm text-text-muted">
                  Für mittlere Teams (8-15 Personen)
                </p>
              </div>
              
              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Team-Premium
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 4 Stunden Studio-Zeit</p>
                  <p>• Freie Rohling-Auswahl</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Premium-Catering</p>
                  <p>• Exklusiv-Betreuung</p>
                  <p>• Teamchallenge</p>
                  <p>• Gruppenrabatt 15%</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 75€ <span className="text-sm text-text-muted">pro Person</span>
                </div>
                <p className="text-sm text-text-muted">
                  Für große Teams (15-25 Personen)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Zusätzliche Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-text-primary mb-3">
                  Team-Challenges
                </h4>
                <div className="space-y-2 text-text-muted">
                  <p>• Gemeinsame Kunstprojekte</p>
                  <p>• Kreative Wettbewerbe</p>
                  <p>• Kollaborative Gestaltung</p>
                  <p>• Team-Kunstwerk als Erinnerung</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-text-primary mb-3">
                  Firmen-Services
                </h4>
                <div className="space-y-2 text-text-muted">
                  <p>• Individuelle Terminplanung</p>
                  <p>• Firmenlunches & Catering</p>
                  <p>• Geschäftsausstattung mit Logo</p>
                  <p>• Rechnungsstellung an Firma</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Perfekt für diese Anlässe
              </h3>
              <div className="space-y-2 text-text-muted">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-clay-primary" />
                  <span>Projektabschlüsse</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-clay-primary" />
                  <span>Weihnachtsfeiern</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-clay-primary" />
                  <span>Abteilungsausflüge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-clay-primary" />
                  <span>Mitarbeiter-Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-clay-primary" />
                  <span>Onboarding neuer Mitarbeiter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-clay-primary" />
                  <span>Belohnung für gute Leistung</span>
                </div>
              </div>
            </div>
            
            <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Ihre Vorteile
              </h3>
              <div className="space-y-3 text-text-muted">
                <p>
                  <strong>Stressfreie Organisation:</strong> Wir kümmern uns um 
                  alles - Sie müssen nur kommen
                </p>
                <p>
                  <strong>Flexible Terminplanung:</strong> Auch außerhalb der 
                  regulären Zeiten möglich
                </p>
                <p>
                  <strong>Keine Vorkenntnisse nötig:</strong> Jeder kann mitmachen, 
                  unabhängig von Erfahrung
                </p>
                <p>
                  <strong>Langfristige Erinnerung:</strong> Jeder nimmt ein 
                  persönliches Kunstwerk mit
                </p>
              </div>
            </div>
          </div>

          <div className="bg-clay-primary/10 p-8 rounded-lg border border-clay-primary/20 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Bereit für Ihr Teamevent?
            </h3>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              Stärken Sie Ihr Team mit einem kreativen Erlebnis! Kontaktieren Sie 
              uns für ein individuelles Angebot und lassen Sie uns gemeinsam das 
              perfekte Event für Ihr Team planen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="bg-clay-primary text-white px-6 py-3 rounded-lg hover:bg-clay-dark transition-colors font-medium inline-flex items-center justify-center"
              >
                Jetzt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/gruppenevent" 
                className="bg-cream-light border border-clay-primary text-clay-primary px-6 py-3 rounded-lg hover:bg-clay-primary hover:text-white transition-colors font-medium"
              >
                Andere Gruppenevents
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}