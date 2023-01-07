/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sidebar: "4px 4px 15px rgba(44, 226, 194, 0.2)",
      },
      colors: {
        teal: "#2CE2C2",
      },
    },
  },
  plugins: [],
};
