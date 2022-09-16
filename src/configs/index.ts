import { MixConfig, defaultMixConfig } from './mix'
import { LocaleConfig, defaultLocaleConfig } from './locale'
import { LayoutConfig, defaultLayoutConfig } from './layout'

export * from './layout'
export * from './locale'
export * from './mix'
export * from './layout/theme'

export interface AppConfig {
	mix: MixConfig
	layout: LayoutConfig
	locale: LocaleConfig
}

export const defaultAppConfig: AppConfig = {
	mix: defaultMixConfig,
	layout: defaultLayoutConfig,
	locale: defaultLocaleConfig
}
