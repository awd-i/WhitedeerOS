/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'p5-black': '#000000',
        'p5-white': '#ffffff',
        'p5-gray': '#333333',
        'p5-light-gray': '#cccccc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Placeholder, assuming Inter or system font
        display: ['Impact', 'sans-serif'], // For that bold P5 look
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
