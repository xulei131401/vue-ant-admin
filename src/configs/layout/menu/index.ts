import { MenuMode, Theme } from '@/enums'

export type MenuConfig = {
	theme: Theme
	mode: MenuMode
	collapsed: boolean
}

export const defaultMenuConfig: MenuConfig = {
	theme: Theme.DARK, // 主题
	mode: MenuMode.INLINE, // 菜单类型，现在支持垂直、水平、和内嵌模式三种
	collapsed: false // 是否可以折叠
}
