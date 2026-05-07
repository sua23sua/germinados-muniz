/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        musgo:   '#3a5a2a',
        hoja:    '#5c8040',
        brote:   '#8db86a',
        niebla:  '#c8d8b4',
        crema:   '#f7f3ec',
        caliza:  '#ede8df',
        corteza: '#4a3820',
        tierra:  '#7a5c38',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
