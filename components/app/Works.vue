<script setup lang="ts">
import type { work } from '~/types/data'

const { works } = defineProps({
  works: { type: Array<work>, required: true }
})

// style at printing
const printStyle =
  'print:[&:nth-of-type(2)]:break-inside-avoid print:[&:nth-of-type(3)]:break-inside-avoid'
</script>

<template>
  <section>
    <h2 className="text-xl font-bold mb-4">Works</h2>

    <div className="space-y-8">
      <div v-for="(work, index) in works" :key="index" :class="`${printStyle}`">
        <AppWork :work="work" />
      </div>
    </div>
  </section>
</template>
