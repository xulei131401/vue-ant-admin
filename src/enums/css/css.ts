export enum RootCssProperties {
	THEME = '--theme'
}

export type RootCssPropertiesKey = keyof typeof RootCssProperties
export type RootCssPropertiesValue = `${RootCssProperties}`
