import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-cta text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Bereit für dein kreatives Abenteuer?
        </h2>
        <p className="text-xl sm:text-2xl mb-8 opacity-90">
          Buche jetzt deinen Platz und entdecke die entspannende Welt des Keramikbemalens
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary hover:bg-background-light font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-medium inline-flex items-center justify-center space-x-2">
            <span>Jetzt buchen</span>
            <ArrowRight size={20} />
          </button>
          <a
            href="#kontakt"
            className="border-2 border-white hover:bg-white hover:text-primary text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 inline-flex items-center justify-center"
          >
            Fragen? Kontaktiere uns
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA