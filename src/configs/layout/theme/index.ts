import { Theme, ThemeEnum } from '@/enums/themeEnum'

export interface ThemeConfig {
	theme: Theme
}

export const defaultThemeConfig: ThemeConfig = {
	theme: ThemeEnum.LIGHT
}
