/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
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
        fontTH:"'Prompt', sans-serif"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
