import { type Router } from 'vue-router'
import { usePermissionStore } from '@/store/permission'

export function createPermissionGuard(router: Router) {
	const permissionStore = usePermissionStore()

	router.beforeEach(async (to) => {
		if (!permissionStore.isAddDynamicRoute) {
			await permissionStore.addDynamicRoutes()
			return to.fullPath
		}

		return true
	})
}
