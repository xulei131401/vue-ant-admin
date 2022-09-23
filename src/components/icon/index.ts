import svgIcon from './src/components/SvgIcon.vue'
import antIcon from './src/components/AntIcon.vue'
import customIcon from './src/components/CustomIcon.vue'
import { withInstall } from '@/utils'

export * from './src/typing'
export const AntIcon = withInstall(antIcon)
export const SvgIcon = withInstall(svgIcon)
export const CustomIcon = withInstall(customIcon)
