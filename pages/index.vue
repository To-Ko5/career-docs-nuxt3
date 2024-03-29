<script setup lang="ts">
import { site } from '@/data/site_data'
import type { work } from '@/types/data'

const { data: worksData } = await useAsyncData('works', async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getContents<work>({
    appUid: 'document-site',
    modelUid: 'work',
    query: {
      order: ['case']
    }
  })
})

const works = worksData.value?.items

const { data: aboutDate } = await useAsyncData('about', async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getContents<work>({
    appUid: 'document-site',
    modelUid: 'about',
    query: {
      select: ['name', 'position', 'content']
    }
  })
})

const about = aboutDate.value?.items
</script>

<template>
  <NuxtLayout
    name="layout"
    :title="`${site.title}`"
    :description="`${site.description}`"
  >
    <main class="container max-w-4xl pb-16 space-y-10">
      <!-- <Button @click="test">Test</Button> -->
      <AppHero />
    </main>
  </NuxtLayout>
</template>
