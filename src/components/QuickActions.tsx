import { ArrowRight, Gift, Palette, Clock } from 'lucide-react'

const QuickActions = () => {
  const actions = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Events buchen",
      description: "Gruppen, Geburtstage & Teamevents",
      href: "/gruppenevent"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Sortiment & Preise",
      description: "Entdecke alle verfügbaren Keramikstücke",
      href: "/sortiment-und-preise"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "FAQ",
      description: "Häufig gestellte Fragen & Antworten",
      href: "/faq"
    }
  ]

  return (
    <section id="quick-actions" className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="flex items-center gap-5 p-6 bg-white/10 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:translate-x-1 group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                {action.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">
                  {action.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {action.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickActions