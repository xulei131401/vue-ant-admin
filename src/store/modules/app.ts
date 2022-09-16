import { defineStore } from 'pinia'
import type { AppConfig, MixConfig, MenuConfig, ThemeConfig, LayoutConfig, HeaderConfig } from '@/configs'
import { defaultAppConfig } from '@/configs'
import { mergeWith } from 'lodash-es'
import { ThemeModeEnum, type ThemeMode } from '@/enums/themeEnum'
import { APP_THEME_MODE_KEY_ } from '@/enums/cacheEnum'
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
		getThemeMode(): ThemeMode {
			// 优先找缓存
			const _temp = localStorage.getItem(APP_THEME_MODE_KEY_)
			if (_temp) {
				return _temp as ThemeMode
			}

			return this.getThemeConfig.theme
		},
		isDarkThemeMode(): boolean {
			return this.getThemeMode === ThemeModeEnum.DARK
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
		setThemeMode(mode: ThemeModeEnum): void {
			this.appConfig.layout.theme.theme = mode
			localStorage.setItem(APP_THEME_MODE_KEY_, mode)
		}
	}
})
