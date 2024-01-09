export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'no',
        name: 'norsk'
      },
      {
        code: 'en',
        name: 'English'
      }
    ],
    strategy: 'prefix',
    defaultLocale: 'no',

  },
  content: {
    locales: ['no', 'en'],
    markdown: {
      anchorLinks: false
    }
  }
})