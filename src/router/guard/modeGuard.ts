import { type Router } from 'vue-router'
import { isDevMode, isLogin } from '@/utils'
import { useUserStore } from '@/store/user'

export function createModeGuard(router: Router) {
	const userStore = useUserStore()
	router.beforeEach(async () => {
		if (!isDevMode()) {
			return true
		}

		if (!isLogin()) {
			await userStore.login()
		}

		return true
	})
}
