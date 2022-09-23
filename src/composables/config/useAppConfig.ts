import { useAppStore } from '@/store/app'
import { LayoutMode, Theme } from '@/enums'
import { type AppConfig } from '@/configs'

export function useAppConfig() {
	const appStore = useAppStore()

	const getTheme = computed(() => appStore.getTheme)
	const isDarkTheme = computed(() => unref(getTheme) === Theme.DARK)
	const isLightTheme = computed(() => unref(getTheme) === Theme.LIGHT)
	const getLayoutMode = computed(() => {
		const { mode } = appStore.getLayoutConfig
		return mode
	})

	const isLeftRightLayoutMode = computed(() => {
		return unref(getLayoutMode) === LayoutMode.LEFT_RIGHT_LAYOUT
	})

	const isTopBottomLayoutMode = computed(() => {
		return unref(getLayoutMode) === LayoutMode.TOP_BOTTOM_LAYOUT
	})

	const setAppConfig = (setting: Partial<AppConfig>) => {
		appStore.setAppConfig(setting)
	}

	const setTheme = (theme: Theme) => {
		appStore.setTheme(theme)
	}

	return {
		getTheme,
		getLayoutMode,
		isLeftRightLayoutMode,
		isTopBottomLayoutMode,
		setTheme,
		isLightTheme,
		isDarkTheme,
		setAppConfig
	}
}
