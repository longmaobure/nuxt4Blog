<script setup lang="ts">
const { message } = await useFetch('/api/hello');
</script>
<template>
  <div>{{ message }}</div>
</template>

<style scoped>
div {
  /* color: var(--link-color); */
}
</style>
