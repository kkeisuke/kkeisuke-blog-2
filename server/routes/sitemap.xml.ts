import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const { url } = useRuntimeConfig().public

  // Fetch all documents
  const docs = await serverQueryContent(event).find()

  const sitemap = new SitemapStream({ hostname: url })

  for (const doc of docs) {
    if (doc.title === '404') { continue }

    sitemap.write({
      url: doc._path
      // changefreq: 'monthly'
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})
