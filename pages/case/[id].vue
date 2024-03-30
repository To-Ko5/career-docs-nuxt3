<script setup lang="ts">
import { site } from '@/data/site_data'
import type { work } from '@/types/data'

const route = useRoute()
const { id } = route.params
console.log(route.params)
const { data } = await useAsyncData(`work-${id}`, async () => {
  const { $newtClient } = useNuxtApp()
  return await $newtClient.getFirstContent<work>({
    appUid: 'document-site',
    modelUid: 'work',
    query: {
      case: id
    }
  })
})
const work = data.value
const title = work ? `${work.title} | ${site.title}` : site.title

console.log(data.value)
</script>

<template>
  <NuxtLayout name="layout" :title="title" :description="`${site.description}`">
    <main class="container max-w-4xl pb-16 space-y-10">
      <div>
        <AppDate />
      </div>
      <div>
        <AppWork v-if="work" :work="work" />
      </div>
    </main>
  </NuxtLayout>
</template>
