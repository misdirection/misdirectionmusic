/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
   theme: {
    extend: {
      colors: {
        brand: "#47D05D",
        background: "#121212",
        header: "#050505",
        hover: "#313131",
        textLight: "#FFFFFF",
        textFaded: "#ABABAB",
        border: "#313131",
      },
      dropShadow: {
        playButtons: "0 10px 20px rgba(139, 92, 246, 0.5)",
      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px;",
      },
    },
  },
  plugins: [],
};