export const enum Theme {
	DEFAULT = 'default',
	DARK = 'dark',
	LIGHT = 'light'
}

export type ThemeKey = keyof typeof Theme
export type ThemeValue = `${Theme}`
