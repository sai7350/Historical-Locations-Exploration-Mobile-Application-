
import type { Defu } from 'defu'
import cfg0 from "C:/Users/saish/Desktop/test/ASI_Proto_Project-master/ASI_Proto_Project-master/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>

declare module '@nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
