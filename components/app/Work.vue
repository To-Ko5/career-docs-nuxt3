<script setup lang="ts">
import type { work } from '~/types/data'

const { work, isLink } = defineProps({
  work: { type: Object as PropType<work>, required: true },
  isLink: { type: Boolean, default: false }
})
</script>

<template></template>
