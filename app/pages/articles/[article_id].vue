<script setup lang="ts">
import { useRoute } from 'vue-router';
const router = useRoute();
const { data: page } = await useAsyncData(router.path, () => {
  return queryCollection('articles').path(router.path).first();
});

console.log(page?.value);
</script>
<template>
  <div class="flex flex-row">
    <articles-toc v-if="page?.body.toc" :toc="page.body.toc" />
    <div class="flex-1 mt-8 prose prose-slate mx-auto lg:prose-lg">
      <content-renderer v-if="page" :value="page" />
    </div>
  </div>
</template>

<style scoped></style>
