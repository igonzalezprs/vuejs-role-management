module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundGray: '#F9F9F8',
        accent: '#3EB9C8',
        darkGray: '#CDCDCD',
      },
      minHeight: {
        card: '400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
