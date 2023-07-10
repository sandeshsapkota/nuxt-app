export default defineNuxtConfig({
  app: {
    head: {
      title: 'Coupon Wall',
    }
  },
  modules: ['@formkit/nuxt'],
  css: ['~/assets/sass/app.scss','notivue/notifications.css', 'notivue/animations.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
export  {

}
