// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: '我的 Nuxt 博客',
      meta: [{ name: 'description', content: '这是一个 Nuxt4 博客示例' }]
    }
  },
  // modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/content'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    storesDirs: ['./app/stores/**']
  }
});
