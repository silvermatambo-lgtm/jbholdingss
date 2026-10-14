/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#E85D04',
          600: '#d14e03',
          700: '#b03d02',
          800: '#8a2e02',
          900: '#6b2302',
        },
        stone: {
          50:  '#f5f3ef',
          100: '#ece8e0',
          200: '#d8d0c2',
          300: '#bfb29e',
          400: '#a39178',
          500: '#8c7460',
          600: '#735e4e',
          700: '#5c4a3e',
          800: '#2d2926',
          900: '#1a1612',
        },
      },
    },
  },
  plugins: [],
};
