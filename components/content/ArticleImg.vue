<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  title: string
  width: string | number
  height: string | number
}>(), {
  src: '',
  title: '',
  width: 'auto',
  height: 'auto'
})
</script>

<template>
  <figure class="pb-8 flex flex-col justify-center items-center">
    <img
      :src="props.src"
      :title="props.title"
      :alt="props.title"
      :width="props.width"
      :height="props.height"
      loading="lazy"
    />
    <figcaption class="mt-3 block w-full text-xs text-gray-700 text-center">
      {{ title }}
    </figcaption>
  </figure>
</template>
