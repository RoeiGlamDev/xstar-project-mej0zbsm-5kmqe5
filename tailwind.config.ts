const { defineConfig } = require('tailwindcss')
module.exports = defineConfig({
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#ff69b4',
          DEFAULT: '#ff1493',
          dark: '#c71585',
        },
        black: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
});