// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/the-world-today/'
    },
    postcss:{
        plugins:{
            tailwindcss:{},
            autoprefixer:{}
        }
    },
    css:[
        '@/assets/css/main.css',
        '@/assets/css/main.scss'
    ]
})
