/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}",
  "./src/renderer/src/components/*.{html,js,vue}",
  "./src/renderer/src/*.{html,js,vue}",
  "./src/renderer/src/components/*.{html,js,vue}"
  
],
  theme: {
    extend: {},
  },
  plugins: [],
}