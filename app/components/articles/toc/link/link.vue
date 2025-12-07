<script setup lang="ts">
import { ref } from 'vue';
import type { IArticleTocLink } from './lib/type';

const props = defineProps<{
  link: IArticleTocLink;
}>();

// 每个实例都有自己的 isOpen
const isOpen = ref(true);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="article-toc-link select-none">
    <!-- 行 -->
    <div class="flex justify-between items-center py-1 cursor-pointer">
      <div :style="{ paddingLeft: (props.link.depth - 1) * 12 + 'px' }">
        <component :is="props.link.depth === 2 ? 'h2' : 'p'" class="font-medium">
          <a :href="'#' + props.link.id">
            {{ props.link.text }}
          </a>
        </component>
      </div>

      <div v-if="props.link.children?.length" class="mr-2" @click.stop="toggle">
        <Icon
          name="ep:arrow-down-bold"
          :class="['transition-transform duration-200', isOpen ? 'rotate-0' : '-rotate-90']"
        />
      </div>
    </div>

    <!-- 子级 -->
    <div
      v-if="props.link.children?.length"
      class="overflow-hidden transition-all duration-2000"
      :class="isOpen ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="pl-4">
        <ArticlesTocLink v-for="child in props.link.children" :key="child.id" :link="child" />
      </div>
    </div>
  </div>
</template>
