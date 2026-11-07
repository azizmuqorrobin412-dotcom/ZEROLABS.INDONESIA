/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        cream: {
          50: '#fffdf9',
          100: '#faf5ec',
          200: '#f3eadb',
          300: '#e8dac4',
          400: '#d6c1a1',
          500: '#bfa37f',
        },
        espresso: {
          50: '#f7f2ee',
          100: '#ece2d9',
          200: '#d8c6b5',
          300: '#b8a08a',
          400: '#917762',
          500: '#6f5542',
          600: '#5a4335',
          700: '#46342a',
          800: '#33251e',
          900: '#22180f',
          950: '#140d08',
        },
        terracotta: {
          50: '#fdf3ee',
          100: '#fbe3d6',
          200: '#f6c3a9',
          300: '#efa07a',
          400: '#e5804f',
          500: '#d4663a',
          600: '#b5532a',
          700: '#94421f',
          800: '#733419',
          900: '#5a2a15',
        },
        sage: {
          50: '#f3f7f1',
          100: '#e3ecdf',
          200: '#c8d9c2',
          300: '#a3bd9b',
          400: '#7fa079',
          500: '#62845c',
          600: '#4d6b48',
          700: '#3d5539',
          800: '#2f4230',
          900: '#22311f',
        },
        amber: {
          50: '#fef9ec',
          100: '#fcefcb',
          200: '#f9dd94',
          300: '#f5c75e',
          400: '#efb036',
          500: '#d9911c',
          600: '#b8701a',
          700: '#8f5418',
          800: '#6e4116',
          900: '#4f2f12',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(34,24,15,0.05), 0 8px 24px rgba(34,24,15,0.07)',
        lift: '0 2px 6px rgba(34,24,15,0.06), 0 24px 48px -12px rgba(34,24,15,0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%,100%': {
            transform: 'translateY(0) rotate(-4deg)',
          },
          '50%': {
            transform: 'translateY(-8px) rotate(-2deg)',
          },
        },
        steam: {
          '0%': {
            opacity: '0',
            transform: 'translateY(6px)',
          },
          '50%': { opacity: '0.7' },
          '100%': {
            opacity: '0',
            transform: 'translateY(-14px)',
          },
        },
      },
      animation: {
        'fade-up':
          'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        float: 'float 6s ease-in-out infinite',
        steam: 'steam 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
