<script setup lang="ts">
import { Article } from '@/types/Article'

const props = defineProps<{
  article: Article
}>()
</script>

<template>
  <article>
    <time class="text-xs">{{ props.article.date }}</time>
    <h2 class="text-xl">
      <nuxt-link :to="props.article._path">
        {{ props.article.title }}
      </nuxt-link>
    </h2>
    <p class="text-sm">
      {{ props.article.description }}
    </p>
  </article>
</template>
