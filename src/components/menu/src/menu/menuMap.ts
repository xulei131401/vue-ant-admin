// 1.从接口获取数据menus
// 2.menus转换成前端需要的数据
// 3.转换的过程中生成一个全局的map，方便查询
import type { Menu } from './menu'
import { uniq } from 'lodash-es'
const MenuMap = new Map<string, Menu>()

export function initMenuMap(params: []) {
	for (const value of Object.entries(params)) {
		MenuMap.set(value.path, value)
	}
}

export function addMenuMap(key: string, value: Menu) {
	MenuMap.set(key, value)
}

export function delMenuMap(key: string) {
	MenuMap.delete(key)
}

/**
 * 向上查找所有的父级path，返回一个数组(不包括自己)
 * @param path
 * @returns
 */
export function getAllParentPath(path: string): string[] {
	if (!path) {
		return []
	}
	const selfMenu = MenuMap.get(path) as Menu
	if (!selfMenu || !selfMenu.parentPath) {
		return []
	}

	const paths: string[] = []
	const tempPath = selfMenu.parentPath
	// TODO: 待修改
	while (true) {
		const parent = MenuMap.get(tempPath) as Menu
		if (!parent || !parent.path) {
			break
		}

		paths.push(parent.path)
		// tempPath = parent.parentPath
	}

	return uniq([...paths])
}

/**
 *
 * @param _menu 判断menu有没有children
 */
export function menuHasChildren(_menu: Menu): boolean {
	return Reflect.has(_menu, 'children') && !!_menu.children && _menu.children.length > 0
}

export function createMenuTemplate(): Menu {
	return {
		identify: '',
		title: '',
		path: '',
		icon: '',
		children: [],
		disabled: false,
		hideMenu: false
	}
}
