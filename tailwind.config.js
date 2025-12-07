/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: "#1F2544", accent: "#DC3C3C", mellow: "#F4F6FB" }
    }
  },
  plugins: [],
}