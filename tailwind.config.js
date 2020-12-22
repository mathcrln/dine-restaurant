const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff', 
      beaver: '#9e7f66', 
      codGray: '#111111',
      mirage: '#17192b',
      EbonyClay: '#242b37',
      ShuttleGray: '#5c6779'
    },
    fontFamily: {
      main: ['Spartan', "sans-serif"]
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'smaller': '0.93rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
    },
    letterSpacing: {
      tightest: '-.8px',
      tighter: '-0.5px',
      tight: '-0.22px',
      normal: '-0.19px',
      wide: '2px',
    },
    extend: {
      backgroundImage: theme => ({
        'homepage-heeader': "url('../assets/homepage/hero-bg-desktop.jpg')",
        'reservation-cta-image': "url('../assets/homepage/ready-bg-desktop.jpg')",
       }),
       lineHeight: {
        '72': '4.5rem',
       },
       padding:{
         '13': '3.25rem'

       },
       width: {
        '77': '76.9%',
      },
    },
    height: {
      '90': '51.3rem'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
