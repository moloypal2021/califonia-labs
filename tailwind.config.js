/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#231F2",
          bg: "#1B1B29",
        },
        accent: {
          1: "#FDD835",
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
    },
  },
  plugins: [],
};
