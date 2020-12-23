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
      screens: {
        'tablet': '640px',  
        'laptop': '1024px',
        'desktop': '1440px',
      },
    
    extend: {
      backgroundImage: theme => ({
        'homepage-heeader': "url('../assets/homepage/hero-bg-desktop.jpg')",
        'homepage-heeader-tablet': "url('../assets/homepage/hero-bg-tablet.jpg')",
        'homepage-heeader-mobile': "url('../assets/homepage/hero-bg-mobile.jpg')",
        'reservation-cta-image': "url('../assets/homepage/ready-bg-desktop.jpg')",
       }),
       fontSize:{
         '3.5xl': '2rem',
         '4.25xl': '2.36rem',
         '4.5xl': '2.5rem'
       },
       lineHeight: {
        '7.5': '1.875rem',
        '10.3': '2.575rem',
        '72': '4.5rem',
       },
       spacing:{
        '13': '3.25rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '20.6': '5.15rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '27.5': '6.875rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '43': '10.75rem',
        '50': '12.5rem',
        '62': '15.5rem',
        '70': '17.5rem',
        '10.5/12': '87.5%'
       },
       width: {
        '77': '76.9%',
      },
      inset: {
        '-17': '-4.35rem',
      },
      height: {
        '90': '51.3rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
