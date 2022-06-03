<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="text-4xl">
    {{ props.title }}
  </h1>
</template>
