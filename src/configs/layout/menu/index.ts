import { ThemeMode, ThemeModeEnum } from '@/enums/themeEnum'

export interface MenuConfig {
	collapsed: boolean
	theme: ThemeMode
}

export const defaultMenuConfig: MenuConfig = {
	collapsed: false, // 菜单是否可以折叠
	theme: ThemeModeEnum.DARK
}
