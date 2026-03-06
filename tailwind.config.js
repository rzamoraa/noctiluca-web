/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noctiluca: {
          dark: '#020B0F',
          primary: '#4AB2D4',
          secondary: '#8FC1CF',
          accent: '#00D5FF',
        }
      },
    },
  },
  plugins: [],
}
