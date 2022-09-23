import { withInstall } from '@/utils'
import basicLoading from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'

export const BasicLoading = withInstall(basicLoading)
