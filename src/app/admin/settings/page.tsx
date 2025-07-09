'use client'

import { useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { Save, Key, Bell, Globe, Shield, Database, Mail } from 'lucide-react'

interface SettingsState {
  general: {
    siteName: string
    timeZone: string
    defaultLanguage: string
    bookingWindow: number
  }
  booking: {
    requireConfirmation: boolean
    allowCancellation: boolean
    cancellationDeadline: number
    maxParticipants: number
    bufferTime: number
  }
  notifications: {
    emailBookings: boolean
    smsBookings: boolean
    emailCancellations: boolean
    dailyReport: boolean
  }
  security: {
    sessionTimeout: number
    requirePasswordChange: boolean
    twoFactorAuth: boolean
  }
}

export default function AdminSettings() {
  const [settings, setSettings] = useState<SettingsState>({
    general: {
      siteName: 'LAYERS - Keramik Atelier',
      timeZone: 'Europe/Berlin',
      defaultLanguage: 'de',
      bookingWindow: 60 // days in advance
    },
    booking: {
      requireConfirmation: true,
      allowCancellation: true,
      cancellationDeadline: 24, // hours
      maxParticipants: 10,
      bufferTime: 15 // minutes between bookings
    },
    notifications: {
      emailBookings: true,
      smsBookings: false,
      emailCancellations: true,
      dailyReport: true
    },
    security: {
      sessionTimeout: 30, // minutes
      requirePasswordChange: false,
      twoFactorAuth: false
    }
  })

  const [hasChanges, setHasChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', name: 'Allgemein', icon: Globe },
    { id: 'booking', name: 'Buchungen', icon: Bell },
    { id: 'notifications', name: 'Benachrichtigungen', icon: Mail },
    { id: 'security', name: 'Sicherheit', icon: Shield }
  ]

  const updateSetting = (section: keyof SettingsState, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
    setHasChanges(true)
  }

  const saveSettings = async () => {
    setIsSaving(true)
    try {
      // In a real app, this would save to a database
      await new Promise(resolve => setTimeout(resolve, 1000))
      setHasChanges(false)
    } catch (error) {
      console.error('Error saving settings:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const resetToDefaults = () => {
    // Reset to default values
    setHasChanges(true)
  }

  return (
    <AdminLayout title="Einstellungen">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">System-Einstellungen</h3>
              <p className="text-sm text-gray-600">
                Konfiguriere dein Atelier-Management-System
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={resetToDefaults}
                className="ceramic-button-outline"
              >
                Zurücksetzen
              </button>
              <button
                onClick={saveSettings}
                disabled={!hasChanges || isSaving}
                className="ceramic-button flex items-center space-x-2 disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{isSaving ? 'Speichern...' : 'Einstellungen speichern'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Settings Tabs */}
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
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website-Name
                  </label>
                  <input
                    type="text"
                    value={settings.general.siteName}
                    onChange={(e) => updateSetting('general', 'siteName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zeitzone
                    </label>
                    <select
                      value={settings.general.timeZone}
                      onChange={(e) => updateSetting('general', 'timeZone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                    >
                      <option value="Europe/Berlin">Berlin (UTC+1)</option>
                      <option value="Europe/Vienna">Wien (UTC+1)</option>
                      <option value="Europe/Zurich">Zürich (UTC+1)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sprache
                    </label>
                    <select
                      value={settings.general.defaultLanguage}
                      onChange={(e) => updateSetting('general', 'defaultLanguage', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                    >
                      <option value="de">Deutsch</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buchungsfenster (Tage im Voraus)
                  </label>
                  <input
                    type="number"
                    value={settings.general.bookingWindow}
                    onChange={(e) => updateSetting('general', 'bookingWindow', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
              </div>
            )}

            {/* Booking Settings */}
            {activeTab === 'booking' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Buchungsbestätigung erforderlich
                      </label>
                      <p className="text-sm text-gray-500">
                        Neue Buchungen erfordern manuelle Bestätigung
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.booking.requireConfirmation}
                      onChange={(e) => updateSetting('booking', 'requireConfirmation', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Stornierung erlauben
                      </label>
                      <p className="text-sm text-gray-500">
                        Kunden können ihre Buchungen selbst stornieren
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.booking.allowCancellation}
                      onChange={(e) => updateSetting('booking', 'allowCancellation', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stornierungsfrist (Stunden)
                    </label>
                    <input
                      type="number"
                      value={settings.booking.cancellationDeadline}
                      onChange={(e) => updateSetting('booking', 'cancellationDeadline', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max. Teilnehmer pro Buchung
                    </label>
                    <input
                      type="number"
                      value={settings.booking.maxParticipants}
                      onChange={(e) => updateSetting('booking', 'maxParticipants', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pufferzeit zwischen Buchungen (Minuten)
                  </label>
                  <input
                    type="number"
                    value={settings.booking.bufferTime}
                    onChange={(e) => updateSetting('booking', 'bufferTime', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        E-Mail bei neuen Buchungen
                      </label>
                      <p className="text-sm text-gray-500">
                        Benachrichtigung bei jeder neuen Buchung
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.emailBookings}
                      onChange={(e) => updateSetting('notifications', 'emailBookings', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        SMS bei neuen Buchungen
                      </label>
                      <p className="text-sm text-gray-500">
                        SMS-Benachrichtigung bei neuen Buchungen
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.smsBookings}
                      onChange={(e) => updateSetting('notifications', 'smsBookings', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        E-Mail bei Stornierungen
                      </label>
                      <p className="text-sm text-gray-500">
                        Benachrichtigung bei Buchungsstornierungen
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.emailCancellations}
                      onChange={(e) => updateSetting('notifications', 'emailCancellations', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Täglicher Bericht
                      </label>
                      <p className="text-sm text-gray-500">
                        Tägliche Zusammenfassung aller Buchungen
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notifications.dailyReport}
                      onChange={(e) => updateSetting('notifications', 'dailyReport', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session-Timeout (Minuten)
                  </label>
                  <input
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ceramic-terracotta"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Passwort-Änderung erforderlich
                      </label>
                      <p className="text-sm text-gray-500">
                        Regelmäßige Passwort-Änderung erzwingen
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.security.requirePasswordChange}
                      onChange={(e) => updateSetting('security', 'requirePasswordChange', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Zwei-Faktor-Authentifizierung
                      </label>
                      <p className="text-sm text-gray-500">
                        Zusätzliche Sicherheit durch 2FA
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.security.twoFactorAuth}
                      onChange={(e) => updateSetting('security', 'twoFactorAuth', e.target.checked)}
                      className="rounded border-gray-300 text-ceramic-terracotta focus:ring-ceramic-terracotta"
                    />
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Key className="h-5 w-5 text-yellow-600" />
                    <div>
                      <h4 className="text-sm font-medium text-yellow-800">Admin-Zugangsdaten</h4>
                      <p className="text-sm text-yellow-700">
                        Standard: admin / layers2024
                      </p>
                      <p className="text-xs text-yellow-600 mt-1">
                        Bitte ändere diese Zugangsdaten in der Produktion!
                      </p>
                    </div>
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