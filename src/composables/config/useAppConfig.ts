import { useAppStore } from '@/store/modules/app'
import type { AppConfig } from '@/configs'
import { ThemeModeEnum } from '@/enums/themeEnum'

export function useAppConfig() {
	const appStore = useAppStore()

	const getThemeMode = computed(() => appStore.getThemeMode)
	const isDarkTheme = computed(() => getThemeMode.value === ThemeModeEnum.DARK)

	const getLayoutMode = computed(() => {
		const { mode } = appStore.getLayoutConfig
		return mode
	})

	const setAppConfig = (setting: Partial<AppConfig>) => {
		appStore.setAppConfig(setting)
	}

	const setThemeMode = (mode: ThemeModeEnum) => {
		appStore.setThemeMode(mode)
	}

	return { getThemeMode, getLayoutMode, isDarkTheme, setAppConfig, setThemeMode }
}
