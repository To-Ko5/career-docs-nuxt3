<script setup lang="ts">
import { date } from '@/data/site_data'
const dayjs = useDayjs()
dayjs.locale('ja')
</script>

<template>
  <p className="text-right text-sm text-muted-foreground mb-4">
    <time>{{ dayjs(date.lastUpdatedAt).format('YYYY/MM/DD') }}</time>
  </p>
</template>
