import { withInstall } from '@/utils'
import tableContent from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'
export * from './src/functional'
export const TableContent = withInstall(tableContent)
