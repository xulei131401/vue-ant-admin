import { defineStore } from 'pinia'
import type { AppConfig, MixConfig, MenuConfig, ThemeConfig, LayoutConfig, HeaderConfig, SiderConfig } from '@/configs'
import { defaultAppConfig } from '@/configs'
import { Theme, Cache, LayoutMode } from '@/enums'
import { mergeWith } from 'lodash-es'

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
			const _temp = localStorage.getItem(Cache.APP_THEME_KEY)
			if (_temp) {
				return _temp as Theme
			}

			return _theme
		},
		isDarkTheme(): boolean {
			return this.getTheme === Theme.DARK
		}
	},
	actions: {
		setAppConfig(config: DeepPartial<AppConfig>): void {
			this.appConfig = mergeWith(this.appConfig, config)
		},
		setTheme(theme: Theme): void {
			this.$patch((state) => {
				state.appConfig.layout.theme.theme = theme
			})

			localStorage.setItem(Cache.APP_THEME_KEY, theme)
		},
		setMenuTheme(theme: Theme): void {
			this.$patch((state) => {
				state.appConfig.layout.menu.theme = theme
			})
		},
		setHeaderTheme(theme: Theme): void {
			this.$patch((state) => {
				state.appConfig.layout.header.theme = theme
			})
		},
		setHeaderBgColor(bgColor: string): void {
			this.$patch((state) => {
				state.appConfig.layout.header.bgColor = bgColor
			})
		}
	}
})
