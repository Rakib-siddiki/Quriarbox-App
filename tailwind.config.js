
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
        'primary':'#F95C19',
        'secondary':'#464558',
        'card-p':'#7B7A8B'
      },
      fontFamily:{
        'Oxanium':['Oxanium', 'sans-serif'],
        'Raleway':['Raleway', 'sans-serif']
      },
      backgroundImage:{
        'banner-bg':'url(./assets/images/Nav&Banner/banner image.png)',
        'delivery-bg':'url(./assets/images/delivery/delivery.png)',
      }
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss'
  ],

}