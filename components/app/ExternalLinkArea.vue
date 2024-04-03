<script setup lang="ts">
import type { url_link } from '@/types/data'
const { urlLinks } = defineProps({
  urlLinks: { type: Array<url_link>, default: [] }
})
</script>

<template>
  <div class="flex gap-2 flex-wrap">
    <div v-for="(link, index) in urlLinks" :key="index">
      <div v-if="link.tooltip">
        <TooltipProvider :delay-duration="100">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                variant="outline"
                size="icon"
                class="rounded-full"
                as-child
              >
                <a
                  :href="`${link.href}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${link.tooltip}`"
                >
                  <Icon
                    v-if="typeof link.icon === 'string'"
                    :name="link.icon"
                    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
                  />
                  <component
                    :is="link.icon"
                    v-else
                    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
                  />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" class="text-xs">
              <p>{{ link.tooltip }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div v-else>
        <Button variant="outline" size="icon" class="rounded-full" as-child>
          <a
            :href="`${link.href}`"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${link.tooltip}`"
          >
            <component
              :is="link.icon"
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
            />
          </a>
        </Button>
      </div>
    </div>
  </div>
</template>
