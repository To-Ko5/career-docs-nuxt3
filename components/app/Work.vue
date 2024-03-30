<script setup lang="ts">
import type { work } from '~/types/data'
const dayjs = useDayjs()
dayjs.locale('ja')

const { work, isLink } = defineProps({
  work: { type: Object as PropType<work>, required: true },
  isLink: { type: Boolean, default: false }
})

const dateFormat = (date: string) => {
  return dayjs(date).format('YYYY/MM/DD')
}

const setPeriod = (startDate: string, endDate: string) => {
  const start = dayjs(startDate)
  const end = dayjs(endDate)
  const monthsDifference = end.diff(start, 'month')
  const years = Math.floor(monthsDifference / 12)
  const months = monthsDifference % 12
  let result = ''
  if (years > 0) {
    result += `${years}年`
  }
  if (months > 0) {
    result += `${months}ヶ月`
  }
  return `（${result}）`
}
</script>

<template>
  <section>
    <Card class="print:shadow-none">
      <CardHeader class="space-y-3">
        <div
          class="text-sm text-right tabular-nums text-muted-foreground sm:hidden mb-3"
        >
          <span>
            {{ dateFormat(work.startDate) }} - {{ dateFormat(work.endDate) }}
          </span>
          <span>{{ setPeriod(work.startDate, work.endDate) }}</span>
        </div>
        <div class="flex items-center justify-between gap-x-2">
          <h3 class="font-semibold leading-none">
            <NuxtLink
              v-if="isLink"
              class="hover:underline text-xl"
              :to="`/case/${work.case}`"
            >
              {{ work.case }}. {{ work.title }}
            </NuxtLink>
            <div v-else class="text-xl">{{ work.case }}. {{ work.title }}</div>
          </h3>
          <div
            class="text-sm tabular-nums text-muted-foreground hidden sm:block"
          >
            <span>
              {{ dateFormat(work.startDate) }} - {{ dateFormat(work.endDate) }}
            </span>
            <span>{{ setPeriod(work.startDate, work.endDate) }}</span>
          </div>
        </div>
        <div class="flex gap-2 flex-wrap">
          <Badge
            v-for="(position, index) in work.positions"
            :key="index"
            variant="outline"
          >
            {{ position }}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <h4 class="text-sm font-semibold mb-2">使用技術</h4>
        <div class="flex gap-2 flex-wrap">
          <Badge
            v-for="(skill, index) in work.skills"
            :key="index"
            variant="outline"
          >
            {{ skill }}
          </Badge>
        </div>
      </CardContent>

      <CardContent>
        <h4 class="text-sm font-semibold mb-2">使用ツール</h4>
        <div class="flex gap-2 flex-wrap">
          <Badge
            v-for="(tool, index) in work.tools"
            :key="index"
            variant="outline"
          >
            {{ tool }}
          </Badge>
        </div>
      </CardContent>

      <CardContent class="text-sm text-muted-foreground whitespace-pre-line">
        <AppWorkDescription :content="`${work.description}`" />
      </CardContent>
    </Card>
  </section>
</template>
