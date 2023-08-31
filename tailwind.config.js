
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container':'1320px'
      },
      colors:{
        'primary':'#F95C19'
      },
      fontFamily:{
        'Oxanium':['Oxanium', 'sans-serif'],
        'Raleway':['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    
  ],

}