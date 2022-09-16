import { ThemeMode, ThemeModeEnum } from '@/enums/themeEnum'

export interface ThemeConfig {
	theme: ThemeMode
}

export const defaultThemeConfig: ThemeConfig = {
	theme: ThemeModeEnum.LIGHT
}
