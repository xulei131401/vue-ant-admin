import { withInstall } from '@/utils'
import actionGroup from './src/components/index.vue'
export * from './src/typing'
export * from './src/composables'
export const ActionGroup = withInstall(actionGroup)
