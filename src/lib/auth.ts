// Simple authentication system for admin access
// In production, use proper authentication like NextAuth.js

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'layers2024' // Change this in production!
}

export const verifyAdminCredentials = (username: string, password: string): boolean => {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('admin_authenticated') === 'true'
}

export const login = (username: string, password: string): boolean => {
  if (verifyAdminCredentials(username, password)) {
    localStorage.setItem('admin_authenticated', 'true')
    return true
  }
  return false
}

export const logout = (): void => {
  localStorage.removeItem('admin_authenticated')
}

export const requireAuth = (): boolean => {
  const authenticated = isAuthenticated()
  if (!authenticated && typeof window !== 'undefined') {
    window.location.href = '/admin/login'
  }
  return authenticated
}