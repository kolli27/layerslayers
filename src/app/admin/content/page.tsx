'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Save, Edit, Image, Type, Settings, Eye, EyeOff } from 'lucide-react'

interface ContentState {
  hero: {
    title: string
    subtitle: string
    description: string
  }
  about: {
    title: string
    description: string
    experience: string
  }
  services: {
    id: string
    title: string
    description: string
    price: string
    duration: string
    features: string[]
  }[]
  contact: {
    address: string
    phone: string
    email: string
    hours: { day: string; time: string }[]
  }
}

export default function AdminContent() {
  const [content, setContent] = useState<ContentState>({
    hero: {
      title: 'Erschaffe deine eigene Keramik-Kunst',
      subtitle: 'In unserem gemütlichen Atelier in Köln kannst du deine Kreativität entfalten.',
      description: 'Bemale Tassen, Teller und andere Keramikstücke in entspannter Atmosphäre.'
    },
    about: {
      title: 'Über unser Atelier',
      description: 'LAYERS ist mehr als nur ein Keramik-Atelier – es ist ein Ort, an dem Kreativität und Gemeinschaft aufeinandertreffen.',
      experience: 'Seit 2019 bieten wir in unserem gemütlichen Atelier in Köln die perfekte Umgebung für kreative Auszeiten.'
    },
    services: [
      {
        id: 'open-studio',
        title: 'Offenes Atelier',
        description: 'Komm vorbei und bemale deine eigene Keramik. Perfekt für einen entspannten Nachmittag.',
        price: 'Ab 15€',
        duration: '2-3 Stunden',
        features: ['Alle Materialien inklusive', 'Professionelle Anleitung', 'Brennservice inklusive']
      },
      {
        id: 'group-event',
        title: 'Gruppen-Events',
        description: 'Ideal für Kindergeburtstage, Teambuilding oder Freundinnen-Abende.',
        price: 'Ab 20€ pro Person',
        duration: '2-4 Stunden',
        features: ['Bis zu 12 Personen', 'Private Atmosphäre', 'Getränke & Snacks möglich']
      },
      {
        id: 'date-night',
        title: 'Date-Night',
        description: 'Romantischer Abend zu zweit bei Wein und kreativer Arbeit.',
        price: '45€ für 2 Personen',
        duration: '3 Stunden',
        features: ['Wein & Snacks inklusive', 'Romantische Beleuchtung', 'Perfekt für Paare']
      },
      {
        id: 'workshop',
        title: 'Workshops',
        description: 'Lerne spezielle Techniken und Designs in unseren geführten Workshops.',
        price: 'Ab 35€',
        duration: '3-4 Stunden',
        features: ['Professionelle Anleitung', 'Spezielle Techniken', 'Kleine Gruppen']
      }
    ],
    contact: {
      address: 'Musterstraße 123, 50667 Köln',
      phone: '0221 12345678',
      email: 'hello@layers.cologne',
      hours: [
        { day: 'Montag - Freitag', time: '14:00 - 21:00' },
        { day: 'Samstag', time: '10:00 - 18:00' },
        { day: 'Sonntag', time: '12:00 - 18:00' }
      ]
    }
  })

  const [activeTab, setActiveTab] = useState('hero')
  const [hasChanges, setHasChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const tabs = [
    { id: 'hero', name: 'Hero-Bereich', icon: Type },
    { id: 'about', name: 'Über uns', icon: Edit },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'contact', name: 'Kontakt', icon: Settings }
  ]

  const updateContent = (section: keyof ContentState, updates: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...updates }
    }))
    setHasChanges(true)
  }

  const updateService = (serviceId: string, updates: any) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(service =>
        service.id === serviceId ? { ...service, ...updates } : service
      )
    }))
    setHasChanges(true)
  }

  const saveChanges = async () => {
    setIsSaving(true)
    try {
      // In a real app, this would save to a database
      await new Promise(resolve => setTimeout(resolve, 1000))
      setHasChanges(false)
    } catch (error) {
      console.error('Error saving content:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const previewWebsite = () => {
    window.open('/', '_blank')
  }

  return (
    <AdminLayout title="Inhalte verwalten">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Website-Inhalte bearbeiten</h3>
              <p className="text-sm text-gray-600">
                Passe die Texte und Informationen auf deiner Website an
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={previewWebsite}
                className="ceramic-button-outline flex items-center space-x-2"
              >
                <Eye className="h-4 w-4" />
                <span>Vorschau</span>
              </button>
              <button
                onClick={saveChanges}
                disabled={!hasChanges || isSaving}
                className="ceramic-button flex items-center space-x-2 disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{isSaving ? 'Speichern...' : 'Änderungen speichern'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-ceramic-terracotta text-ceramic-terracotta'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Hero Section */}
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Haupttitel
                  </label>
                  <input
                    type="text"
                    value={content.hero.title}
                    onChange={(e) => updateContent('hero', { title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Untertitel
                  </label>
                  <input
                    type="text"
                    value={content.hero.subtitle}
                    onChange={(e) => updateContent('hero', { subtitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung
                  </label>
                  <textarea
                    value={content.hero.description}
                    onChange={(e) => updateContent('hero', { description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
              </div>
            )}

            {/* About Section */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titel
                  </label>
                  <input
                    type="text"
                    value={content.about.title}
                    onChange={(e) => updateContent('about', { title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung
                  </label>
                  <textarea
                    value={content.about.description}
                    onChange={(e) => updateContent('about', { description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Erfahrung
                  </label>
                  <textarea
                    value={content.about.experience}
                    onChange={(e) => updateContent('about', { experience: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
              </div>
            )}

            {/* Services Section */}
            {activeTab === 'services' && (
              <div className="space-y-8">
                {content.services.map(service => (
                  <div key={service.id} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{service.title}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Titel
                        </label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => updateService(service.id, { title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preis
                        </label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => updateService(service.id, { price: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Dauer
                        </label>
                        <input
                          type="text"
                          value={service.duration}
                          onChange={(e) => updateService(service.id, { duration: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Beschreibung
                        </label>
                        <textarea
                          value={service.description}
                          onChange={(e) => updateService(service.id, { description: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Section */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={content.contact.address}
                    onChange={(e) => updateContent('contact', { address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="text"
                      value={content.contact.phone}
                      onChange={(e) => updateContent('contact', { phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      value={content.contact.email}
                      onChange={(e) => updateContent('contact', { email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Öffnungszeiten
                  </label>
                  <div className="space-y-2">
                    {content.contact.hours.map((hour, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={hour.day}
                          onChange={(e) => {
                            const newHours = [...content.contact.hours]
                            newHours[index] = { ...hour, day: e.target.value }
                            updateContent('contact', { hours: newHours })
                          }}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                        />
                        <input
                          type="text"
                          value={hour.time}
                          onChange={(e) => {
                            const newHours = [...content.contact.hours]
                            newHours[index] = { ...hour, time: e.target.value }
                            updateContent('contact', { hours: newHours })
                          }}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}