/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'brand-mexican-pink': '#e4007c',
      'brand-pink': '#c1066c',
    },
    fontFamily: {
      'memesique': ['Memesique-Regular'],
    },
    extend: {},
  },
  plugins: [],
}
