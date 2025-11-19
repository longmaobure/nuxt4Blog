<template>
  <div>
    {{ counterStore.count }}
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from './stores/counterStore';
const counterStore = useCounterStore();
counterStore.increment();
console.log('Counter Value:', counterStore.count);
</script>
