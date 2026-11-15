export default defineNuxtConfig({
  compatibilityDate: '2026-11-03',
  ssr: true,
  routeRules: {
    '/editor': { ssr: false },
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
    },
  },
})
