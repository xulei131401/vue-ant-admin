import { defineStore } from 'pinia'
import type { AppConfig, MixConfig, MenuConfig, ThemeConfig, LayoutConfig, HeaderConfig } from '@/configs'
import { defaultAppConfig } from '@/configs'
import { mergeWith } from 'lodash-es'
import { ThemeEnum, type Theme } from '@/enums/themeEnum'
import { APP_THEME_MODE_KEY } from '@/enums/cacheEnum'
import { LayoutModeEnum } from '@/enums/layoutEnum'
import { SiderConfig } from '@/configs/layout/sider'

export const useAppStore = defineStore({
	id: 'app',
	state: () => ({
		appConfig: defaultAppConfig as AppConfig
	}),
	getters: {
		getAppConfig(): AppConfig {
			return this.appConfig || ({} as AppConfig)
		},
		getMixConfig(): MixConfig {
			return this.getAppConfig.mix
		},
		getLayoutConfig(): LayoutConfig {
			return this.getAppConfig.layout
		},
		getMenuConfig(): MenuConfig {
			return this.getLayoutConfig.menu
		},
		getHeaderConfig(): HeaderConfig {
			return this.getLayoutConfig.header
		},
		getThemeConfig(): ThemeConfig {
			return this.getLayoutConfig.theme
		},
		getSiderConfig(): SiderConfig {
			return this.getLayoutConfig.sider
		},
		getTheme(): Theme {
			// 优先找缓存。必须先声明变量产生依赖，否则无法响应式追踪
			const _theme = unref(this.getThemeConfig.theme)
			const _temp = localStorage.getItem(APP_THEME_MODE_KEY)
			if (_temp) {
				return _temp as Theme
			}

			return _theme
		},
		isDarkTheme(): boolean {
			return this.getTheme === ThemeEnum.DARK
		},
		isLeftRightLayoutMode(): boolean {
			return this.getLayoutConfig.mode === LayoutModeEnum.LEFT_RIGHT_LAYOUT
		},
		isTopBottomLayoutMode(): boolean {
			return this.getLayoutConfig.mode === LayoutModeEnum.TOP_BOTTOM_LAYOUT
		}
	},
	actions: {
		setAppConfig(config: DeepPartial<AppConfig>): void {
			this.appConfig = mergeWith(this.appConfig, config)
		},
		setTheme(theme: ThemeEnum): void {
			this.appConfig = mergeWith(this.appConfig, { layout: { theme: { theme: theme } } })
			// this.$patch((state) => {
			// 	state.appConfig.layout.theme.theme = theme
			// })

			localStorage.setItem(APP_THEME_MODE_KEY, theme)
		}
	}
})
