import { LIGHT_COLOR } from '@/constants'
import { Theme } from '@/enums'

export type HeaderConfig = {
	theme: Theme
	fixed: boolean
	bgColor: string
}

export const defaultHeaderConfig: HeaderConfig = {
	theme: Theme.LIGHT, // 主题
	bgColor: LIGHT_COLOR, // 背景色
	fixed: true // 是否固定
}
