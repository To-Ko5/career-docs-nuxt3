<script setup>
const { title } = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true }
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
