import { usePermissionStore } from '@/store/permission'
import { type Menu } from '@/typing/menu'

export function useLayoutMenu() {
	const menusRef = ref<Menu[]>([])

	const permissionStore = usePermissionStore()
	watch(
		[() => permissionStore.getMenuList],
		() => {
			menusRef.value = permissionStore.getMenuList
		},
		{
			deep: true,
			immediate: true
		}
	)
	return { menusRef }
}
