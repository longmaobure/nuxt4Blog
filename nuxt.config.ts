// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    storesDirs: ['./app/stores/**']
  }
});
