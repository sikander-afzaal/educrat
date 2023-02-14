const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero-bg.png')",
      },
      fontFamily: {
        sans: ["GT Walsheim Pro", ...defaultTheme.fontFamily.sans],
        sofia: ["Sofia Pro"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(300px,1fr))",
      },
      colors: {
        dusk: "#4F547B",
        nightBlue: "#140342",
        mercury: "#E7E7EC",
        darkIndigo: "#1A064F",
        sunglow: "#F9CE35",
        orange: "#E8543E",
        purple: "#6440FB",
      },
      boxShadow: {
        shadow1: "0px 6px 15px rgba(64, 79, 104, 0.05)",
        shadow2: "0px 60px 120px rgba(9, 14, 24, 0.2)",
        shadow3: "0px 25px 10px rgba(1, 33, 58, 0.07)",
        shadow4: "0px 25px 70px rgba(1, 33, 58, 0.07)",
      },
    },
  },
  plugins: [],
};
