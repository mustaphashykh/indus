/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.5rem',
      }, width: {
        'section2-image': '30rem',
        'section3-card' : '35rem',
        'section3-slider-card': '73rem',
      }
    },
  },
  plugins: [],
}