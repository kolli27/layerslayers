import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Impressum
            </h1>
            <p className="text-xl text-text-muted">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Anbieter
                </h2>
                <div className="space-y-2 text-text-muted">
                  <p className="font-semibold text-text-primary">LAYERS Keramikstudio</p>
                  <p>Eigelstein 133</p>
                  <p>50668 Köln</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Kontakt
                </h2>
                <div className="space-y-2 text-text-muted">
                  <p>
                    <strong>E-Mail:</strong> 
                    <a href="mailto:hallo@layers.cologne" className="text-clay-primary hover:text-clay-dark transition-colors ml-2">
                      hallo@layers.cologne
                    </a>
                  </p>
                  <p>
                    <strong>Internet:</strong> 
                    <a href="https://layers.cologne" className="text-clay-primary hover:text-clay-dark transition-colors ml-2">
                      www.layers.cologne
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Verantwortlich für den Inhalt
                </h2>
                <div className="space-y-2 text-text-muted">
                  <p>LAYERS Keramikstudio</p>
                  <p>Eigelstein 133</p>
                  <p>50668 Köln</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Haftungsausschluss
                </h2>
                <div className="space-y-4 text-text-muted">
                  <div>
                    <h3 className="font-semibold text-text-primary">Haftung für Inhalte</h3>
                    <p>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                      Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
                      können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter 
                      sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                      nach den allgemeinen Gesetzen verantwortlich.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary">Haftung für Links</h3>
                    <p>
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf 
                      deren Inhalte wir keinen Einfluss haben. Deshalb können wir für 
                      diese fremden Inhalte auch keine Gewähr übernehmen. Für die 
                      Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
                      oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Urheberrecht
                </h2>
                <div className="text-text-muted">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
                    diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
                    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                    Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
                    der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Datenschutz
                </h2>
                <div className="text-text-muted">
                  <p>
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe 
                    personenbezogener Daten möglich. Soweit auf unseren Seiten 
                    personenbezogene Daten erhoben werden, erfolgt dies stets auf 
                    freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche 
                    Zustimmung nicht an Dritte weitergegeben. Weitere Informationen 
                    finden Sie in unserer 
                    <a href="/datenschutz" className="text-clay-primary hover:text-clay-dark transition-colors ml-1">
                      Datenschutzerklärung
                    </a>.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Online-Streitbeilegung
                </h2>
                <div className="text-text-muted">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur 
                    Online-Streitbeilegung (OS) bereit: 
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-clay-primary hover:text-clay-dark transition-colors ml-1">
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p className="mt-2">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}