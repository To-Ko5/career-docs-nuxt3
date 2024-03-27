<script setup>
import { PrinterIcon } from 'lucide-vue-next'

const clickPrint = () => {
  window.print()
}
</script>

<template>
  <Button variant="outline" size="icon" @click="clickPrint">
    <PrinterIcon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
    />
    <span class="sr-only">Print</span>
  </Button>
</template>
