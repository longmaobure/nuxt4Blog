import { defineContentConfig, defineCollection, z } from '@nuxt/content';
// 这里的z, 是zod的简化版本, 只覆盖基础的schema
// zod:
console.log(z);
export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        cover: z.string(),
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be YYYY-MM-DD'),
        updated: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/, 'updated must be YYYY-MM-DD')
          .optional(),
        draft: z.boolean().default(true)
      })
    })
  }
});
