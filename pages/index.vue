<script setup lang="ts">
import Links from '@/components/common/Links.vue'
import BlogTitle from '@/components/index/BlogTitle.vue'
import ArticleList from '@/components/index/ArticleList.vue'
import { Article } from '@/types/Article'

const { data: articles } = await useAsyncData<Article[]>('articles', () => queryContent<Article>('/articles').sort({ date: -1 }).find())
const { title } = useRuntimeConfig().public

useHead({
  title,
  titleTemplate: '%s'
})
</script>

<template>
  <NuxtLayout name="default">
    <main>
      <BlogTitle :title="title" class="mb-4" />
      <Links />
      <ArticleList v-for="article in articles" :key="article._path" :article="article" class="mt-8" />
      <aside class="pt-24">
        <p>2019年以前は <a href="https://kkeisuke.hatenablog.com/archive" target="_blank" rel="noopener noreferrer">はてなブログ</a> へ</p>
      </aside>
    </main>
  </NuxtLayout>
</template>
