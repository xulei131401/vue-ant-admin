import { defineStore } from 'pinia'
import { store } from '@/store'
import { myMenuAction } from '@/apis'
import { Menu } from '@/business/menu/menu'

export const useAppStore = defineStore('app', () => {
	type StoreState = {
		menuList: Array<Menu>
	}

	const storeState = reactive<StoreState>({
		menuList: []
	})

	const loadMy = async () => {
		const res = await Promise.all([myMenuAction({ isMock: true, sleep: 500 })])
		storeState.menuList = res[0]
	}

	const menuList = toRef(storeState, 'menuList')
	return {
		menuList,
		loadMy
	}
})

// Need to be used outside the setup
export function useAppStoreReturn() {
	return useAppStore(store)
}
