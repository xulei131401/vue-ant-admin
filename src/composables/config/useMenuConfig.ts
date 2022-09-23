import { useAppStore } from '@/store/app'
import { Theme } from '@/enums'

export function useMenuConfig() {
	const appStore = useAppStore()
	const getMenuTheme = computed(() => appStore.getMenuConfig.theme)
	const getMenuMode = computed(() => appStore.getMenuConfig.mode)
	const isDarkTheme = computed(() => unref(getMenuTheme) === Theme.DARK)
	const isLightTheme = computed(() => unref(getMenuTheme) === Theme.LIGHT)
	const setMenuTheme = (theme: Theme) => {
		appStore.setMenuTheme(theme)
	}
	return {
		getMenuTheme,
		getMenuMode,
		setMenuTheme,
		isDarkTheme,
		isLightTheme
	}
}
