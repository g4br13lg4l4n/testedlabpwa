const config = require('./env')
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tested Lab',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: config.production ? '': 'http://cfm.fredzuniga.opalstacked.com/cfm-api/api/v1/',
  },
  /**
  ** Router with auth 
  */
  router: {
    middleware: ['auth']
    // clearValidationErrors
  },

  /**
   * Auth Config 
   */
   auth: {
    redirect: {
      login: '/',
      logout: '/',
      home: '/home'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: "login", method: "post", propertyName: 'token' },
          user: { url: "perfil", method: "get", propertyName: "user" },
          logout: { url: "logout/web", method: "post"}
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  /**
   * PWA config
   */
   pwa: {
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      description: 'Pruebas de laboratorio Tested Lab',
      author: 'Gabriel Galán Méndez',
      mobileApp: true,
      mobileAppIOS: true,
      favicon: true,
      name: 'Tested Lab',
      theme_color: '#ffffff',
      lang: 'es',
      ogType: 'producto',
      ogSiteName: 'Tested Lab',
      ogTitle: 'Tested Lab',
      ogDescription: 'Pruebas de laboratorio Tested Lab',
      nativeUI: true
    },
    manifest: {
      short_name: 'TestedLab',
      name: 'Tested Lab',
      lang: 'es',
      useWebmanifestExtension: false,
      start_url: '/',
      theme_color: '#fff',
      display: 'standalone',
      background_color: '#fff'
    },
    icon: {
      iconSrc: './static/icon.png', 
      cacheDir: './static/icons',
      sizes: [48, 64, 72, 96, 120, 128, 144, 152, 180, 192, 256, 384, 512]
    },
  },
}
