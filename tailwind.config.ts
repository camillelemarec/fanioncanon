import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Fanion Canon - Basée sur le logo
        'navy': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8190ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#1e3a8a', // Navy principal du logo
          800: '#1e1b4b',
          900: '#0f172a',
        },
        'cream': {
          50: '#fefdfb', // Crème très clair du logo
          100: '#fdf9f3',
          200: '#faf2e7',
          300: '#f6e8d5',
          400: '#f0dcc0',
          500: '#e8d0a8',
          600: '#dcc490',
          700: '#ceb578',
          800: '#c0a660',
          900: '#b29748',
        },
        'accent': {
          yellow: '#fbbf24',
          red: '#ef4444',
        }
      },
      fontFamily: {
        'sans': ['League Spartan', 'system-ui', 'sans-serif'],
        'heading': ['League Spartan', 'system-ui', 'sans-serif'],
        'logo': ['League Spartan', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
