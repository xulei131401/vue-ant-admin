import { LayoutMode } from '@/enums'
import { defaultHeaderConfig, HeaderConfig } from './header'
import { defaultMenuConfig, MenuConfig } from './menu'
import { defaultThemeConfig, ThemeConfig } from './theme'
import { defaultSiderConfig, SiderConfig } from './sider'

export * from './menu'
export * from './header'
export * from './theme'
export * from './sider'

export type LayoutConfig = {
	mode: LayoutMode
	theme: ThemeConfig
	grayMode: boolean
	menu: MenuConfig
	header: HeaderConfig
	sider: SiderConfig
}

export const defaultLayoutConfig: LayoutConfig = {
	mode: LayoutMode.TOP_BOTTOM_LAYOUT,
	grayMode: false,
	theme: defaultThemeConfig,
	menu: defaultMenuConfig,
	header: defaultHeaderConfig,
	sider: defaultSiderConfig
}
