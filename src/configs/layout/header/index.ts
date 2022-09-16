import { ThemeMode, ThemeModeEnum } from '@/enums/themeEnum'

export interface HeaderConfig {
	fixed: boolean
	theme: ThemeMode
}

export const defaultHeaderConfig: HeaderConfig = {
	fixed: true, // 是否固定
	theme: ThemeModeEnum.LIGHT
}
