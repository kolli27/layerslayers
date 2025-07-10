'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    category: "Allgemeine Fragen",
    questions: [
      {
        question: "Wie funktioniert das Keramik bemalen?",
        answer: "Sie wählen einen Rohling aus unserer vielfältigen Auswahl, bemalen ihn mit unseren Farben und Werkzeugen, und wir brennen ihn anschließend für Sie. Nach 7-10 Tagen können Sie Ihr fertiges Kunstwerk abholen."
      },
      {
        question: "Muss ich Vorkenntnisse haben?",
        answer: "Nein, überhaupt nicht! Keramik bemalen ist für alle Altersgruppen und Erfahrungsstufen geeignet. Unser Team hilft Ihnen gerne bei Fragen und gibt Tipps."
      },
      {
        question: "Wie lange dauert eine Session?",
        answer: "Das bestimmen Sie selbst! Die meisten Gäste verbringen 1-3 Stunden bei uns. Es gibt keine Zeitbegrenzung - lassen Sie sich die Zeit, die Sie brauchen."
      },
      {
        question: "Kann ich ohne Anmeldung kommen?",
        answer: "Nein, wir arbeiten ausschließlich mit Terminvereinbarung. Bitte reservieren Sie Ihren Platz online oder kontaktieren Sie uns per E-Mail."
      }
    ]
  },
  {
    category: "Preise & Bezahlung",
    questions: [
      {
        question: "Wie setzen sich die Preise zusammen?",
        answer: "Der Preis besteht aus den Materialkosten (je nach gewähltem Rohling) plus einer Studioplatzgebühr von 8€ pro Person. Farben und Werkzeuge sind inklusive."
      },
      {
        question: "Welche Zahlungsmethoden akzeptieren Sie?",
        answer: "Wir akzeptieren Bargeld, EC-Karte und alle gängigen Kreditkarten. Eine Bezahlung per PayPal ist ebenfalls möglich."
      },
      {
        question: "Kann ich einen Gutschein kaufen?",
        answer: "Ja! Gutscheine sind eine wunderbare Geschenkidee. Sie können sie bei uns im Studio kaufen oder online bestellen."
      },
      {
        question: "Gibt es Rabatte für Gruppen?",
        answer: "Ja, ab 8 Personen gewähren wir einen Gruppenrabatt von 10%. Für größere Events erstellen wir gerne ein individuelles Angebot."
      }
    ]
  },
  {
    category: "Termine & Reservierung",
    questions: [
      {
        question: "Wie weit im Voraus muss ich buchen?",
        answer: "Wir empfehlen eine Buchung mindestens 1 Woche im Voraus. Für Wochenenden und Events sollten Sie 2-3 Wochen einplanen."
      },
      {
        question: "Kann ich meinen Termin umbuchen?",
        answer: "Ja, Sie können Ihren Termin bis 48 Stunden vorher kostenfrei umbuchen. Kontaktieren Sie uns einfach per E-Mail oder Telefon."
      },
      {
        question: "Was passiert bei Stornierung?",
        answer: "Stornierungen sind bis 48 Stunden vor dem Termin kostenfrei möglich. Bei kurzfristigeren Absagen berechnen wir 50% der Studioplatzgebühr."
      },
      {
        question: "Welche Termine sind verfügbar?",
        answer: "Aktuelle Termine finden Sie in unserem Online-Buchungssystem. Wir haben täglich verschiedene Zeitslots verfügbar."
      }
    ]
  },
  {
    category: "Brennprozess & Abholung",
    questions: [
      {
        question: "Wie lange dauert der Brennprozess?",
        answer: "Der Brennvorgang dauert 7-10 Tage. Sie erhalten eine Benachrichtigung, sobald Ihr Stück abholbereit ist."
      },
      {
        question: "Wie lange kann ich mein Stück bei Ihnen lassen?",
        answer: "Gebrannte Keramik können Sie bis zu 6 Monate bei uns lagern. Danach berechnen wir eine kleine Lagergebühr."
      },
      {
        question: "Können Sie mein Stück auch versenden?",
        answer: "Ja, wir bieten einen Versandservice an. Die Kosten richten sich nach Größe und Gewicht des Pakets."
      },
      {
        question: "Was passiert, wenn mein Stück beim Brennen kaputtgeht?",
        answer: "Das kommt sehr selten vor. Sollte es dennoch passieren, können Sie kostenfrei ein neues Stück bemalen."
      }
    ]
  },
  {
    category: "Events & Gruppen",
    questions: [
      {
        question: "Organisieren Sie auch private Events?",
        answer: "Ja! Wir organisieren Geburtstage, JGA, Teamevents und andere private Feiern. Sprechen Sie uns für ein individuelles Angebot an."
      },
      {
        question: "Gibt es Catering für Events?",
        answer: "Wir bieten kleine Snacks und Getränke an. Für größere Events können wir auch externes Catering organisieren."
      },
      {
        question: "Ist das Studio für Rollstuhlfahrer zugänglich?",
        answer: "Ja, unser Studio ist barrierefrei zugänglich. Alle Arbeitsplätze sind ebenerdig erreichbar."
      },
      {
        question: "Welche Altersgruppen sind willkommen?",
        answer: "Alle Altersgruppen sind herzlich willkommen! Für Kinder unter 6 Jahren empfehlen wir die Begleitung eines Erwachsenen."
      }
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <main className="min-h-screen bg-cream-light">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um 
              Ihren Besuch bei LAYERS
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-cream-light-alt rounded-lg border border-ui-gray-100 p-6">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openItems.includes(itemId)
                    
                    return (
                      <div 
                        key={questionIndex}
                        className="border border-ui-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left bg-cream-light hover:bg-cream-light-alt transition-colors flex items-center justify-between"
                        >
                          <span className="font-medium text-text-primary">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-clay-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-clay-primary flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 py-4 bg-white border-t border-ui-gray-200">
                            <p className="text-text-muted">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-clay-primary/10 p-8 rounded-lg border border-clay-primary/20 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ihre Frage ist nicht dabei?
            </h3>
            <p className="text-text-muted mb-6">
              Kein Problem! Kontaktieren Sie uns gerne direkt. Wir helfen Ihnen 
              gerne weiter und beantworten alle Ihre Fragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="bg-clay-primary text-white px-6 py-3 rounded-lg hover:bg-clay-dark transition-colors font-medium"
              >
                Kontakt aufnehmen
              </a>
              <a 
                href="mailto:hallo@layers.cologne" 
                className="bg-cream-light border border-clay-primary text-clay-primary px-6 py-3 rounded-lg hover:bg-clay-primary hover:text-white transition-colors font-medium"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}