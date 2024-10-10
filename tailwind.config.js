/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Solo tus archivos de componentes y páginas
    './index.html',  // Tu archivo principal
    './contactame.html', // Otras páginas HTML que uses
    './sobre-mi.html',
    './servicios.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

