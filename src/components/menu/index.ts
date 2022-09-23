import { withInstall } from '@/utils'
import basicMenu from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'
export const BasicMenu = withInstall(basicMenu)
