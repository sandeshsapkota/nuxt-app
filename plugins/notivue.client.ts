import { notivue } from 'notivue'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(notivue, {
        notifications: {
            global: {
                duration: 3000
            },
        },
        position: 'bottom-right',
        limit: 1,
    })
})
