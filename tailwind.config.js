/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        large: "80px", // Adjust the size as per your requirement
        small : "30px"
      },

    },
  },
  plugins: [],
}

