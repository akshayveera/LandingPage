/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'rg': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'rg-btm': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
      },
      fontSize: {
        '56': '56px',
      },
    },
  },
  plugins: [],
}

