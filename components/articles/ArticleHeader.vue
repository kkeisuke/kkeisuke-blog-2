<script setup lang="ts">
const props = defineProps<{
  title: string
  date: string
}>()
</script>

<template>
  <header>
    <h2 class="mb-1 text-3xl xl:text-4xl leading-tight">
      {{ props.title }}
    </h2>
    <time class="text-xs">{{ props.date }}</time>
  </header>
</template>
