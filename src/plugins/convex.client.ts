import { createConvexVue } from '@convex-vue/core'

// runs on client only
export default defineNuxtPlugin((nuxtApp) => {
    const convex = createConvexVue({
        convexUrl: useRuntimeConfig().public.convexUrl as string || '',
    })

    nuxtApp.vueApp.use(convex)
})
