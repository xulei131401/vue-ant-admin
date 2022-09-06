import { defineStore } from 'pinia'
import { store } from '@/store'
import { router } from '@/router'
import { RouterPathEnum } from '@/enums/routerPathEnum'
import { usePermissionStoreReturn } from '@/store/modules/permission'

export const useUserStore = defineStore('app-user', () => {
	const userInfo = ref(null)
	const afterLoginAction = async () => {
		await router.replace(RouterPathEnum.BASE_HOME)
		return
	}

	return {
		afterLoginAction
	}
})

export function useUserStoreReturn() {
	return useUserStore(store)
}
