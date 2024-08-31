/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        playwrite: ["Playwrite FR Trad", "cursive"],
        Ubuntu:[ "Ubuntu", 'sans-serif'],
      },
     backgroundImage: {
      banner: "url('./src/Components/HomePage/images/banner1.png')",
    },
    
    },
  },
  plugins: [],
}

