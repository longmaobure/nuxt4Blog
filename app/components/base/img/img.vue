<script setup lang="ts">
import type { IImgProps } from './lib/type';
import { computed } from 'vue';
const props = defineProps<IImgProps>();

const imgClass = computed(() => {
  return props.class ? props.class : '';
});
</script>
<template>
  <img
    v-if="Boolean(src)"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="[
      `min-w-[50px] min-h-[50px] w-20 h-20 md:w-24 md:h-24 rounded-md object-cover border border-gray-200/10`,
      imgClass
    ]"
  />
  <div
    v-else
    :class="[
      `min-w-[50px] min-h-[50px] w-20 h-20 md:w-24 md:h-24 rounded-md bg-gray-800 flex items-center justify-center text-gray-400`,
      imgClass
    ]"
  >
    📄
  </div>
</template>

<style scoped></style>
