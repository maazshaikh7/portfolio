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
        },
        float: {
          '0%, 100%': { transform: 'translateY(20px)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        'fade-out': 'fadeOut 4s linear forwards',
        'float': 'float 2.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
