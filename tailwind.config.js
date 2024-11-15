/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Main sans-serif font
        p22: ['P22', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
        "source-sans": ["Source Sans 3", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary1: '#e43a15',
        primary: '#BE185D',
        'light-pink': '#fce7f3',
        'light-primary': '#DA4861',
        'primary-dark': '#6F0632',
        secondary: '#080a14',
        'secondary-dark': '#5a065a',
        muted: '#7f8296',
        "errie-black": "#252525",
        "risd-blue": "#5b5af7",
        "cadet-gray": "#919eab",
        jet: "#2c2c2c",
      },
      backgroundImage: {
        "grad-theme-135":
          "linear-gradient(135deg, rgba(241, 178, 168, 1) 0%, rgb(236, 87, 168, 1) 49%, rgba(91, 90, 247, 1) 100%)",
      },
      boxShadow: {
        navbar:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
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
