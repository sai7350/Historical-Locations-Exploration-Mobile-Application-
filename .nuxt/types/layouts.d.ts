import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custome" | "default"
declare module "C:/Users/saish/Desktop/test/ASI_Proto_Project-master/ASI_Proto_Project-master/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}