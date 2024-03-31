<script setup lang="ts">
import { site } from '@/data/site_data'
import type { about, work } from '@/types/data'

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
  return await $newtClient.getContents<about>({
    appUid: 'document-site',
    modelUid: 'about',
    query: {
      select: ['name', 'position', 'content']
    }
  })
})

const about = aboutDate.value?.items
const name = about ? `${about[0].name} | ${site.title}` : site.title
</script>

<template>
  <NuxtLayout name="layout" :title="name" :description="`${site.description}`">
    <main class="container max-w-4xl pb-16 space-y-10">
      <div>
        <AppDate />
      </div>
      <div>
        <AppProfile
          v-if="about"
          :name="`${about[0].name}`"
          :position="`${about[0].position}`"
        >
        </AppProfile>
      </div>
      <div>
        <AppAbout v-if="about" :content="`${about[0].content}`" />
      </div>
      <div>
        <AppWorks v-if="works" :works="works" />
      </div>
    </main>
  </NuxtLayout>
</template>
