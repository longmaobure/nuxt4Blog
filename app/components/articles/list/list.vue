<script setup lang="ts">
import type { IArticlesListProps } from './lib/type';
defineProps<IArticlesListProps>();
</script>
<template>
  <ul class="articles-list w-full md:w-3/4 lg:w-2/3 px-4">
    <articles-item
      v-for="article in list"
      :id="article.id"
      :key="article.id"
      :path="article.path"
      :date="article?.date"
      :description="article?.description"
      :updated="article?.updated"
      :cover="article?.cover"
      :tags="article?.tags"
      :title="article?.title"
      class="article-item group flex gap-4 items-start p-4 mb-3 bg-white/5 hover:bg-white/7 rounded-lg border border-transparent hover:border-gray-200/20 transition-shadow duration-200 shadow-sm hover:shadow-md"
    />
  </ul>
</template>

<style scoped>
.article-desc {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: rgb(209 213 219);
  max-height: 3.5rem;
  overflow: hidden;
}

.tag {
  background: rgba(var(--primary), 0.8);
  color: var(--primary);
}
</style>
