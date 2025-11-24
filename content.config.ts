import { defineContentConfig, defineCollection, z } from '@nuxt/content';
// 这里的z, 是zod的简化版本, 只覆盖基础的schema
// zod:
export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        cover: z.string(),
        updated: z.date().optional(),
        draft: z.boolean().default(true)
      })
    })
  }
});
