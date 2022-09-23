import { Theme } from '@/enums'

export type ThemeConfig = {
	theme: Theme
}

export const defaultThemeConfig: ThemeConfig = {
	theme: Theme.DARK
}
