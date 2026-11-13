export default defineNuxtConfig({
  compatibilityDate: '2026-11-03',
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
    },
  },
})
