<script setup lang="ts">
import type { IArticleProps } from './lib/type';

defineProps<IArticleProps>();
</script>
<template>
  <aside v-if="toc" class="article-toc">
    <h1 v-if="toc.title" class="text-2xl font-bold toc_title text-center">
      {{ toc.title }}
    </h1>
    <div>
      <articles-toc-link
        v-for="toc_link in toc.links"
        :key="toc_link.id"
        class="min-w-64 max-w-64"
        :link="toc_link"
      />
    </div>
    <!-- <a :href="'#' + toc_link.id">{{ toc_link.text }}</a> -->
  </aside>
</template>

<style scoped></style>
