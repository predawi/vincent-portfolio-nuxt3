// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  runtimeConfig: {
    public: {
      BACK_OFFICE_URL: 'https://vincenk.cluster027.hosting.ovh.net/backend/wp-json/wp/v2/'
    }
    // public: {
    //   BACK_OFFICE_URL: 'http://vincent-backend/wp-json/wp/v2/'
    // }
  },

  app: {
    head: {
      title: 'vincent-portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio of Vincent Charamon, experience designer' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#E4A79D' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/scss/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/core/_mixins.scss";'
            + '@import "@/assets/scss/core/_variables.scss";'
            +'@import "@/assets/scss/core/_media-queries.scss";'
            + '@import "@/assets/scss/core/_functions.scss";',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
})
