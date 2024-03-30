<script setup lang="ts">
const { content } = defineProps({
  content: { type: String, required: true }
})
</script>

<template>
  <section>
    <h2 class="text-xl font-bold mb-2">About</h2>
    <p
      class="whitespace-pre-line text-muted-foreground leading-[1.6rem] print:text-sm"
    >
      {{ content }}
    </p>
  </section>
</template>
