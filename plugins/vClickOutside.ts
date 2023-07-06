import vClickOutside from "v-click-outside"


export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(vClickOutside)
})
