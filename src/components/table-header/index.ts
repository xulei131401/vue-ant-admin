import { withInstall } from '@/utils'
import tableHeader from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'
export const TableHeader = withInstall(tableHeader)
