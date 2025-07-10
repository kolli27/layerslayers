import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-text-muted">
              Informationen zum Datenschutz gemäß DSGVO
            </p>
          </div>

          <div className="bg-cream-light-alt p-8 rounded-lg border border-ui-gray-100">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  1. Verantwortliche Stelle
                </h2>
                <div className="space-y-2 text-text-muted">
                  <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                  <p className="font-semibold text-text-primary">LAYERS Keramikstudio</p>
                  <p>Eigelstein 133</p>
                  <p>50668 Köln</p>
                  <p>Deutschland</p>
                  <p>E-Mail: <a href="mailto:hallo@layers.cologne" className="text-clay-primary hover:text-clay-dark transition-colors">hallo@layers.cologne</a></p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  2. Erhebung und Verarbeitung personenbezogener Daten
                </h2>
                <div className="space-y-4 text-text-muted">
                  <div>
                    <h3 className="font-semibold text-text-primary">Websitebesuch</h3>
                    <p>
                      Beim Besuch unserer Website werden automatisch Informationen 
                      an den Server unserer Website gesendet. Diese Informationen 
                      werden temporär in einem sogenannten Logfile gespeichert. 
                      Folgende Informationen werden dabei ohne Ihr Zutun erfasst 
                      und bis zur automatisierten Löschung gespeichert:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>IP-Adresse des anfragenden Rechners</li>
                      <li>Datum und Uhrzeit des Zugriffs</li>
                      <li>Name und URL der abgerufenen Datei</li>
                      <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                      <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-text-primary">Buchungen und Kontaktaufnahme</h3>
                    <p>
                      Wenn Sie unser Buchungsformular nutzen oder uns eine E-Mail 
                      senden, werden Ihre Angaben zum Zweck der Bearbeitung der 
                      Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                      Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  3. Zweck der Datenverarbeitung
                </h2>
                <div className="text-text-muted">
                  <p>Die Verarbeitung der personenbezogenen Daten erfolgt zu folgenden Zwecken:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Bereitstellung und Verbesserung unserer Website</li>
                    <li>Bearbeitung von Buchungsanfragen</li>
                    <li>Kommunikation mit Kunden</li>
                    <li>Erfüllung vertraglicher Verpflichtungen</li>
                    <li>Einhaltung gesetzlicher Vorschriften</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  4. Rechtsgrundlage
                </h2>
                <div className="text-text-muted">
                  <p>
                    Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage 
                    von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b 
                    DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO 
                    (berechtigte Interessen).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  5. Speicherdauer
                </h2>
                <div className="text-text-muted">
                  <p>
                    Ihre personenbezogenen Daten werden nur so lange gespeichert, 
                    wie dies für die Erfüllung der Zwecke, für die sie erhoben wurden, 
                    erforderlich ist, oder soweit dies durch gesetzliche Aufbewahrungsfristen 
                    vorgeschrieben ist.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  6. Ihre Rechte
                </h2>
                <div className="text-text-muted">
                  <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                    <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  7. Cookies
                </h2>
                <div className="text-text-muted">
                  <p>
                    Unsere Website verwendet Cookies. Cookies sind Textdateien, die 
                    im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem 
                    des Nutzers gespeichert werden. Wir verwenden nur technisch 
                    notwendige Cookies, die für den Betrieb der Website erforderlich sind.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  8. Datensicherheit
                </h2>
                <div className="text-text-muted">
                  <p>
                    Wir verwenden geeignete technische und organisatorische 
                    Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder 
                    vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, 
                    Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  9. Beschwerderecht
                </h2>
                <div className="text-text-muted">
                  <p>
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde 
                    über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu 
                    beschweren. Zuständig ist die Datenschutz-Aufsichtsbehörde des 
                    Bundeslandes, in dem Sie wohnen oder in dem sich die mutmaßliche 
                    Datenschutzverletzung ereignet hat.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  10. Änderungen dieser Datenschutzerklärung
                </h2>
                <div className="text-text-muted">
                  <p>
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, 
                    damit sie stets den aktuellen rechtlichen Anforderungen entspricht 
                    oder um Änderungen unserer Leistungen in der Datenschutzerklärung 
                    umzusetzen.
                  </p>
                </div>
              </div>

              <div className="bg-clay-primary/10 p-4 rounded-lg border border-clay-primary/20">
                <p className="text-text-muted text-sm">
                  <strong>Stand:</strong> Juli 2025<br />
                  Bei Fragen zum Datenschutz wenden Sie sich gerne an uns: 
                  <a href="mailto:hallo@layers.cologne" className="text-clay-primary hover:text-clay-dark transition-colors">
                    hallo@layers.cologne
                  </a>
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