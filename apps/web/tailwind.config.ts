import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#1A2332',
          dark: '#0F1419',
        },
        'sophisticated-grey': '#4A5568',
        'luxury-gold': '#D4AF37',
        'deep-burgundy': '#8B2635',
        'charcoal': '#2D3748',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
