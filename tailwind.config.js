/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0e7490', // Um tom de ciano/azul escuro
        'secondary': '#111827', // Fundo quase preto
        'light-gray': '#d1d5db', // Texto claro
        'accent': '#22d3ee', // Destaques em ciano vibrante
      }
    },
  },
  plugins: [],
}