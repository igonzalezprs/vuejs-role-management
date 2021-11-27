module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundGray: '#F9F9F8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
