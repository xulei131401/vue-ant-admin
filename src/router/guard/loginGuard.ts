import { type Router } from 'vue-router'
import { isLogin } from '@/utils'
import { LOGIN_ROUTE, ROOT_ROUTE } from '@/typing'

export function createLoginGuard(router: Router) {
	router.beforeEach(async (to) => {
		if (!isLogin()) {
			if (to.path == LOGIN_ROUTE.path) {
				return true
			}

			return { name: LOGIN_ROUTE.name }
		}

		// 登录以后还要进入登录页，重定向到首页
		if (to.name === LOGIN_ROUTE.name) {
			return { name: ROOT_ROUTE.name }
		}

		return true
	})
}
