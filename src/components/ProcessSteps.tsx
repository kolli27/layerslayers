'use client'

import { useContent } from '@/lib/contentContext'

const ProcessSteps = () => {
  const { content } = useContent()

  const fallbackSteps = [
    {
      id: "1",
      number: 1,
      title: "Platz reservieren",
      description: "Sichere dir online deinen Platz und plane deine kreative Zeit bei uns.",
      icon: "📅"
    },
    {
      id: "2",
      number: 2,
      title: "Ankommen & Einführung",
      description: "Lass dich von unserem Team begrüßen und in entspannter Atmosphäre",
      icon: "👋"
    },
    {
      id: "3",
      number: 3,
      title: "Bemalen",
      description: "Gestalte dein Unikat in entspannter Atmosphäre und kreiere dein individuelles Handwerk.",
      icon: "🎨"
    },
    {
      id: "4",
      number: 4,
      title: "Glasurbrand & Abholung",
      description: "In zweiwöchigem Turnus wird dein Werk gebrannt und du kannst es voller Stolz mitnehmen.",
      icon: "🔥"
    }
  ]

  const steps = content?.process || fallbackSteps

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            So funktioniert's
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-small hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps