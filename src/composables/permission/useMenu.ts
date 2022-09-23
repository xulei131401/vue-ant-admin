import { usePermissionStore } from '@/store/permission'

/**
 * 将来处理menu的逻辑写在这里
 * @returns
 */
export function useMenu() {
	const permissionStore = usePermissionStore()

	const menuList = computed(() => {
		return permissionStore.getMenuList
	})

	return { menuList }
}
