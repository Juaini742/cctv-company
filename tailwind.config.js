/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        round: "0 0 10px rgba(0, 0, 0, 0.2)",
        roundM: "0 0 10px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        primary: "#02346A",
        secondary: "#677791",
      },
    },
  },
  plugins: [],
};
