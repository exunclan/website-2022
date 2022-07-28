/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2977F5",
        accent: "#42587B",
        "accent-dark": "#456484",
        "btn-text": "#EEF4FF",
        "light-input": "#E0ECFF",
      },
      fontFamily: {
        sans: ["SF Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
