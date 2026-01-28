/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          light: '#FF8E8E',
          dark: '#E85454',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          light: '#6FD9D1',
          dark: '#3BB5AC',
        },
        accent: {
          purple: '#A78BFA',
          yellow: '#FCD34D',
          pink: '#F472B6',
          blue: '#60A5FA',
        },
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          lighter: '#334155',
        }
      },
      fontFamily: {
        display: ['Clash Display', 'Inter', 'sans-serif'],
        body: ['General Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            'box-shadow': '0 0 20px rgba(255, 107, 107, 0.5), 0 0 30px rgba(78, 205, 196, 0.3)',
          },
          'to': {
            'box-shadow': '0 0 30px rgba(255, 107, 107, 0.7), 0 0 40px rgba(78, 205, 196, 0.5)',
          },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      },
    },
  },
  plugins: [],
}