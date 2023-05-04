/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        inputcolor: 'rgb(235, 235, 235, 0.59)',
        categorycolor: 'rgb(235, 235, 235, 0.3)',
        twittercolor: '#1DA1F2',
      },
    },
  },
  plugins: [],
}