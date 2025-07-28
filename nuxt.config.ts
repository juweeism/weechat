import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    srcDir: 'src/',
    css: ['~/assets/css/main.css'],
    ssr: false,
    runtimeConfig: {
        public: {
            convexUrl: process.env.NUXT_PUBLIC_CONVEX_URL,
        },
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
})
