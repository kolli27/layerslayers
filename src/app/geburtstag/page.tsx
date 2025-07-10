import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Gift, Cake, Users, Star, Heart, ArrowRight } from 'lucide-react'

export default function GeburtstagPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Geburtstagsfeiern
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Feiern Sie Ihren besonderen Tag mit kreativen Momenten und 
              unvergesslichen Erinnerungen bei LAYERS
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Ihr besonderer Tag
              </h2>
              <div className="space-y-4 text-text-muted">
                <p>
                  Machen Sie Ihren Geburtstag zu einem besonderen Erlebnis! 
                  Statt herkömmlicher Feiern verbringen Sie entspannte und 
                  kreative Stunden mit Ihren Liebsten in unserem gemütlichen Studio.
                </p>
                <p>
                  Jeder Gast kann sein eigenes Kunstwerk schaffen - ein 
                  persönliches Geschenk, das Sie immer an diesen besonderen 
                  Tag erinnern wird. Ob ruhige Familienfeier oder lustige 
                  Runde mit Freunden - wir sorgen für den perfekten Rahmen.
                </p>
                <p>
                  Das Beste daran: Sie müssen sich um nichts kümmern! 
                  Wir bereiten alles vor und Sie können sich ganz auf die 
                  Feier und das gemeinsame Gestalten konzentrieren.
                </p>
              </div>
            </div>
            
            <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Geburtstagsspecials
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Gift className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Geburtstagsrabatt</h4>
                    <p className="text-text-muted">
                      Das Geburtstagskind zahlt nur die Hälfte der Studioplatzgebühr
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Cake className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Geburtstagstorte</h4>
                    <p className="text-text-muted">
                      Wir organisieren gerne eine Geburtstagstorte für Sie
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Exklusiv-Betreuung</h4>
                    <p className="text-text-muted">
                      Persönliche Betreuung für Ihre Geburtstagsgesellschaft
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-clay-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary">Dekoration</h4>
                    <p className="text-text-muted">
                      Wir dekorieren Ihren Bereich festlich zum Geburtstag
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
              Geburtstags-Pakete
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream-light-alt p-6 rounded-lg border border-ui-gray-100">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Erwachsenen-Geburtstag
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 3 Stunden Studio-Zeit</p>
                  <p>• Rohling-Auswahl (bis 30€)</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Getränke & Snacks</p>
                  <p>• Geburtstagsdekoration</p>
                  <p>• 50% Rabatt für Geburtstagskind</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 45€ <span className="text-sm text-text-muted">pro Person</span>
                </div>
                <p className="text-sm text-text-muted">
                  Für 6-12 Personen, perfekt für Erwachsene
                </p>
              </div>
              
              <div className="bg-clay-primary/10 p-6 rounded-lg border border-clay-primary">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Kindergeburtstag
                </h3>
                <div className="space-y-3 text-text-muted mb-6">
                  <p>• 2,5 Stunden Studio-Zeit</p>
                  <p>• Kinderfreundliche Rohlinge</p>
                  <p>• Alle Farben & Werkzeuge</p>
                  <p>• Brennservice</p>
                  <p>• Kindergetränke & Snacks</p>
                  <p>• Geburtstagsdekoration</p>
                  <p>• Kleine Überraschung</p>
                  <p>• Geburtstagskind gratis</p>
                </div>
                <div className="text-2xl font-bold text-clay-primary mb-4">
                  ab 35€ <span className="text-sm text-text-muted">pro Kind</span>
                </div>
                <p className="text-sm text-text-muted">
                  Für 6-10 Kinder, ab 6 Jahren
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-clay-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Einzigartige Geschenke
              </h3>
              <p className="text-text-muted">
                Jeder Gast nimmt ein selbstgestaltetes Kunstwerk mit nach Hause - 
                eine bleibende Erinnerung an den besonderen Tag
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-clay-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Entspannte Atmosphäre
              </h3>
              <p className="text-text-muted">
                Kein Stress, keine Hektik - nur gemütliche Stunden mit Ihren 
                Liebsten in unserem ruhigen Studio
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-clay-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-clay-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Für jedes Alter
              </h3>
              <p className="text-text-muted">
                Von Kindergeburtstagen bis zu runden Geburtstagen - 
                wir haben das passende Angebot für jeden
              </p>
            </div>
          </div>

          <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              So läuft Ihre Geburtstagsfeier ab
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Ankunft</h4>
                <p className="text-text-muted text-sm">
                  Begrüßung und Platzierung im dekorierten Bereich
                </p>
              </div>
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Auswahl</h4>
                <p className="text-text-muted text-sm">
                  Rohling aussuchen und Einführung in die Maltechniken
                </p>
              </div>
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Gestalten</h4>
                <p className="text-text-muted text-sm">
                  Kreative Zeit mit Malen, Gesprächen und Snacks
                </p>
              </div>
              <div className="text-center">
                <div className="bg-clay-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Abschluss</h4>
                <p className="text-text-muted text-sm">
                  Abgabe zum Brennen und Terminvereinbarung zur Abholung
                </p>
              </div>
            </div>
          </div>

          <div className="bg-clay-primary/10 p-8 rounded-lg border border-clay-primary/20 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Bereit für Ihre Geburtstagsfeier?
            </h3>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihren besonderen Tag planen! 
              Wir beraten Sie gerne und finden das perfekte Paket für Ihre Feier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="bg-clay-primary text-white px-6 py-3 rounded-lg hover:bg-clay-dark transition-colors font-medium inline-flex items-center justify-center"
              >
                Geburtstag planen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/kindergeburtstag" 
                className="bg-cream-light border border-clay-primary text-clay-primary px-6 py-3 rounded-lg hover:bg-clay-primary hover:text-white transition-colors font-medium"
              >
                Kindergeburtstag
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}