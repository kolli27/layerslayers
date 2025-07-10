'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Save, Edit, Type, Settings, Eye, Plus, Trash2, Star } from 'lucide-react'
import { WebsiteContent } from '@/types'

export default function AdminContent() {
  const [content, setContent] = useState<WebsiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('hero')
  const [hasChanges, setHasChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const tabs = [
    { id: 'hero', name: 'Hero-Bereich', icon: Type },
    { id: 'about', name: 'Über uns', icon: Edit },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'contact', name: 'Kontakt', icon: Settings },
    { id: 'testimonials', name: 'Bewertungen', icon: Star },
    { id: 'process', name: 'Prozess', icon: Settings }
  ]

  // Load content from API
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content')
        if (response.ok) {
          const data = await response.json()
          setContent(data)
        }
      } catch (error) {
        console.error('Error loading content:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  const updateContent = (section: string, updates: any) => {
    if (!content) return
    
    setContent(prev => ({
      ...prev!,
      [section]: { ...prev![section as keyof WebsiteContent], ...updates }
    }))
    setHasChanges(true)
  }

  const updateArrayItem = (section: string, index: number, updates: any) => {
    if (!content) return
    
    setContent(prev => ({
      ...prev!,
      [section]: (prev![section as keyof WebsiteContent] as any[]).map((item, i) =>
        i === index ? { ...item, ...updates } : item
      )
    }))
    setHasChanges(true)
  }

  // Function for adding new items to arrays (for future use)
  // const addArrayItem = (section: string, newItem: any) => {
  //   if (!content) return
  //   
  //   setContent(prev => ({
  //     ...prev!,
  //     [section]: [...(prev![section as keyof WebsiteContent] as any[]), newItem]
  //   }))
  //   setHasChanges(true)
  // }

  const removeArrayItem = (section: string, index: number) => {
    if (!content) return
    
    setContent(prev => ({
      ...prev!,
      [section]: (prev![section as keyof WebsiteContent] as any[]).filter((_, i) => i !== index)
    }))
    setHasChanges(true)
  }

  const saveChanges = async () => {
    setIsSaving(true)
    setSaveSuccess(false)
    
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: 'all',
          data: content
        })
      })

      if (response.ok) {
        setHasChanges(false)
        setSaveSuccess(true)
        setTimeout(() => setSaveSuccess(false), 3000)
      }
    } catch (error) {
      console.error('Error saving content:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const previewWebsite = () => {
    window.open('/', '_blank')
  }

  if (loading) {
    return (
      <AdminLayout title="Inhalte verwalten">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    )
  }

  if (!content) {
    return (
      <AdminLayout title="Inhalte verwalten">
        <div className="text-center py-12">
          <p className="text-gray-500">Fehler beim Laden der Inhalte.</p>
        </div>
      </AdminLayout>
    )
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
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
              >
                <Eye className="h-4 w-4" />
                <span>Vorschau</span>
              </button>
              <button
                onClick={saveChanges}
                disabled={!hasChanges || isSaving}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{isSaving ? 'Speichern...' : 'Änderungen speichern'}</span>
              </button>
            </div>
          </div>
          
          {saveSuccess && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">✓ Änderungen erfolgreich gespeichert!</p>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hervorgehobener Teil
                  </label>
                  <input
                    type="text"
                    value={content.hero.subtitle}
                    onChange={(e) => updateContent('hero', { subtitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung
                  </label>
                  <textarea
                    value={content.hero.description}
                    onChange={(e) => updateContent('hero', { description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primärer Button
                    </label>
                    <input
                      type="text"
                      value={content.hero.primaryButton}
                      onChange={(e) => updateContent('hero', { primaryButton: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sekundärer Button
                    </label>
                    <input
                      type="text"
                      value={content.hero.secondaryButton}
                      onChange={(e) => updateContent('hero', { secondaryButton: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung
                  </label>
                  <textarea
                    value={content.about.description}
                    onChange={(e) => updateContent('about', { description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Features
                  </label>
                  <div className="space-y-2">
                    {content.about.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...content.about.features]
                            newFeatures[index] = e.target.value
                            updateContent('about', { features: newFeatures })
                          }}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                          onClick={() => {
                            const newFeatures = content.about.features.filter((_, i) => i !== index)
                            updateContent('about', { features: newFeatures })
                          }}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newFeatures = [...content.about.features, '']
                        updateContent('about', { features: newFeatures })
                      }}
                      className="flex items-center space-x-2 text-primary hover:bg-primary/10 px-3 py-2 rounded-lg"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Feature hinzufügen</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Services Section */}
            {activeTab === 'services' && (
              <div className="space-y-8">
                {content.services.map((service, index) => (
                  <div key={service.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                      <button
                        onClick={() => removeArrayItem('services', index)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Titel
                        </label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => updateArrayItem('services', index, { title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Icon (Emoji)
                        </label>
                        <input
                          type="text"
                          value={service.icon}
                          onChange={(e) => updateArrayItem('services', index, { icon: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preis
                        </label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => updateArrayItem('services', index, { price: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Button-Text
                        </label>
                        <input
                          type="text"
                          value={service.cta}
                          onChange={(e) => updateArrayItem('services', index, { cta: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Beschreibung
                      </label>
                      <textarea
                        value={service.description}
                        onChange={(e) => updateArrayItem('services', index, { description: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={service.featured}
                          onChange={(e) => updateArrayItem('services', index, { featured: e.target.checked })}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm font-medium text-gray-700">Als beliebt markieren</span>
                      </label>
                      
                      {service.featured && (
                        <input
                          type="text"
                          value={service.badge || ''}
                          onChange={(e) => updateArrayItem('services', index, { badge: e.target.value })}
                          placeholder="Badge-Text (z.B. 'Beliebt')"
                          className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      )}
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Öffnungszeiten
                  </label>
                  <div className="space-y-2">
                    {content.contact.openingHours.map((hour, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={hour.day}
                          onChange={(e) => {
                            const newHours = [...content.contact.openingHours]
                            newHours[index] = { ...hour, day: e.target.value }
                            updateContent('contact', { openingHours: newHours })
                          }}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="text"
                          value={hour.hours}
                          onChange={(e) => {
                            const newHours = [...content.contact.openingHours]
                            newHours[index] = { ...hour, hours: e.target.value }
                            updateContent('contact', { openingHours: newHours })
                          }}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials Section */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                {content.testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                      <button
                        onClick={() => removeArrayItem('testimonials', index)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Autor
                        </label>
                        <input
                          type="text"
                          value={testimonial.author}
                          onChange={(e) => updateArrayItem('testimonials', index, { author: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quelle
                        </label>
                        <input
                          type="text"
                          value={testimonial.source}
                          onChange={(e) => updateArrayItem('testimonials', index, { source: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bewertungstext
                      </label>
                      <textarea
                        value={testimonial.text}
                        onChange={(e) => updateArrayItem('testimonials', index, { text: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Sterne-Bewertung:
                      </label>
                      <select
                        value={testimonial.rating}
                        onChange={(e) => updateArrayItem('testimonials', index, { rating: parseInt(e.target.value) })}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value={5}>5 Sterne</option>
                        <option value={4}>4 Sterne</option>
                        <option value={3}>3 Sterne</option>
                        <option value={2}>2 Sterne</option>
                        <option value={1}>1 Stern</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Process Section */}
            {activeTab === 'process' && (
              <div className="space-y-6">
                {content.process.map((step, index) => (
                  <div key={step.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Schritt {step.number}</h4>
                      <button
                        onClick={() => removeArrayItem('process', index)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Schritt-Nummer
                        </label>
                        <input
                          type="number"
                          value={step.number}
                          onChange={(e) => updateArrayItem('process', index, { number: parseInt(e.target.value) })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Titel
                        </label>
                        <input
                          type="text"
                          value={step.title}
                          onChange={(e) => updateArrayItem('process', index, { title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Icon (Emoji)
                        </label>
                        <input
                          type="text"
                          value={step.icon || ''}
                          onChange={(e) => updateArrayItem('process', index, { icon: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Beschreibung
                      </label>
                      <textarea
                        value={step.description}
                        onChange={(e) => updateArrayItem('process', index, { description: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}