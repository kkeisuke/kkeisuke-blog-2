<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: string
  }>(),
  {
    icon: ''
  }
)
const src = computed(() => `/icons/${props.icon}.svg#icon`)
</script>

<template>
  <svg class="inline-block text-gray-700">
    <use :xlink:href="src" />
  </svg>
</template>
