import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-hero flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-float">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-clay-primary animate-bounce-slow" />
              <span className="text-clay-primary font-medium text-caption">Kreatives Keramik-Atelier</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl heading-primary mb-6 leading-tight">
              Erschaffe deine eigene
              <span className="block heading-decorative">Kreativität</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-body mb-8 leading-relaxed">
              In unserem gemütlichen Atelier in Köln kannst du deine Kreativität entfalten. 
              Bemale Tassen, Teller und andere Keramikstücke in entspannter Atmosphäre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Jetzt buchen</span>
                <ArrowRight size={20} />
              </a>
              
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card">
              <div className="grid grid-cols-2 gap-4">
                <div className="ceramic-card">
                  <div className="w-12 h-12 bg-clay-primary rounded-full mb-4 animate-pulse"></div>
                  <h3 className="font-semibold text-text-primary">Kreativ</h3>
                  <p className="text-sm text-caption">Eigene Designs</p>
                </div>
                
                <div className="ceramic-card">
                  <div className="w-12 h-12 bg-sage-green rounded-full mb-4 animate-pulse"></div>
                  <h3 className="font-semibold text-text-primary">Entspannt</h3>
                  <p className="text-sm text-caption">Gemütliche Atmosphäre</p>
                </div>
                
                <div className="ceramic-card">
                  <div className="w-12 h-12 bg-earth-brown rounded-full mb-4 animate-pulse"></div>
                  <h3 className="font-semibold text-text-primary">Qualität</h3>
                  <p className="text-sm text-caption">Hochwertige Keramik</p>
                </div>
                
                <div className="ceramic-card">
                  <div className="w-12 h-12 bg-accent-gold rounded-full mb-4 animate-pulse"></div>
                  <h3 className="font-semibold text-text-primary">Einzigartig</h3>
                  <p className="text-sm text-caption">Persönliche Stücke</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero