<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button'
const error = useError()
</script>

<template>
  <NuxtLayout name="not-found-layout" title="Not Found">
    <div
      class="absolute inset-0 flex flex-col gap-4 items-center justify-center"
    >
      <div class="text-xl">ページが見つかりませんでした</div>
      <div class="text-xl">{{ error?.statusCode }}</div>
      <div class="text-xl">{{ error?.message }}</div>
      <div>
        <NuxtLink href="/" :class="buttonVariants({ variant: 'outline' })">
          Topへ</NuxtLink
        >
      </div>
    </div>
  </NuxtLayout>
</template>
