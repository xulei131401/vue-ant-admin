import { withInstall } from '@/utils'
import basicModal from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'
export const BasicModal = withInstall(basicModal)
