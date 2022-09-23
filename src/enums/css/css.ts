export enum RootCssProperties {
	THEME = '--theme',
	HEADER_THEME = '--header-theme',
	MENU_THEME = '--menu-theme',
	SIDER_THEME = '--sider-theme',
	HEADER_BG_COLOR_VAR = '--header-bg-color',
	HEADER_BG_HOVER_COLOR_VAR = '--header-bg-hover-color'
}

export type RootCssPropertiesKey = keyof typeof RootCssProperties
export type RootCssPropertiesValue = `${RootCssProperties}`
