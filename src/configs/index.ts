import { MenuConfig, defaultMenuConfig } from './menu/menu'
import { GlobalConfig, defaultGlobalConfig } from './global/global'
import { LocaleConfig, defaultLocaleConfig } from './locale/locale'

export * from './menu/menu'
export * from './global/global'
export * from './locale/locale'

export interface ProjectConfig {
	global: GlobalConfig
	menu: MenuConfig
	locale: LocaleConfig
}

export const defaultProjectConfig: ProjectConfig = {
	global: defaultGlobalConfig,
	menu: defaultMenuConfig,
	locale: defaultLocaleConfig
}
