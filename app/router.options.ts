import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior (_, __, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition || { left: 0, top: 0 })
      }, 20)
    })
  }
}
