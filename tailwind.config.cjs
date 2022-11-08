/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#D4D9DE',
      mainBlack: '#222',
      white: '#FFF',
      green: '#00AD09',
      red: '#FF0000',
      textGray: '#909090'
    },
    fontFamily: {
      main: 'IBM Plex Sans, sans-serif'
    }
  },
  plugins: [],
}