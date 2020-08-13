export default {
  mode: 'universal',

  target: 'server',

  head: {
    title: 'Nuxt boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt boilerplate',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: ['~/plugins/click-outside', '~/plugins/vue-fragment'],

  // Auto-Imports all components inside the common components directory
  components: ['~/components/common'],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth'],

  // Axios configurations
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? '' : '',
  },

  // Auth strategies
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '', method: 'post', propertyName: 'token' },
          logout: { url: '', method: 'post' },
          user: { url: '', method: 'get', propertyName: 'user' },
        },
      },
    },
  },

  // Build options
  build: {},

  // Public runtime configurations
  publicRuntimeConfig: {
    appName: 'Nuxt Boilerplate',
  },

  loading: { color: '#000' },
}
