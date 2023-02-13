const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GT Walsheim Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        nightBlue: "#140342",
        mercury: "#E7E7EC",
        darkIndigo: "#1A064F",
        sunglow: "#F9CE35",
      },
    },
  },
  plugins: [],
};
