import { defineStore } from 'pinia'
import { router } from '@/router'
import { HOME_ROUTE } from '@/router/constant'
import { loginAction, myInfoAction } from '@/apis'
import { setLogin } from '@/utils/storage/localStorage'
import { UserInfo } from '@/models/user/user'
import { usePermissionStore } from './permission'

export const useUserStore = defineStore({
	id: 'app-user',
	state: () => ({
		userInfo: {} as UserInfo
	}),
	actions: {
		async login() {
			const loginInfo = await loginAction({ username: 'xxxx', password: '121212' }, { isMock: true })
			console.log('登录信息:', loginInfo)
			setLogin()
			return this.afterLogin()
		},
		async afterLogin() {
			const permissionStore = usePermissionStore()
			this.userInfo = await myInfoAction()
			permissionStore.setBackMenuList()
			await router.replace(HOME_ROUTE.path)
		}
	}
})
