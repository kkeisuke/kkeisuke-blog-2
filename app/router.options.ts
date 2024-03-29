import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior (to, _, savedPosition) {
    // こちらを参考にしました。
    // https://github.com/nuxt/framework/pull/3851#issuecomment-1143960410
    return new Promise((resolve) => {
      const nuxtApp = useNuxtApp()
      nuxtApp.hooks.hookOnce('page:finish', () => {
        setTimeout(() => {
          resolve(savedPosition || (to.hash ? { el: to.hash, behavior: 'smooth' } : { left: 0, top: 0 }))
        })
      })
    })
  }
}
