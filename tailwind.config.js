/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#155263',
        secondary: '#FFC93C',
        ternary: '#FF9A3C',
      },
    },
  },
  plugins: [],
};
