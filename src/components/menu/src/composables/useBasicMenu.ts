import type { MenuType } from '@/models/menu/menu'
import type { MenuState } from '../props'
import { uniq } from 'lodash-es'

export function useBasicMenu() {
	return {}
}

export function useOpenKeys(menuState: MenuState) {
	/**
	 * 用来修改openKeys
	 * @param path
	 */
	async function setOpenKeys(path: string) {
		// 根据传入的path，寻找menus数据中所有父级path
		menuState.openKeys = []
	}

	/**
	 * 清空相应的keys
	 */
	async function resetMenuKeys() {
		menuState.selectedKeys = []
		menuState.openKeys = []
	}

	/**
	 * SubMenu 展开/关闭的回调
	 * @param openKeys
	 */
	async function onOpenChange(openKeys: string[]) { }
	return { setOpenKeys, resetMenuKeys, onOpenChange }
}

export function useSelectedKeys(menuState: MenuState) {
	/**
	 * 	点击 MenuItem 调用此函数
	 * @param param
	 */
	async function onClickMenu({ key, keyPath }: { key: string; keyPath: string[] }) {
		console.log(key, keyPath)
	}
	return { onClickMenu }
}
