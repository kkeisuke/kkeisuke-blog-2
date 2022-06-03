<script setup lang="ts">
import Links from '@/components/common/Links.vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="flex justify-between">
    <nuxt-link to="/" class="text-xl text-current no-underline">
      {{ props.title }}
    </nuxt-link>
    <links class="transform scale-75" />
  </h1>
</template>
