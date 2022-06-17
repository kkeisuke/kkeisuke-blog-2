<script setup lang="ts">
import Links from '@/components/common/Links.vue'
import ArticleBlogTitle from '@/components/articles/ArticleBlogTitle.vue'
import ArticleHeader from '@/components/articles/ArticleHeader.vue'
import { Article } from '@/types/Article'

const { title, url } = useRuntimeConfig().public
const { fullPath, params } = useRoute()

const _path = `/articles/${params.slug[0]}`

const { data: article } = await useAsyncData(_path, () => queryContent<Article>().where({ _path }).findOne())

article.value && useHead({
  title: article.value.title,
  titleTemplate: `%s - ${title}`,
  meta: [
    { hid: 'description', name: 'description', content: article.value.description },
    { hid: 'ogTitle', property: 'og:title', content: article.value.title },
    { hid: 'ogDescription', property: 'og:description', content: article.value.description },
    { hid: 'ogType', property: 'og:type', content: 'article' },
    { hid: 'ogUrl', property: 'og:url', content: `${url}${fullPath}` }
  ]
})
</script>

<template>
  <main>
    <ArticleBlogTitle :title="title" class="mb-10" />
    <article>
      <template v-if="article">
        <ArticleHeader :title="article.title" :date="article.date" class="mb-10" />
        <ContentRenderer :value="article" class="nuxt-content" />
      </template>
      <template v-else>
        <ContentDoc path="/404" class="nuxt-content" tag="section" />
      </template>
    </article>
    <Links class="pt-4" />
  </main>
</template>

<style>
@import '@/assets/css/markdown.css';
</style>
