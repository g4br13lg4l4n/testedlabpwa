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
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:'57x57', type: 'image/png', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes:'60x60', type: 'image/png', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes:'72x72', type: 'image/png', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes:'76x76', type: 'image/png', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes:'114x114', type: 'image/png', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes:'120x120', type: 'image/png', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes:'144x144', type: 'image/png', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes:'152x152', type: 'image/png', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes:'180x180', type: 'image/png', href: '/apple-icon-180x180.png' },
      { rel: 'icon', sizes:'192x192', type: 'image/png', href: '/android-icon-192x192.png' },
      { rel: 'icon', sizes:'96x96', type: 'image/png', href: '/android-icon-96x96.png' },
      { rel: 'icon', sizes:'72x72', type: 'image/png', href: '/android-icon-72x72.png' },
      { rel: 'icon', sizes:'48x48', type: 'image/png', href: '/android-icon-48x48.png' },
      { rel: 'icon', sizes:'36x36', type: 'image/png', href: '/android-icon-36x36.png' },
      { rel: 'manifest', href: '/manifest.json' }
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
    '@nuxtjs/manifest',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: config.production ? '': 'http://localhost:3000/api/v1',
  },

  /**
   * Auth Config 
   */
   auth: {
    redirect: {
      login: '/',
      logout: '/',
      home: 'home'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: "users/auth", method: "post", propertyName: 'token' },
          user: { url: "users/me", method: "get", propertyName: "user" },
          logout: { url: "users/logout", method: "get" }
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
      purpose: 'maskable',
      cacheDir: './static/icons',
      sizes: [48, 64, 72, 96, 120, 128, 144, 152, 180, 192, 256, 384, 512]
    },
  },
}
