/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2977F5",
        accent: "#456484",
        "btn-text": "#EEF4FF",
      },
    },
  },
  plugins: [],
};
