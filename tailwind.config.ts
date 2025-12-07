import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        'pulsar-blue': '#2e5bff',
        'polar-blue': '#8ab4f8'
      }
    }
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './content/**/*.md'
  ],
  plugins: [typography]
};
