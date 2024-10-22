/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        title: ["Bebas Neue", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
        
    },
  },
  plugins: [],
}