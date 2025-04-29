/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      letterSpacing: {
        'custom': '0.05em',
      },
      colors: {
        // Alternative way with descriptive names:
        dark: '#252527',
        black: '#151618',
        green: '#149477',
        'light-gray': '#ECECEF',
        'light-green': '#DEF7E5',
        'white-green': '#F3F9F8',
        'dark-green':'#177C65',
        'light-yellow':'#FFF7E3',
        'medium-yellow':'#FDEBBB'
      }
    },
  },
  plugins: [],
}