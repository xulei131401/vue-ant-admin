import type { Router } from 'vue-router'
import { isLogin } from '@/utils/storage/localStorage'
import { usePermissionStore } from '@/store/modules/permission'
import { ROOT_ROUTE, LOGIN_ROUTE } from '@/router/constant'

export function createPermissionGuard(router: Router) {
	const permissionStore = usePermissionStore()

	router.beforeEach(async (to, _) => {
		const isLoginStatus = isLogin()
		// console.log("to:", to)
		// console.log("from:", from)
		// console.log("router:", router.getRoutes())

		// 已经登录
		if (isLoginStatus) {
			const isFirstBuildRoute = await permissionStore.firstBuildRoute()
			if (isFirstBuildRoute) {
				return to.fullPath
			}

			// 登录以后还要进入登录页，重定向到首页
			if (to.name === LOGIN_ROUTE.name) {
				return { name: ROOT_ROUTE.name }
			}

			return true
		}

		// 没登录重定向到登录页
		if (!isLoginStatus) {
			return { name: LOGIN_ROUTE.name }
		}
	})
}
