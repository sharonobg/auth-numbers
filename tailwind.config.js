/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  purge: ['./src/**/*.tsx'],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/typography')
  ],
  
}


