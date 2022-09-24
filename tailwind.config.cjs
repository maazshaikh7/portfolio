/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}','index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: '100%' },
          '70%': { opacity: '70%' },
          '100%': { opacity: '0%' },
        }
      },
      animation: {
        'fade-out': 'fadeOut 4s linear forwards'
      }
    },
  },
  plugins: [],
}
