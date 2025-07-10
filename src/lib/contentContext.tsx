'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { WebsiteContent } from '@/types'

interface ContentContextType {
  content: WebsiteContent | null
  loading: boolean
  error: string | null
  refreshContent: () => Promise<void>
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<WebsiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchContent = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/content')
      if (response.ok) {
        const data = await response.json()
        setContent(data)
      } else {
        throw new Error('Failed to fetch content')
      }
    } catch (error) {
      console.error('Error loading content:', error)
      setError('Failed to load content')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContent()
  }, [])

  const refreshContent = async () => {
    await fetchContent()
  }

  return (
    <ContentContext.Provider value={{ content, loading, error, refreshContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}