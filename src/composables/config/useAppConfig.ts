import { useAppStore } from '@/store/modules/app'
import { ThemeEnum } from '@/enums/themeEnum'
import type { AppConfig } from '@/configs'

export function useAppConfig() {
	const appStore = useAppStore()

	const getTheme = computed(() => appStore.getTheme)
	const isDarkTheme = computed(() => unref(getTheme) === ThemeEnum.DARK)
	const isLightTheme = computed(() => unref(getTheme) === ThemeEnum.LIGHT)
	const getLayoutMode = computed(() => {
		const { mode } = appStore.getLayoutConfig
		return mode
	})

	const setAppConfig = (setting: Partial<AppConfig>) => {
		appStore.setAppConfig(setting)
	}

	const setTheme = (mode: ThemeEnum) => {
		appStore.setTheme(mode)
	}

	const switchTheme = () => {
		if (unref(isDarkTheme)) {
			setTheme(ThemeEnum.LIGHT)
		} else if (unref(isLightTheme)) {
			setTheme(ThemeEnum.DARK)
		}
	}

	return { getTheme, getLayoutMode, switchTheme, isLightTheme, isDarkTheme, setAppConfig, setTheme }
}
