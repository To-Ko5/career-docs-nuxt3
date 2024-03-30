<script setup lang="ts">
import { urlLinks } from '@/data/site_data'
const { name, position } = defineProps({
  name: { type: String, required: true },
  position: { type: String, required: true }
})
</script>

<template>
  <section>
    <div class="flex flex-col sm:flex-row gap-4">
      <div class="max-w-[112px]">
        <img src="/icon.jpg" :alt="name" />
      </div>
      <div>
        <div class="mb-2">
          <h1 class="text-2xl mb-2 font-bold">{{ name }}</h1>
          <p class="text-muted-foreground">{{ position }}</p>
        </div>

        <div v-if="urlLinks.length > 0" class="print:hidden">
          <AppExternalLinkArea :url-links="urlLinks" />
        </div>
      </div>
    </div>
  </section>
</template>
