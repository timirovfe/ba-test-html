/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Circe', 'sans-serif']
      },
      spacing: {
        '112': '28rem'
      },
      colors: {
          darkBlue: '#3865A7',
          footerColor: '#2F2F2F'
      }
    },
  },
  plugins: [],
}

