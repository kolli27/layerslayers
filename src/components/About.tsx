import { MapPin, Clock, Users, Award } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Zufriedene Kunden' },
    { icon: Award, value: '5 Jahre', label: 'Erfahrung' },
    { icon: Clock, value: '500+', label: 'Workshops' },
    { icon: MapPin, value: 'Köln', label: 'Zentral gelegen' }
  ]

  return (
    <section id="about" className="py-20 bg-ceramic-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Über unser Atelier
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              LAYERS ist mehr als nur ein Keramik-Atelier – es ist ein Ort, an dem Kreativität 
              und Gemeinschaft aufeinandertreffen. Seit 2019 bieten wir in unserem gemütlichen 
              Atelier in Köln die perfekte Umgebung für kreative Auszeiten.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Egal ob du Anfänger oder erfahrener Keramiker bist, bei uns findest du alles, 
              was du für dein persönliches Keramikprojekt brauchst. Unser Team steht dir 
              mit Rat und Tat zur Seite.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-ceramic-terracotta/10 rounded-lg mb-3 mx-auto">
                    <stat.icon className="h-6 w-6 text-ceramic-terracotta" />
                  </div>
                  <div className="text-2xl font-bold text-ceramic-brown mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="ceramic-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Warum LAYERS?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-ceramic-terracotta rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hochwertige Materialien</h4>
                    <p className="text-gray-600">Wir verwenden nur beste Keramik und Farben</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-ceramic-sage rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Persönliche Betreuung</h4>
                    <p className="text-gray-600">Individuelle Hilfe für jedes Projekt</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-ceramic-brown rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gemütliche Atmosphäre</h4>
                    <p className="text-gray-600">Entspannte Umgebung für kreative Stunden</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-ceramic-cream border-2 border-ceramic-brown rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Zentrale Lage</h4>
                    <p className="text-gray-600">Mitten in Köln, gut erreichbar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About