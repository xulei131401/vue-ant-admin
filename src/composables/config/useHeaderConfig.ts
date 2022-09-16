import { useAppStore } from '@/store/modules/app'

export function useHeaderConfig() {
	const appStore = useAppStore()

	const getFixed = computed(() => appStore.getHeaderConfig.fixed)

	const showLeftRightLayoutHeader = computed(() => {
		return appStore.isLeftRightLayoutMode
	})

	const showTopBottomLayoutHeader = computed(() => {
		return appStore.isTopBottomLayoutMode
	})

	const showHeaderAppLogo = computed(() => {
		return unref(showTopBottomLayoutHeader)
	})

	const showSiderAppLogo = computed(() => {
		return unref(showLeftRightLayoutHeader)
	})

	return { getFixed, showLeftRightLayoutHeader, showTopBottomLayoutHeader, showSiderAppLogo, showHeaderAppLogo }
}
