/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': "'League Spartan', sans-serif"
      },
      colors: {
        'Bground': 'hsl(180, 52%, 96%)',
        'f-tablets': 'hsl(180, 31%, 95%)',
        'primary' : 'hsl(180, 29%, 50%)',
        'published' : 'hsl(180, 8%, 52%)',
        'featured': 'hsl(180, 14%, 20%)'
      }
    },
  },
  plugins: [],
}
