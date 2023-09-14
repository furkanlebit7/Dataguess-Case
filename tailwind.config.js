/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        grad: "linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);",
      },
      colors: {
        grad: "#0093e9",
      },
    },
  },
  plugins: [],
};
