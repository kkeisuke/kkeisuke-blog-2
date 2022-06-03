import { defineNuxtConfig } from 'nuxt'

const title = 'kkeisuke blog'
const url = 'https://blog.kkeisuke.com'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title,
      url
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { hid: 'description', name: 'description', content: title },
        { hid: 'ogTitle', property: 'og:title', content: title },
        { hid: 'ogDescription', property: 'og:description', content: title },
        { hid: 'ogType', property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${url}/profile.webp` },
        { hid: 'ogUrl', property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@kkeisuke' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    highlight: {
      theme: 'github-light',
      preload: ['js', 'ts', 'go']
    },
    markdown: {
      remarkPlugins: ['remark-heading-id']
    }
  }
})
