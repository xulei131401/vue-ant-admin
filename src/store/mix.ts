import { defineStore } from 'pinia'
import { setLoginCache } from '@/utils'
import { router } from '@/router'
import { HOME_ROUTE } from '@/typing'

export const useMixStore = defineStore({
	id: 'mix',
	state: () => ({}),
	getters: {},
	actions: {
		async afterLogin() {
			setLoginCache()
			await router.replace(HOME_ROUTE.path)
		}
	}
})
