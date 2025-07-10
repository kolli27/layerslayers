/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - matching the HTML design
        primary: '#FF8C42',
        'primary-dark': '#E66A2C',
        secondary: '#4A5568',
        accent: '#FFA726',
        
        // Background colors
        background: '#FEFCF8',
        'background-light': '#FFF8F0',
        
        // Text colors
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568',
        'text-light': '#718096',
        
        // UI colors
        border: '#E2E8F0',
        
        // Legacy color system (keeping for backward compatibility)
        clay: {
          primary: '#FF8C42',
          light: '#FFA726',
          dark: '#E66A2C',
        },
        cream: {
          base: '#FFF8F0',
          light: '#FEFCF8',
          dark: '#F5F0DC',
        },
        earth: {
          brown: '#4A5568',
          light: '#718096',
        },
        sage: {
          green: '#9CAF88',
          light: '#B8C5A6',
        },
        beige: {
          warm: '#F5E6D3',
          dark: '#E8D5BB',
        },
        accent: {
          orange: '#FF8C42',
          hover: '#E66A2C',
          gold: '#FFA726',
          'gold-light': '#F4E4A6',
          red: '#C44536',
          'red-light': '#E8A298',
        },
        text: {
          primary: '#2D3748',
          secondary: '#4A5568',
          muted: '#718096',
          light: '#BCAAA4',
        },
        ui: {
          white: '#FFFFFF',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E2E8F0',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FEFCF8 0%, rgba(255, 140, 66, 0.05) 100%)',
        'gradient-cta': 'linear-gradient(45deg, #FF8C42 0%, #E66A2C 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,248,240,0.8) 100%)',
        'gradient-text': 'linear-gradient(45deg, #FF8C42 0%, #FFA726 50%, #E66A2C 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'clay': '0 4px 6px rgba(255, 140, 66, 0.3)',
        'clay-hover': '0 8px 12px rgba(255, 140, 66, 0.4)',
        'glass': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 12px 24px rgba(0, 0, 0, 0.15)',
        'small': '0 2px 4px rgba(255, 140, 66, 0.1)',
        'medium': '0 4px 12px rgba(255, 140, 66, 0.15)',
        'large': '0 8px 24px rgba(255, 140, 66, 0.2)',
      },
    },
  },
  plugins: [],
}