<script setup lang="ts">
import { urlLinks } from '@/data/site_data'
const { name, position } = defineProps({
  name: { type: String, required: true },
  position: { type: String, required: true }
})
</script>

<template>
  <section>
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="max-w-[112px]">{children}</div>
      <div>
        <div className="mb-2">
          <h1 className="text-2xl mb-2 font-bold">{{ name }}</h1>
          <p className="text-muted-foreground">{{ position }}</p>
        </div>

        <div v-if="urlLinks.length > 0" className="print:hidden">
          <AppExternalLinkArea :url-links="urlLinks" />
        </div>
      </div>
    </div>
  </section>
</template>
