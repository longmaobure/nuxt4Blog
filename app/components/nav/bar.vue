<script setup lang="ts"></script>
<template>
  <nav>
    <ol class="flex space-x-4">
      <li>
        <NuxtLink to="/articles">文章</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/diary">日记</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/games">游戏</NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
a[aria-current='page'] {
  font-weight: bold;
  color: var(--pulsar-blue);
}
a {
  color: var(--polar-blue);
}
</style>
