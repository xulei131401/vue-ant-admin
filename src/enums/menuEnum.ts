export enum MenuModeEnum {
	VERTICAL = 'vertical',
	HORIZONTAL = 'horizontal',
	INLINE = 'inline'
}

export type MenuMode = MenuModeEnum.VERTICAL | MenuModeEnum.HORIZONTAL | MenuModeEnum.INLINE

export enum MenuThemeEnum {
	DARK = 'dark',
	LIGHT = 'light'
}

export type MenuTheme = MenuThemeEnum.DARK | MenuThemeEnum.LIGHT
