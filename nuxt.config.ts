// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true, hmr: { overlay: true } },
  app: {
    head: {
      title: '我的 Nuxt 博客',
      meta: [{ name: 'description', content: '这是一个 Nuxt4 博客示例' }]
    }
  },
  // components: [
  //   {
  //     path: '~/components/articles',
  //     pathPrefix: false
  //   }
  // ],
  // modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/icon'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    storesDirs: ['./app/stores/**']
  },
  content: {
    build: {
      markdown: {
        toc: {
          title: '大纲',
          depth: 3,
          searchDepth: 9
        }
      }
    }
    // highlight: {
    //   theme: 'github-light', // 可以换 "github-light", "nord", "dracula"
    //   preload: ['ts', 'js', 'vue', 'json', 'html', 'css']
    // }
  }
});
