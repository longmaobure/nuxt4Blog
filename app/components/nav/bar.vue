<script setup lang="ts"></script>
<template>
  <nav>
    <ol class="flex space-x-4">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/articles">Articles</NuxtLink>
      </li>
      <li>
        <!-- <NuxtLink to="/contact">Contact</NuxtLink> -->
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
