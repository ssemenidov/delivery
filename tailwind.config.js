const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    textColor: (theme) => ({
      ...theme('colors'),
      gray1: '#8D8D8D',
      black1: '#2C2C2C',
      orange1: '#FF754A',
    }),

    backgroundColor: (theme) => ({
      ...theme('colors'),
      orange1: '#FF754A',
      gray1: '#8D8D8D',
      black1: '#2C2C2C',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),

      orange1: '#FF754A',
      gray1: '#8D8D8D',
      black1: '#2C2C2C',
    }),

    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['DEFAULT, active'],
      textColor: ['DEFAULT, active'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
