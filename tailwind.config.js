/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      backgroundImage: {
        'bgmain': "url('./src/assets/bg.png')",
        'hero': "url('./src/assets/img-header-main.png')",

      }
    }
  },
  plugins: [],
}

