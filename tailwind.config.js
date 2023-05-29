// import formKitTailwind from '@formkit/themes/tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [formKitTailwind],
}
