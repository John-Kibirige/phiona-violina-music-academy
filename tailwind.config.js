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
      keyframes: {
        'menu-span-1': {
          '0%': { transform: 'translateY(0px)' },
          '30%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(10px) rotate(45deg)' },
        },
        'menu-span-1-reverse': {
          '100%': { transform: 'translateY(0px)' },
          '30%': { transform: 'translateY(10px)' },
          '0%': { transform: 'translateY(10px) rotate(45deg)' },
        },
        'menu-span-2': {
          '0%': { transform: 'translateY(0px)', visibility: 'visible' },
          '30%': { transform: 'translateY(0px)', visibility: 'hidden' },
          '100%': { transform: 'translateY(0px)', visibility: 'hidden' },
        },
        'menu-span-2-reverse': {
          '100%': { transform: 'translateY(0px)', visibility: 'visible' },
          '30%': { transform: 'translateY(0px)', visibility: 'hidden' },
          '0%': { transform: 'translateY(0px)', visibility: 'hidden' },
        },
        'menu-span-3': {
          '0%': { transform: 'translateY(0px)' },
          '30%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(-10px) rotate(-45deg)' },
        },
        'menu-span-3-reverse': {
          '100%': { transform: 'translateY(0px)' },
          '30%': { transform: 'translateY(-10px)' },
          '0%': { transform: 'translateY(-10px) rotate(-45deg)' },
        },
        menu: {
          '0%': { transform: 'translateX(100%)', visibility: 'hidden' },
          '100%': { transform: 'translateX(0%)', visibility: 'visible' },
        },
        'menu-reverse': {
          '0%': { transform: 'translateX(0%)', visibility: 'visible' },
          '100%': { transform: 'translateX(100%)', visibility: 'hidden' },
        },
      },
      animation: {
        'menu-span-1': 'menu-span-1 0.1s ease-in forwards',
        'menu-span-2': 'menu-span-2 0.1s ease-in forwards',
        'menu-span-3': 'menu-span-3 0.1s ease-in forwards',
        'menu-span-1-reverse': 'menu-span-1-reverse 0.1s ease-in forwards',
        'menu-span-2-reverse': 'menu-span-2-reverse 0.1s ease-in forwards',
        'menu-span-3-reverse': 'menu-span-3-reverse 0.1s ease-in forwards',
        menu: 'menu 0.1s ease-in forwards',
        'menu-reverse': 'menu-reverse 0.1s ease-in forwards',
      },
    },
  },
  plugins: [],
};
