/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        fontTH01:"'Prompt',' sans-serif'",
        fontTH02: "'Mali',  cursive"
      },
      colors:{
        primary: '#0F172A',
        'regal-blue': '#243c5a',
        'secondary1': '#1E293B',
        'secondary2': '#F4F5F5',
        'natural01': '#FFCD4B',
        'natural02': '#9CE425',
        'natural03': '#FF5C74',
        'natural04': '#18BCEB',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated'),
  ],
}
