/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens:{
        'x-sm':{'min':'350px','max':'480px'}
      }
    },
  },
  plugins: [],
}

