<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('articles').all();
});
console.log(data);
</script>
<template>
  <div></div>
</template>

<style scoped></style>
