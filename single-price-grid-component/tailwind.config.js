const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    extend: {
      colors: {
        yellow: {
          600: "#c0df34",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
