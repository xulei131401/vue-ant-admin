import { useAppStore } from '@/store/modules/app'

export function useMenuConfig() {
	const appStore = useAppStore()

	const toggleCollapsed = () => {
		appStore.setProjectConfig({
			menu: {
				collapsed: !unref(getCollapsed)
			}
		})
	}

	const getCollapsed = computed(() => appStore.getMenuConfig.collapsed)
	return { getCollapsed, toggleCollapsed }
}
