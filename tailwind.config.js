/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm2': '400px',
      'sm1': '500px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}