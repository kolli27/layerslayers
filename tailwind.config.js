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
        clay: {
          primary: '#D2691E',
          light: '#E87B3A',
          dark: '#B8611A',
        },
        cream: {
          base: '#FFF8DC',
          light: '#FFFEF7',
          dark: '#F5F0DC',
        },
        earth: {
          brown: '#8B4513',
          light: '#A0522D',
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
          orange: '#FF6B35',
          hover: '#E55A2B',
          gold: '#DAA520',
          'gold-light': '#F4E4A6',
          red: '#C44536',
          'red-light': '#E8A298',
        },
        text: {
          primary: '#2C1810',
          secondary: '#5D4037',
          muted: '#8D6E63',
          light: '#BCAAA4',
        },
        ui: {
          white: '#FFFFFF',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
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
        'gradient-hero': 'linear-gradient(135deg, #FFF8DC 0%, #F5E6D3 50%, #E8D5BB 100%)',
        'gradient-cta': 'linear-gradient(45deg, #FF6B35 0%, #D2691E 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,230,211,0.8) 100%)',
        'gradient-text': 'linear-gradient(45deg, #D2691E 0%, #FF6B35 50%, #C44536 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'clay': '0 4px 6px rgba(210, 105, 30, 0.3)',
        'clay-hover': '0 8px 12px rgba(210, 105, 30, 0.4)',
        'glass': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 12px 24px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}