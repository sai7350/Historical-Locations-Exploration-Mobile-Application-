import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/saish/Desktop/test/ASI_Proto_Project-master/ASI_Proto_Project-master/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}