<script setup lang="ts">
useHead({
  title: '文章列表 - Nuxt4 博客示例',
  meta: [
    {
      name: 'description',
      content:
        '这是一个基于 Nuxt4 和 @nuxt/content 构建的博客示例，展示了如何使用最新的 Nuxt 框架进行内容管理和展示。'
    }
  ]
});

const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('articles').all();
});
// console.log(data?.value);
</script>
<template>
  <div class="articles-content flex items-start justify-center pt-8">
    <articles-list :list="data"></articles-list>
  </div>
</template>

<style scoped></style>
