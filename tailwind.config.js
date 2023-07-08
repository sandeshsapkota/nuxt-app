/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#436172',
          50: '#A3BCC9',
          100: '#97B2C2',
          200: '#7D9FB3',
          300: '#638CA3',
          400: '#52778C',
          500: '#436172',
          600: '#2E434F',
          700: '#19252B',
          800: '#050708',
          900: '#000000',
          950: '#000000'
        },
      }

    },
  },
  plugins: [],
}
