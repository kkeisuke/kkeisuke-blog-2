<script setup lang="ts">
import Links from '@/components/common/Links.vue'
import ArticleBlogTitle from '@/components/articles/ArticleBlogTitle.vue'

const { title } = useRuntimeConfig().public

</script>

<template>
  <main>
    <ArticleBlogTitle :title="title" class="mb-10" />
    <ContentDoc path="/404" class="nuxt-content" />
    <Links class="pt-4" />
  </main>
</template>

<style>
@import '@/assets/css/markdown.css';
</style>
