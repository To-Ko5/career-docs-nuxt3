<script setup lang="ts">
import { site } from '@/data/site_data'
const { title, description } = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: false, default: site.description }
})
</script>

<template>
  <div>
    <Html lang="ja">
      <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="`${description}`" />
      </Head>
    </Html>
    <div class="flex flex-col min-h-screen">
      <AppHeader />
      <div class="flex-grow">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>
