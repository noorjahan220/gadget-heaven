/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bannerColor : 'rgba(149, 56, 226, 1)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

