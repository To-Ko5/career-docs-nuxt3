<script setup lang="ts">
import { MoonIcon, SunIcon } from 'lucide-vue-next'

const colorMode = useColorMode()

const handleClick = () => {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}
</script>

<template>
  <Button variant="outline" size="icon" @click="handleClick">
    <SunIcon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span className="sr-only">Toggle theme</span>
  </Button>
</template>
