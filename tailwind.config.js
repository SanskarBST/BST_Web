/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF2E2B',
          dark: '#2D2642',
          black: '#050505'
        }
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'], // Sora font set kiya
      }
    },
  },
  plugins: [],
}