<script setup lang="ts">
import Links from '@/components/common/Links.vue'
import ArticleBlogTitle from '@/components/articles/ArticleBlogTitle.vue'

const { title } = useRuntimeConfig().public

</script>

<template>
  <main>
    <ArticleBlogTitle :title="title" class="mb-10" />
    <!-- path が無いと、generate 時に取得できない -->
    <ContentDoc path="/404" class="nuxt-content" tag="section" />
    <Links class="pt-4" />
  </main>
</template>

<style>
@import '@/assets/css/markdown.css';
</style>
