<script setup lang="ts">
import type { IArticleItemProps } from './lib/type';
withDefaults(defineProps<IArticleItemProps>(), {
  cover: ''
});
</script>
<template>
  <li
    class="article-item group flex gap-4 items-start p-4 mb-3 bg-white/5 hover:bg-white/7 rounded-lg border border-transparent hover:border-gray-200/60 transition-shadow duration-200 shadow-sm hover:shadow-md"
  >
    <!-- article cover  -->
    <div class="flex-shrink-0">
      <base-img :src="cover" :alt="title" class="article-cover" />
    </div>

    <!-- article content -->
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-4">
        <h2
          class="break-words text-lg md:text-xl font-semibold article-title leading-tight truncate"
        >
          {{ title }}
        </h2>
        <div class="ml-2">
          <!-- 可放置阅读数 / 操作按钮 -->
          <nuxt-link
            class="text-sm text-pulsar-blue opacity-90 hover:opacity-100 transition"
            :to="path"
          >
            阅读
          </nuxt-link>
        </div>
      </div>

      <p class="article-desc mt-2 text-sm text-gray-500 max-h-14 overflow-hidden" aria-hidden>
        {{ description }}
      </p>

      <div
        class="article-meta mt-3 flex flex-wrap items-center justify-between text-sm text-gray-400"
      >
        <div class="flex items-center gap-3">
          <span class="article-create_date"
            >创建: <span class="ml-1 text-gray-400">{{ date }}</span></span
          >
          <span v-if="updated" class="article-update_date"
            >更新: <span class="ml-1 text-gray-400">{{ updated }}</span></span
          >
        </div>

        <div class="article-tags flex items-center gap-2">
          <template v-if="tags && tags.length">
            <base-tag v-for="tag in tags" :key="tag" :value="tag" />
          </template>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
.article-item {
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
  will-change: transform;
}

.article-desc {
  /* 多行截断：3 行 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
