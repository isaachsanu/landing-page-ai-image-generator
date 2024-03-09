/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "gradient-primary": `linear-gradient(to right, #24D7FE, #A332FE)`
      },
      text: {
        "gradient-primary": `linear-gradient(to right, #24D7FE, #A332FE)`
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        white: '#FCFDF9',
        primary: '#16282E',
      },
    },
  },
  plugins: [],
};
