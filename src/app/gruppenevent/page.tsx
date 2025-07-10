import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Calendar, Gift, Coffee, Star, ArrowRight } from 'lucide-react'

export default function GruppeneventPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Gruppenevents
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Kreative Erlebnisse für Freunde, Familie und Kollegen - 
              gestalten Sie unvergessliche Momente bei LAYERS
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Gemeinsam kreativ werden
              </h2>
              <div className="space-y-4 text-text-muted">
                <p>
                  Ob entspannter Nachmittag mit Freunden, Familienfeier oder 
                  besonderer Anlass - unsere Gruppenevents bieten den perfekten 
                  Rahmen für gemeinsame kreative Stunden.
                </p>
                <p>
                  In unserem gemütlichen Studio können Sie sich ganz auf das 
                  Gestalten konzentrieren, während wir uns um alles andere kümmern. 
                  Jeder kann sein eigenes Tempo bestimmen und einzigartige 
                  Keramikstücke schaffen.
                </p>
                <p>
                  Perfekt für alle, die nach einer Alternative zu herkömmlichen 
                  Gruppenaktivitäten suchen - entspannend, inspirierend und 
                  mit bleibenden Erinnerungen.
                </p>
              </div>
            </div>
            
            <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Event-Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Flexible Gruppengrößen</h4>
                    <p className="text-text-muted">
                      Von 4 bis 20 Personen - wir passen uns Ihrer Gruppe an
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Terminflexibilität</h4>
                    <p className="text-text-muted">
                      Auch außerhalb der regulären Öffnungszeiten möglich
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Gift className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">All-Inclusive</h4>
                    <p className="text-text-muted">
                      Alle Materialien, Werkzeuge und Brennservice inklusive
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Coffee className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Verpflegung</h4>
                    <p className="text-text-muted">
                      Getränke und Snacks können dazu gebucht werden
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
              Unsere Event-Pakete
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Basis-Paket
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 2 Stunden Studio-Zeit</p>
                  <p>• Rohling-Auswahl (bis 25€)</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Kurze Einführung</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 35€ <span className="text-sm text-text-muted">pro Person</span>
                </div>
                <p className="text-sm text-text-muted">
                  Ideal für kleinere Gruppen (4-8 Personen)
                </p>
              </div>
              
              <div className="bg-clay-primary/10 p-6 rounded-lg border border-clay-primary relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-clay-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Komfort-Paket
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 3 Stunden Studio-Zeit</p>
                  <p>• Rohling-Auswahl (bis 35€)</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Getränke & Snacks</p>
                  <p>• Persönliche Betreuung</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 50€ <span className="text-sm text-text-muted">pro Person</span>
                </div>
                <p className="text-sm text-text-muted">
                  Perfekt für mittlere Gruppen (6-12 Personen)
                </p>
              </div>
              
              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Premium-Paket
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 4 Stunden Studio-Zeit</p>
                  <p>• Freie Rohling-Auswahl</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Catering nach Wahl</p>
                  <p>• Exklusiv-Betreuung</p>
                  <p>• Fotoshooting</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 75€ <span className="text-sm text-text-muted">pro Person</span>
                </div>
                <p className="text-sm text-text-muted">
                  Für größere Gruppen (10-20 Personen)
                </p>
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
                  <Star className="h-4 w-4 text-clay-primary" />
                  <span>Freundinnen-Treffen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-clay-primary" />
                  <span>Familienfeier</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-clay-primary" />
                  <span>Mutter-Kind-Nachmittag</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-clay-primary" />
                  <span>Hobbygruppen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-clay-primary" />
                  <span>Vereinsausflug</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-clay-primary" />
                  <span>Besonderer Anlass</span>
                </div>
              </div>
            </div>
            
            <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Ihr Vorteil bei uns
              </h3>
              <div className="space-y-3 text-text-muted">
                <p>
                  <strong>Entspannte Atmosphäre:</strong> Kein Zeitdruck, 
                  gemütliche Einrichtung
                </p>
                <p>
                  <strong>Individuelle Betreuung:</strong> Tipps und Hilfe 
                  für jede Erfahrungsstufe
                </p>
                <p>
                  <strong>Qualitätsgarantie:</strong> Professioneller Brennservice 
                  und hochwertige Materialien
                </p>
                <p>
                  <strong>Flexible Planung:</strong> Terminabsprache auch 
                  außerhalb der regulären Zeiten
                </p>
              </div>
            </div>
          </div>

          <div className="bg-clay-primary/10 p-8 rounded-lg border border-clay-primary/20 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Bereit für Ihr Gruppenevent?
            </h3>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein individuelles Angebot. Wir beraten Sie 
              gerne und finden das perfekte Paket für Ihre Gruppe.
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
                href="/faq" 
                className="bg-cream-light border border-clay-primary text-clay-primary px-6 py-3 rounded-lg hover:bg-clay-primary hover:text-white transition-colors font-medium"
              >
                Häufige Fragen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}