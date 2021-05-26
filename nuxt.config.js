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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // Simple usage
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  /*
  ** Auth Nuxt module configuration
  ** See https://auth.nuxtjs.org/api/options.html
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/apis/user/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: true,
          // {
          //   url: '/auth/logout',
          //   method: 'post'
          // },
          user: {
            url: '/apis/user/data/userdata',
            method: 'get',
            propertyName: 'user'
          }
        },
        tokenRequired: true
      },
      google: {
        // client_id: '938212626796-7k3gjbuck9mad9qodp1hcbbvt2vk6p9s.apps.googleusercontent.com'
        client_id: '928335201947-0sbes1i6c5mda66e5r12t539ll3j1ftq.apps.googleusercontent.com'
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/notes'
    },
    plugins: [
      '~plugins/auth.js'
    ]

  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  publicRuntimeConfig: {
    axios: {
      // browserBaseURL: 'https://www.spiinge.com/'
      // baseURL: 'http://localhost:3000'
      // baseURL: '/'
      baseURL: process.env.NODE_ENV === 'production' ? 'https://www.spiinge.com/' : 'http://localhost:3000'
    },
    // baseUrl: 'https://www.spiinge.com/'
    // baseURL: 'http://localhost:3000'
    // baseURL: '/'
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.spiinge.com/' : 'http://localhost:3000'
  },

  dev: {
    dev: process.env.NODE_ENV !== 'production'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: {
    color: 'blue',
    height: '2px'
  }
}
