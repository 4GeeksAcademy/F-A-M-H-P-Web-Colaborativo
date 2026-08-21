/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        lino: "#F7F2EA",
        espresso: "#35251A",
        camello: "#C08552",
        terracota: "#9C4A2C",
        oliva: "#6B7150",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}

