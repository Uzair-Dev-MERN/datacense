/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101A32', 
      },
      textColor: {
        primary: '#1E3A8A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'], 
      },
    },
  },
  plugins: [],
};
