// module.exports = {
//   plugins: [require('tailwindcss'), require('autoprefixer')],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9FE870',
        secondary: '#121511',
        tertiary: '#B5B6BC',
        tertiary_dark: '#181818',
        accent: '#163300',
        live: '#E71D36',
      },

      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
