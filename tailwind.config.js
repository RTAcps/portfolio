/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#373764',
        'dark-color': '#0C2D48',
        'midnight-color': '#145DA0',
        'blue': '#2E8BC0',
        'light-color': '#B1D4E0'
      },
    },
  },
  plugins: [],
  config: {
    standalone: true,
  }
}

