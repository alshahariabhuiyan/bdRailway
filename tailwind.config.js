/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Pacifico': ['Pacifico'],
      'Poppins' : ['Poppins'],
      'DancingScript':['Dancing Script'],
      'Acme': ['Acme']
    }
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}

