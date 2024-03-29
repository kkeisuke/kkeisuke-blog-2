const title = 'kkeisuke blog'
const url = 'https://blog.kkeisuke.com'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },
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
        { hid: 'ogImage', property: 'og:image', content: `${url}/profile.webp` },
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
      theme: 'material-palenight',
      preload: ['js', 'ts', 'go', 'diff']
    },
    markdown: {
      remarkPlugins: ['remark-heading-id']
    }
  },
  nitro: {
    prerender: {
      // 404.html は cloudflare pages 用
      // https://developers.cloudflare.com/pages/platform/serving-pages/
      routes: ['/sitemap.xml', '/404.html']
    }
  }
})
