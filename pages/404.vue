<script setup lang="ts">
import Links from '@/components/common/Links.vue'
import ArticleBlogTitle from '@/components/articles/ArticleBlogTitle.vue'
import ArticleHeader from '@/components/articles/ArticleHeader.vue'

const { title } = useRuntimeConfig().public
</script>

<template>
  <main>
    <ArticleBlogTitle :title="title" class="mb-10" />
    <article>
      <ArticleHeader title="Page Not Found" date="Please return to the home." class="mb-10" />
    </article>
    <Links class="pt-4" />
  </main>
</template>
