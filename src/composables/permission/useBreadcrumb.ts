import { usePermissionStore } from '@/store/permission'

export function useBreadcrumb() {
	const permissionStore = usePermissionStore()
	const routes = computed(() => {
		console.log('breadcrumbList:', permissionStore.getBreadcrumbList)
		return permissionStore.getBreadcrumbList
	})

	return { routes }
}
