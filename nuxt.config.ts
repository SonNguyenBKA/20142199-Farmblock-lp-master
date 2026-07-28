import * as fs from 'fs'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

/**
 * Returns all locales with their corresponding file names from `./locales`.
 */
function getLocales(): { code: string; file: string }[] {
  const files = fs.readdirSync('./locales')

  return files.map((file) => {
    return {
      code: file.split('.')[0],
      file,
    }
  })
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: process.env.APP_TITLE || 'Default Title',
      meta: [
        {
          name: 'description',
          content: process.env.APP_CONTENT || 'Default Content',
        },
        { name: 'fb:app_id', content: '' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no',
        },
        { hid: 'og:image', property: 'og:image', content: '/metaImage.webp' },
        { property: 'title', content: process.env.APP_TITLE || 'Default Title' },
        { property: 'og:title', content: process.env.APP_TITLE || 'Default Title' },
        { hid: 'twitter:image', property: 'twitter:image', content: '/metaImage.webp' },
        { property: 'twitter:title', content: process.env.APP_TITLE || 'Default Title' },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: process.env.APP_CONTENT || 'Default Content',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: process.env.APP_CONTENT || 'Default Content',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        },
      ],
      style: [],
      script: [
        {
          hid: 'gtmHead',
          innerHTML: '',
        },
      ],
      noscript: [],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1',
    },
  },

  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(nodePolyfills())
    },
  },

  css: ['@/assets/scss/index.scss'],
  modules: ['@pinia/nuxt', '@nuxt/image', '@element-plus/nuxt', 'nuxt-lodash', '@nuxtjs/i18n'],

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'],
      ['kebabCase', 'stringToKebab'],
      ['isDate', 'isLodashDate'],
      ['isNil', 'isNil'],
    ],
  },

  i18n: {
    defaultLocale: 'vi',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'vi',
        name: 'Vietnam',
        iso: 'vi-VN',
        file: 'vi.json',
      },
    ],
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  experimental: {
    externalVue: false,
    extends: 'content-wind',
    experimental: {
      watcher: 'chokidar',
    },
  },

  devServer: {
    host: '0.0.0.0',
    port: process.env.LISTEN_PORT || 3000,
  },

  plugins: [
    { src: '~/plugins/aos.client.ts', mode: 'client' },
    { src: './plugins/lenis.client.ts', mode: 'client' },
    { src: './plugins/gsap.ts', mode: 'client' },
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  compatibilityDate: '2025-05-16',
})
