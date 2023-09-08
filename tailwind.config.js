/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    color: {
      white: '#fff',
      green: {
        300: '#67A761', // green 1
        400: '#468A40', // green 2
        500: '#478142', // green 3
        800: '#2C472A', // green dark
        900: '#0F240F' // font color
      },
      // TODO: config font-family
      // fontFamily: { 'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans], },
      fontSize: {
        // text xsm
        'text-xs': [
          '0.375rem',
          {
            fontWeight: 300
          }
        ],
        // text sm
        'text-sm': [
          '0.5rem',
          {
            fontWeight: 300
          }
        ],
        // text md
        'text-base': [
          '0.75rem',
          {
            fontWeight: 300
          }
        ],
        // text lg
        'text-lg': [
          '0.875rem',
          {
            fontWeight: 400
          }
        ],
        // text xlg
        'text-xl': [
          '1.25rem',
          {
            fontWeight: 400
          }
        ],
        // logo
        'text-2xl': [
          '1.375rem',
          {
            fontWeight: 400
          }
        ],
        // h1
        'text-4xl': [
          '2rem',
          {
            fontWeight: 600
          }
        ]
      }
    },
    extend: {}
  },
  plugins: []
}
