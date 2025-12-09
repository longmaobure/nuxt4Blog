import path from 'node:path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { DEFAULT_LANG } from './config/constant';
import { currentLocales } from './config/i18n';
import postcssConfig from './postcss.config';

export default defineNuxtConfig({
  devtools: { enabled: false }, // 生产构建时禁用以节省内存
  modules: [
    '@nuxtjs/i18n',
    '@vant/nuxt',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@vite-pwa/nuxt'
  ],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    // 配置默认图片优化设置
    quality: 75, // 默认质量
    // domains: ['cdn.joyreels.cc', 'test.joyreels.cc', 'www.joyreels.com', 'cdn.joyreels.com'],
    format: ['webp', 'avif'] // 默认格式
  },
  future: {
    typescriptBundlerResolution: true
  },
  piniaPluginPersistedstate: {
    storage: 'localStorage'
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'lottie-player'
    }
  },
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    // 减少 workbox 的内存占用
    workbox: {
      disableDevLogs: true,
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      // 限制缓存大小
      runtimeCaching: []
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    manifest: {
      name: 'JoyReels',
      short_name: 'JoyReels',
      start_url: '/',
      theme_color: '#0d0d0d',
      background_color: '#0d0d0d',
      description: 'JoyReels',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: '16_16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: '32_32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: '36_36.png',
          sizes: '36x36',
          type: 'image/png'
        },
        {
          src: '48_48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: '64_64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: '72_72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: '96_96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: '128_128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: '144_144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: '192_192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '256_256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: '512_512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '512_512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '1024_1024.png',
          sizes: '1024x1024',
          type: 'image/png'
        }
      ]
    },
    scope: process.env.NUXT_PUBLIC_PATH,
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module'
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // 针对 id 进行分包，减轻 node_modules 构建后的大小，提高运行速度
          // 具体 对哪些依赖包分包，可以按照依赖分析工具具体分包，也可以根据你package.json依赖进行分包
          manualChunks: {
            vue: ['pinia'],
            vant: ['vant'],
            'element-plus': ['element-plus']
          }
        },
        // 限制并行处理数量以减少内存占用
        maxParallelFileOps: 2
      },
      chunkSizeWarningLimit: 1000, // 提高警告阈值
      // 禁用 sourcemap 以节省内存
      sourcemap: false
    },
    optimizeDeps: {
      include: ['pinia', 'vant', 'element-plus'] // 预构建依赖
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  },
  experimental: {
    typedPages: true
  },
  css: [
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
    'element-plus/theme-chalk/dark/css-vars.css',
    '~/assets/styles/h5/main.less',
    '~/assets/styles/pc/main.less',
    '~/assets/styles/theme.less',
    '~/assets/iconfont/iconfont.css',
    'animate.css/animate.min.css'
  ],
  eslint: {
    config: {
      standalone: false
    }
  },
  components: [
    {
      path: '~/common'
    },
    {
      path: '~/components'
    }
  ],
  devServer: {
    port: 5000,
    host: true
  },
  postcss: postcssConfig,
  i18n: {
    locales: currentLocales,
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    langDir: 'locales',
    defaultLocale: DEFAULT_LANG,
    vueI18n: './config/i18n.config.ts'
  },

  // 运行时常量
  runtimeConfig: {
    // public 内的变量 服务端 和 客户端 都能拿到
    public: {
      PUBLIC_PATH: process.env.NUXT_PUBLIC_PATH, // 打包路径
      PUBLIC_CDN_PATH: process.env.NUXT_PUBLIC_CDN_PATH, // CDN路径
      CDN_DEPS: process.env.NUXT_CDN_DEPS, // 是否开启CDN加速
      API_BASE_URL: process.env.NUXT_API_BASE_URL, // 接口地址
      LOGIN_URL: process.env.NUXT_LOGIN_URL, // 第三方登录地址
      AIRWALLEX_API: process.env.NUXT_AIRWALLEX_API, // h5第三方支付
      AIRWALLEX_MODE: process.env.NUXT_AIRWALLEX_MODE, // h5第三方支付模式
      PAYPAL_API: process.env.NUXT_PAYPAL_API, // paypal 支付api
      PAYPAL_CLIENT_ID: process.env.NUXT_PAYPAL_CLIENT_ID, // paypal 支付clientId
      QA_TA_UPLOAD_URL: process.env.NUXT_QA_TA_UPLOAD_URL, // 埋点上报地址
      QA_TA_APP_ID: process.env.NUXT_QA_TA_APP_ID // 埋点上报appid
    }
  },

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

  typescript: {
    shim: false
  },
  hooks: {
    'pages:extend': function (routes) {
      routes.push({
        path: '/:pathMatch(.*)',
        redirect: '/'
      });
    }
  },
  ssr: true,
  build: {
    analyze: {
      // 是否启用分析工具，默认为 false
      enabled: false,
      // 分析报告的输出目录，默认为 '.nuxt/analyze'
      reportFilename: '.nuxt/analyze/report.html',
      // 是否在浏览器中自动打开分析报告，默认为 false
      open: true,
      // 分析器类型，可选值有 'webpack-bundle-analyzer' 和 'source-map-explorer'
      analyzerMode: 'server',
      // 分析服务器的端口号
      port: 8888,
      // 其他 webpack-bundle-analyzer 配置项
      generateStatsFile: false,
      statsFilename: '.nuxt/analyze/stats.json',
      statsOptions: null,
      logLevel: 'info'
    }
  },
  compatibilityDate: '2025-12-03'
});
