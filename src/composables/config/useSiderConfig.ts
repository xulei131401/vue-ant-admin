import { useAppStore } from '@/store/app'
import { Theme } from '@/enums'

export function useSiderConfig() {
	const appStore = useAppStore()

	const getCollapsed = computed(() => appStore.getMenuConfig.collapsed)
	const getCollapsedWidth = computed(() => appStore.getSiderConfig.collapsedWidth)
	const getSiderTheme = computed(() => appStore.getSiderConfig.theme)
	const isDarkTheme = computed(() => unref(getSiderTheme) === Theme.DARK)
	const isLightTheme = computed(() => unref(getSiderTheme) === Theme.LIGHT)
	const getWidth = computed(() => appStore.getSiderConfig.width)
	const getCalcContentWidth = computed(() => {
		const width = appStore.getSiderConfig.width
		return `calc(100% - ${unref(width)}px)`
	})
	const showSiderAppLogo = computed(() => {
		return appStore.isLeftRightLayoutMode
	})

	const onCollapsed = () => {
		appStore.setAppConfig({
			layout: {
				menu: {
					collapsed: !unref(getCollapsed)
				}
			}
		})
	}

	return {
		getCollapsedWidth,
		getSiderTheme,
		isDarkTheme,
		isLightTheme,
		getWidth,
		getCollapsed,
		onCollapsed,
		getCalcContentWidth,
		showSiderAppLogo
	}
}
