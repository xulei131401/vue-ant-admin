import { defineStore } from "pinia";
import { myMenuAction } from '@/apis'
import { Menu } from '@/business/menu/menu'

export const useMainStore = defineStore("main", () => {
	type StoreState = {
		menuList: Array<Menu>
	}

	let storeState = reactive<StoreState>({
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
});
