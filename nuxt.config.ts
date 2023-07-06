export default defineNuxtConfig({
  modules: [],
  css: ['~/assets/sass/app.scss','notivue/notifications.css', 'notivue/animations.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: "@/plugins/vClickOutside", ssr: false }
  ],

})
