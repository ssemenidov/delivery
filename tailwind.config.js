module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {grey: '#8D8D8D', black: '#2C2C2C', orange: '#FF754A'},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      orange: '#FF754A',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
