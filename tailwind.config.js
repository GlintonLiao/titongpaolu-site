/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1fr-5fr': '1fr minmax(0,5fr)',
      }
    },
  },
  plugins: [],
}
