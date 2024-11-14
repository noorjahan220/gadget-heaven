/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bannerColor : 'rgba(149, 56, 226, 1)',
        btnColor : 'rgba(149, 56, 226, 1)',
        backGround : 'rgba(9, 8, 15, 0.05)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

