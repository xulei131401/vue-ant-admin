import { ThemeMode, ThemeModeEnum } from '@/enums/themeEnum'

export interface SiderConfig {
	width: Number
	collapsedWidth: Number
	theme: ThemeMode
}

export const defaultSiderConfig: SiderConfig = {
	width: 200, // sider宽度
	collapsedWidth: 80, // sider折叠宽度
	theme: ThemeModeEnum.DARK
}
