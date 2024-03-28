<script setup>
const test = () => {
  console.log('ccccc')
}
</script>

<template>
  <NuxtLayout name="layout">
    <main class="container max-w-4xl pb-16 space-y-10">
      <Button @click="test">Test</Button>
    </main>
  </NuxtLayout>
</template>
