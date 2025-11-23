import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      // Load every file inside the `content` directory
      source: 'articles/*.md'
    })
  }
});
