import { useAppStore } from '@/store/app'
import { RootCssProperties, Theme } from '@/enums'
import { DARK_COLOR, LIGHT_COLOR } from '@/constant'
import { setCssVar } from '@/utils'

export function useHeaderConfig() {
	const appStore = useAppStore()
	const getFixed = computed(() => appStore.getHeaderConfig.fixed)
	const getHeaderTheme = computed(() => appStore.getHeaderConfig.theme)
	const getHeaderBgColor = computed(() => appStore.getHeaderConfig.bgColor)
	const isDarkTheme = computed(() => unref(getHeaderTheme) === Theme.DARK)
	const isLightTheme = computed(() => unref(getHeaderTheme) === Theme.LIGHT)

	const setHeaderTheme = (theme: Theme) => {
		appStore.setHeaderTheme(theme)
		updateHeaderBgColor()
	}

	const updateHeaderBgColor = (bgColor?: string) => {
		if (!bgColor) {
			bgColor = unref(isDarkTheme) ? DARK_COLOR : LIGHT_COLOR
		}

		appStore.setHeaderBgColor(bgColor)
		setCssVar(RootCssProperties.HEADER_BG_COLOR_VAR, bgColor)
	}

	return {
		getFixed,
		getHeaderTheme,
		getHeaderBgColor,
		isDarkTheme,
		isLightTheme,
		setHeaderTheme,
		updateHeaderBgColor
	}
}
