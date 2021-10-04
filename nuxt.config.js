export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate : 'nuxtBNB: %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Next Image module https://image.nuxtjs.org/components/nuxt-img
    ['@nuxt/image', {
      provider: 'static',
      dir: "assets/images",
    }],
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // custom Addition for deployment
  // mode: 'static',
  target: 'static',
  ssr: true,

  // custom Addition Prefetch Enabing/Disabling Globally
  router : {
    prefetchLinks : false,
    base: '/nuxtBNB',
    
  }
}
