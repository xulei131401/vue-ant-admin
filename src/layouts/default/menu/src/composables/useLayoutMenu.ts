import { usePermissionStore } from '@/store/modules/permission'
import { MenuType } from '@/models/menu/menu'
import { menus } from '@/mocks/menu'

export function useLayoutMenu() {
	const menusRef = ref<MenuType[]>([])

	const permissionStore = usePermissionStore()
	watch(
		[() => permissionStore.getBackMenuList],
		() => {
			menusRef.value = permissionStore.getBackMenuList
		},
		{
			deep: true,
			immediate: true
		}
	)
	return { menusRef }
}
