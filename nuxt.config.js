export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kms',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],
  // Global Scripts
  script: [
    {
      src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      type: 'text/javascript'
    },
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
      type: 'text/javascript'
    },
    {
      src:
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
      type: 'text/javascript'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  /**
     * Server Middleware
     *
     * */
  serverMiddleware: [
    { path: '/', handler: '~/api/index.js' }
  // '~/api/index.js'
  ],
  server: {
    port: 4000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false

  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
