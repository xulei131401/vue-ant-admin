import { defineStore } from 'pinia'
import { loginAction, myInfoAction } from '@/apis'
import { useMixStore } from './mix'
import { UserInfo } from '@/typing/user'

export const useUserStore = defineStore({
	id: 'app-user',
	state: () => ({
		userInfo: {} as UserInfo,
		loadUserInfo: false
	}),
	getters: {
		getUserInfo(): UserInfo {
			return this.userInfo || {}
		},
		isLoadUserInfo(): boolean {
			return this.loadUserInfo
		}
	},
	actions: {
		async setUserInfo() {
			this.userInfo = await myInfoAction()
			this.setLoadUserInfo()
		},
		setLoadUserInfo() {
			this.loadUserInfo = true
		},
		async login() {
			const mixStore = useMixStore()
			await loginAction({ username: 'xxxx', password: '121212' })
			return mixStore.afterLogin()
		}
	}
})
