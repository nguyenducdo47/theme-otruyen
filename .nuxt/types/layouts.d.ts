import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/My-assets/otruyen_manga/theme-otruyen/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}