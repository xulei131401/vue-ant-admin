import { App } from 'vue'
import VueAdmin from '@/components'
import { LIGHT_COLOR, HOVER_COLOR } from '@/constant'
import { RootCssProperties, Theme } from '@/enums'
import { setCssVar } from '@/utils'

export default {
	install(app: App) {
		setupGlobal(app)
	}
}

export function setupGlobal(app: App) {
	app.use(VueAdmin)
	initCssVar()
}

export function initCssVar() {
	// 设置默认主题
	setCssVar(RootCssProperties.THEME, Theme.DARK)
	setCssVar(RootCssProperties.HEADER_THEME, Theme.LIGHT)
	setCssVar(RootCssProperties.MENU_THEME, Theme.DARK)
	setCssVar(RootCssProperties.SIDER_THEME, Theme.DARK)
	// 设置color
	setCssVar(RootCssProperties.HEADER_BG_COLOR_VAR, LIGHT_COLOR)
	setCssVar(RootCssProperties.HEADER_BG_HOVER_COLOR_VAR, HOVER_COLOR)
}
