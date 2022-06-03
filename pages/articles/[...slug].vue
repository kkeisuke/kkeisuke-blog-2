<script setup lang="ts">
import Links from '@/components/common/Links.vue'
import ArticleBlogTitle from '@/components/articles/ArticleBlogTitle.vue'
import ArticleHeader from '@/components/articles/ArticleHeader.vue'
import { Article } from '@/types/Article'

const { title, url } = useRuntimeConfig().public
const { path, fullPath } = useRoute()

const { data: article } = await useAsyncData<Article>(`article-${path}`, () => queryContent<Article>().where({ _path: path }).findOne())

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
  <NuxtLayout name="default">
    <main>
      <ArticleBlogTitle :title="title" class="mb-10" />
      <article>
        <ArticleHeader v-if="article" :title="article.title" :date="article.date" class="mb-10" />
        <ContentDoc class="nuxt-content">
          <template #not-found>
            <ArticleHeader title="Page Not Found" date="Please return to the home." class="mb-10" />
          </template>
        </ContentDoc>
      </article>
      <Links class="pt-4" />
    </main>
  </NuxtLayout>
</template>

<style>
@import '@/assets/css/markdown.css';
</style>
