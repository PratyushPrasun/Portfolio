/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        brandBlue: "#2563eb",   // blue-600
        blueBg: "#020817",      // deep blue-black
      },
      keyframes: {
    caret: {
      "0%, 50%, 100%": { opacity: "1" },
      "25%, 75%": { opacity: "0" },
    },
  },
  animation: {
    caret: "caret 1s infinite",
  },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
