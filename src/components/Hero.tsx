'use client'

import { ArrowRight } from 'lucide-react'
import { useContent } from '@/lib/contentContext'

const Hero = () => {
  const { content } = useContent()

  // Fallback content for loading or error states
  const fallbackContent = {
    title: "Eure kreativen Ideen",
    subtitle: "zum Leben",
    description: "Bei layers tauchst du in die kreative Welt des Keramikbemalens ein und schaffst alltagstaugliche Unikate, die entspannte Atmosphäre in unserem Malstudio lädt dazu ein, deiner Kreativität freien Lauf zu lassen - egal, ob du noch nie einen Pinsel in der Hand hattest oder bereits Erfahrung hast. Lass dich inspirieren und gestalte Keramik, die so individuell ist wie du.",
    primaryButton: "Ich bin dabei!",
    secondaryButton: "Gutschein kaufen"
  }

  const heroContent = content?.hero || fallbackContent

  return (
    <section id="home" className="pt-24 min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-text-primary">
              {heroContent.title}<br/>
              <span className="text-gradient">{heroContent.subtitle}</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed max-w-2xl">
              {heroContent.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-medium hover:-translate-y-1 inline-flex items-center justify-center space-x-2">
                <span>{heroContent.primaryButton}</span>
                <ArrowRight size={20} />
              </button>
              
              <a
                href="#gutscheine"
                className="border-2 border-border hover:border-primary text-text-primary hover:text-primary font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center"
              >
                {heroContent.secondaryButton}
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-105">
              <div className="bg-white rounded-3xl shadow-large overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">🎨</span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Keramik bemalen</h3>
                      <p className="text-text-secondary">bei Layers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero