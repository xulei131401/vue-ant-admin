import type { Router } from 'vue-router'
import { isLogin } from '@/business/utils/localStorage'
import { usePermissionStoreReturn } from '@/store/modules/permission'
import { ROOT_ROUTE, LOGIN_ROUTE } from '@/router/constant'
import { addAsyncRoute } from '@/router/helper'

export function createPermissionGuard(router: Router) {
	const { permissionState, setHasAddRoute } = usePermissionStoreReturn()

	async function _addMoreRoute() {
		if (!permissionState.hasAddRoute) {
			await addAsyncRoute()
			setHasAddRoute()
			return true
		}

		return false
	}

	router.beforeEach(async (to, from) => {
		const isLoginStatus = isLogin()
		// console.log("to:", to)
		// console.log("from:", from)
		// console.log("router:", router.getRoutes())

		// 已经登录
		if (isLoginStatus) {
			// 添加动态路由, 再重定向一次
			const res = await _addMoreRoute()
			if (res) {
				// console.log("to:", to)
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
