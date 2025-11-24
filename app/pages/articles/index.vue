<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('articles').all();
});
console.log(data?.value);
</script>
<template>
  <div class="articles-content flex items-start justify-center"></div>
</template>

<style scoped></style>
