<script setup lang="ts">
const { content } = defineProps({
  content: { type: String, required: true }
})
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    className="[&_p]:mb-4 [&_p]:leading-[1.6rem] [&_li]:list-disc [&_li]:ml-4 [&_li:not(:last-child)]:mb-1 [&_hr]:block [&_hr]:my-4"
    v-html="content"
  />
</template>
