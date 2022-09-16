import { LayoutMode, LayoutModeEnum } from '@/enums/layoutEnum'
import { defaultHeaderConfig, HeaderConfig } from './header'
import { defaultMenuConfig, MenuConfig } from './menu'
import { defaultThemeConfig, ThemeConfig } from './theme'
import { defaultSiderConfig, SiderConfig } from './sider'

export * from './menu'
export * from './header'
export * from './theme'

export interface LayoutConfig {
	mode: LayoutMode
	menu: MenuConfig
	header: HeaderConfig
	theme: ThemeConfig
	sider: SiderConfig
}

export const defaultLayoutConfig: LayoutConfig = {
	mode: LayoutModeEnum.TOP_BOTTOM_LAYOUT,
	menu: defaultMenuConfig,
	header: defaultHeaderConfig,
	theme: defaultThemeConfig,
	sider: defaultSiderConfig
}
