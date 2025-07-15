/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PTSerif: ["PTSerif", "sans-serif"],
        Nexa: ["Nexa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
