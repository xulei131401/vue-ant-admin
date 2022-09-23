export const enum Theme {
	DARK = 'dark',
	LIGHT = 'light'
}

export type ThemeKey = keyof typeof Theme
export type ThemeValue = `${Theme}`
