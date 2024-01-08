import { withInstall } from '@/utils'
import tableFooter from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'
export const TableFooter = withInstall(tableFooter)
