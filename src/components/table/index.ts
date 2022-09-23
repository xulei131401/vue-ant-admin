import { withInstall } from '@/utils'
import basicTable from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'

export const BasicTable = withInstall(basicTable)
