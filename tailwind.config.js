/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        "alomost-white": "#fafafa",
        "medium-gray": "#696969",
        "almost-black": "#141414",
      },
    },
  },
  plugins: [],
};
