<script setup lang="ts">
import type { ITagProps } from './lib/type';
defineProps<ITagProps>();

defineSlots<ITagSlot>();
// TODO: 未来可考虑增加不同风格的 tag
</script>
<template>
  <span
    class="tag cursor-pointer text-xs border border-gray-600 px-2 py-0.5 rounded bg-gray-700 text-gray-200"
  >
    <slot>{{ value }}</slot>
  </span>
</template>

<style scoped>
.tag {
  /* background-color: var(--pulsar-blue);
  border: 1px solid rgba(89, 84, 84, 0.03); */
}
.tag {
  background-color: var(--primary);
}
</style>
