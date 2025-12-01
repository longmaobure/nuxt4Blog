<script setup lang="ts">
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
