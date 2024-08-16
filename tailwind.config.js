/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        primary: '#BE185D',
        'light-pink': '#fce7f3',
        'light-primary': '#DA4861',
        secondary: '#7a017a',
        'secondary-dark': '#5a065a',
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
