import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Users, Palette, Award } from 'lucide-react'

export default function ÜberUnsPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Über uns
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Willkommen bei LAYERS - Ihrem kreativen Keramikstudio im Herzen von Köln
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-text-muted">
                <p>
                  LAYERS wurde aus der Leidenschaft für Keramik und dem Wunsch gegründet, 
                  Menschen einen Ort zu bieten, an dem sie ihrer Kreativität freien Lauf lassen können. 
                  Unser Studio im lebendigen Eigelstein-Viertel ist ein Ort der Entspannung und 
                  kreativen Entfaltung.
                </p>
                <p>
                  Hier können Sie nicht nur wunderschöne Keramik bemalen, sondern auch 
                  unvergessliche Momente mit Freunden, Familie oder Kollegen verbringen. 
                  Ob für einen entspannten Nachmittag, eine Geburtstagsfeier oder ein 
                  Teamevent - bei uns sind Sie richtig.
                </p>
                <p>
                  Unsere Mission ist es, jedem die Möglichkeit zu geben, mit den eigenen 
                  Händen etwas Einzigartiges zu schaffen und dabei den Alltag zu vergessen.
                </p>
              </div>
            </div>
            
            <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Was uns auszeichnet
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Leidenschaft</h4>
                    <p className="text-text-muted">
                      Jedes Stück wird mit Liebe und Sorgfalt behandelt
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Gemeinschaft</h4>
                    <p className="text-text-muted">
                      Ein Ort für alle - von Anfängern bis zu erfahrenen Künstlern
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Palette className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Kreativität</h4>
                    <p className="text-text-muted">
                      Unbegrenzte Möglichkeiten für Ihren künstlerischen Ausdruck
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Qualität</h4>
                    <p className="text-text-muted">
                      Hochwertige Materialien und professionelle Brennverfahren
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-clay-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Keramik Bemalen
              </h3>
              <p className="text-text-muted">
                Wählen Sie aus über 100 verschiedenen Rohlingen und gestalten Sie 
                Ihr individuelles Kunstwerk
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-clay-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Events & Feiern
              </h3>
              <p className="text-text-muted">
                Perfekt für Geburtstage, JGA, Teamevents oder einfach einen 
                schönen Abend mit Freunden
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-clay-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Geschenke
              </h3>
              <p className="text-text-muted">
                Verschenken Sie Kreativität mit unseren Gutscheinen oder 
                gestalten Sie persönliche Geschenke
              </p>
            </div>
          </div>

          <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Besuchen Sie uns im Eigelstein
            </h3>
            <p className="text-text-muted mb-6">
              Unser Studio befindet sich im lebendigen Eigelstein-Viertel, einem der 
              charmantesten Stadteile Kölns. Hier verbinden sich Geschichte und 
              Moderne zu einem einzigartigen Ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="bg-clay-primary text-white px-6 py-3 rounded-lg hover:bg-clay-dark transition-colors font-medium"
              >
                Kontakt aufnehmen
              </a>
              <a 
                href="/reservierung" 
                className="bg-cream-light border border-clay-primary text-clay-primary px-6 py-3 rounded-lg hover:bg-clay-primary hover:text-white transition-colors font-medium"
              >
                Jetzt reservieren
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}