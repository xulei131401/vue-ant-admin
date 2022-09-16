import { useAppStore } from '@/store/modules/app'

export function useSiderConfig() {
	const appStore = useAppStore()

	const getCollapsed = computed(() => appStore.getMenuConfig.collapsed)
	const getCollapsedWidth = computed(() => appStore.getSiderConfig.collapsedWidth)
	const getWidth = computed(() => appStore.getSiderConfig.width)
	const getCalcContentWidth = computed(() => {
		const width = appStore.getSiderConfig.width
		return `calc(100% - ${unref(width)}px)`
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

	return { getCollapsedWidth, getWidth, getCollapsed, onCollapsed, getCalcContentWidth }
}
