<script setup lang="ts">
import type { IArticlesListProps } from './type';
defineProps<IArticlesListProps>();
</script>
<template>
  <ul class="articles-list w-1/2 px-4 border">
    <li v-for="article in list" :key="article.id" class="article-item border flex">
      <img
        v-if="article?.meta?.cover"
        :src="article.meta.cover"
        alt=""
        class="article-cover w-[50px] h-[50px]"
      />
      <div>
        <h2 class="text-2xl article-title">{{ article.title }}</h2>
        <p class="article-desc">{{ article.description }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
