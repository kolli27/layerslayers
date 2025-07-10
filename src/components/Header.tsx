'use client'

import { useState } from 'react'
import { Menu, X, Palette } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Über uns', href: '/über-uns' },
    { name: 'Preise', href: '/sortiment-und-preise' },
    { name: 'Events', href: '/gruppenevent', submenu: [
      { name: 'Gruppenevents', href: '/gruppenevent' },
      { name: 'Geburtstage', href: '/geburtstag' },
      { name: 'Teamevents', href: '/teamevent' },
    ]},
    { name: 'Buchen', href: '/reservierung' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header className="fixed top-0 w-full bg-cream-light/95 backdrop-blur-sm z-50 shadow-sm border-b border-ui-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-clay-primary" />
            <span className="text-2xl font-bold text-text-primary">LAYERS</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-muted hover:text-clay-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-text-muted hover:text-clay-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream-light border-t border-ui-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-text-muted hover:text-clay-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header