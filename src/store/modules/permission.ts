import { defineStore } from "pinia"
import { store } from '@/store'

interface PermissionState {
	hasAddRoute: boolean // 是否已经添加过路由
}

export const usePermissionStore = defineStore("app-permission", () => {
	const permissionState = reactive<PermissionState>({
		hasAddRoute: false
	})


	const setHasAddRoute = () => {
		permissionState.hasAddRoute = true
	}

	return {
		permissionState,
		setHasAddRoute
	}
});

export function usePermissionStoreReturn() {
	return usePermissionStore(store);
}
