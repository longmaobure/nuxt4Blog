// nuxt.config.js
export default defineNuxtConfig({
  nitro: { preset: 'static' }, // 生成纯静态站点
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true, hmr: { overlay: true } },
  dev: true,
  devServer: {
    host: 'localhost',
    port: 8080, // 修正：port 而不是 prot
    https: true
  },
  app: {
    baseURL: '/nuxt4Blog/',
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
  },
  vite: {
    server: {
      host: true,
      port: 8080, // Vite dev server（HMR）端口
      hmr: {
        overlay: true
        // 如果浏览器访问的地址/端口与 vite 实际监听不一致，可显式指定 clientPort
        // clientPort: 8080
      },
      watch: {
        // 根据需要启用轮询
        // usePolling: true,
        // interval: 300
      }
    }
  }
});
