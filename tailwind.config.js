/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "primary-bg":"#070707",
      },
      backgroundImage:{
        "graident":"linear-gradient(to right, #ff9680, #fcac11)",
      },
      colors:{
        "primary-orange":"#fcac11",
        "primary-text":"#202327",
        "graident":"linear-gradient(to right, #ff9680, #fcac11)",
        "white":"#ffffff"

      },
      padding:{
        "web":"10px 50px",
        "mobile":"8px 20px"
      }
    },
  },
  plugins: [],
}

