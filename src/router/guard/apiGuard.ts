import { type Router } from 'vue-router'
import { usePermissionStore } from '@/store/permission'
import { useUserStore } from '@/store/user'
import { isLogin } from '@/utils'

export function createApiGuard(router: Router) {
	const permissionStore = usePermissionStore()
	const userStore = useUserStore()

	router.beforeEach(async () => {
		if (!isLogin()) {
			return false
		}

		if (!userStore.isLoadUserInfo) {
			await userStore.setUserInfo()
		}

		if (!permissionStore.isLoadMyMenu) {
			await permissionStore.setMyMenu()
		}

		return true
	})
}
