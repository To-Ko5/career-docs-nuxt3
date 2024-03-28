<script setup lang="ts">
import { site } from '@/data/site_data'
</script>

<template>
  <NuxtLayout
    name="layout"
    :title="`${site.title}`"
    :description="`${site.description}`"
  >
    <main class="container max-w-4xl pb-16 space-y-10">
      <Button @click="test">Test</Button>
    </main>
  </NuxtLayout>
</template>
