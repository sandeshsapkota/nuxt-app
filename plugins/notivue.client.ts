import { notivue } from 'notivue'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(notivue, {
        notifications: {
            global: {
                duration: 4000
            },
        },
        position: 'top-right',
        limit: 20,
        duration: 100,
    })
})
