/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F3F2EE',
        'canvas-card': '#FAF9F6',
        surface: '#FCFBF9',
        charcoal: {
          950: '#0C0C0C',
          900: '#121212',
          800: '#1A1A18',
          700: '#2A2A26',
          600: '#4A4944',
          500: '#6B6A66',
          400: '#8E8D88',
          300: '#B8B7B2',
          200: '#DCDAD4',
          100: '#ECEAE4',
        },
        ink: '#111110',
        muted: '#6B6A66',
        accent: {
          DEFAULT: '#E53935',
          dark: '#D93829',
          light: '#FF6B5E',
          soft: '#FFF0EE',
        },
        verified: '#1DA1F2',
        terminal: {
          bg: '#0E1117',
          green: '#00FF66',
          amber: '#FFB800',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        hand: ['"Caveat"', 'cursive'],
        retro: ['"VT323"', '"Silkscreen"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'tactile': '0 4px 0 0 #121212',
        'tactile-hover': '0 2px 0 0 #121212',
        'tactile-lg': '0 8px 0 0 #121212',
        'dome': 'inset 0 4px 6px rgba(255,255,255,0.4), 0 12px 0 #991B1B, 0 16px 20px rgba(0,0,0,0.3)',
        'dome-pressed': 'inset 0 4px 8px rgba(0,0,0,0.3), 0 3px 0 #991B1B, 0 6px 10px rgba(0,0,0,0.2)',
        'pill': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
