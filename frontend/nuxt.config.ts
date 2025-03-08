// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'nuxt-tailwindcss4'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-27',

  eslint: {
    config: {
      standalone: false,
    },
  },
  colorMode: {
    preference: 'dark',
    storageKey: 'nuxt-color-mode-forced',
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },
})
