import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const openingHours = [
    { day: 'Montag - Freitag', time: '14:00 - 21:00' },
    { day: 'Samstag', time: '10:00 - 18:00' },
    { day: 'Sonntag', time: '12:00 - 18:00' }
  ]

  return (
    <footer id="contact" className="bg-ceramic-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LAYERS</h3>
            <p className="text-ceramic-cream mb-6">
              Dein kreatives Keramik-Atelier im Herzen von Köln. Hier entstehen einzigartige Kunstwerke.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-ceramic-terracotta rounded-full flex items-center justify-center hover:bg-ceramic-cream hover:text-ceramic-brown transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-ceramic-terracotta rounded-full flex items-center justify-center hover:bg-ceramic-cream hover:text-ceramic-brown transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-ceramic-terracotta mt-1" />
                <div>
                  <p>Musterstraße 123</p>
                  <p>50667 Köln</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-ceramic-terracotta" />
                <p>0221 12345678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-ceramic-terracotta" />
                <p>hello@layers.cologne</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <div className="space-y-2">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-ceramic-cream">{schedule.day}</span>
                  <span>{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-ceramic-cream hover:text-white transition-colors">
                Services
              </a>
              <a href="#about" className="block text-ceramic-cream hover:text-white transition-colors">
                Über uns
              </a>
              <a href="#booking" className="block text-ceramic-cream hover:text-white transition-colors">
                Buchen
              </a>
              <a href="#" className="block text-ceramic-cream hover:text-white transition-colors">
                AGB
              </a>
              <a href="#" className="block text-ceramic-cream hover:text-white transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ceramic-terracotta/30 mt-12 pt-8 text-center">
          <p className="text-ceramic-cream">
            © 2024 LAYERS Keramik-Atelier. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer