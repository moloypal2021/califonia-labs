/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#231F20",
          bg: "#1B1B29",
        },
        accent: {
          1: "#FDD835",
        },
        blue: {
          1: "#0061FF",
        },
        light: {
          1: "#E4E4E4",
        },
      },
      container: {
        center: true,
        padding: "20px",
      },
      screens: {
        "2xl": "1336px",
      },
      fontFamily: {
        "sf-pro": ["SF Pro Display", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        heros:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../images/heros-bg.jpg')",
      },
    },
  },
  plugins: [],
};
