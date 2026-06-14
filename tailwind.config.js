/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        midnight: {
          50:  '#eef0fb',
          100: '#dde2f7',
          200: '#bbc5ef',
          300: '#99a8e7',
          400: '#778bdf',
          500: '#556ed7',
          600: '#3b54c4',
          700: '#2e42a0',
          800: '#22317c',
          900: '#162059',
          950: '#0c1130',
        },
        surface: {
          base: '#0d1117',
          card: '#131926',
          elevated: '#1a2236',
          border: '#1e2d45',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fcd34d',
          dark: '#d97706',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99,102,241,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
};
