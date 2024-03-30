<script setup lang="ts">
import { site } from '@/data/site_data'
</script>

<template>
  <footer class="p-3 border-t print:hidden">
    <p class="text-center text-sm text-muted-foreground">
      <NuxtLink to="/">{{ site.title }}</NuxtLink>
    </p>
  </footer>
</template>
