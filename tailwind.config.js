/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          150: '#EAEFF5',
        },
      }
    },

  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *')
    },
  ],
}

