/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'black-ops': ['"Black Ops One"', 'sans-serif'],
        'creepster': ['Creepster', 'cursive'],
        'black-han-sans': ['"Black Han Sans"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'nosifer': ['"Nosifer"', 'cursive'],
      },
    },
  },
  plugins: [],
}
