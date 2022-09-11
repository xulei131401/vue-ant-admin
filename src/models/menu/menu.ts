import { uniq } from 'lodash-es'
// 前端需要的数据结构，需要与接口适配
export interface MenuType {
	identify: string // 唯一标识
	title: string // 展示标题
	path: string // 前端路由path
	disabled?: boolean // 禁用flag
	icon?: string // icon图标
	children?: MenuType[] // 子菜单
	orderNo?: number // 排序
	hideMenu?: boolean // 是否显示
	parentPath?: string // 直接父级的path
}

export function NewMenuType(): MenuType {
	return {
		identify: '',
		title: '',
		path: ''
	}
}

export class Menu {
	static menuList: Array<MenuType> = []
	static menuMap = new Map<string, MenuType>()

	static addMenu(key: string, value: MenuType) {
		this.menuMap.set(key, value)
	}

	static delMenu(key: string) {
		this.menuMap.delete(key)
	}

	static initMenu(list: object): void {
		if (!list) {
			return
		}

		this.menuList.length = 0
		this.menuMap.clear()
		for (const [_, menu] of Object.entries(list)) {
			const _menu = NewMenuType()
			_menu.title = menu.title ?? ''
			_menu.icon = menu.icon ?? ''
			_menu.hideMenu = !menu.is_show
			_menu.identify = menu.identify ?? ''
			_menu.path = menu.path ?? ''
			_menu.children = []
			this.addMenu(_menu.path, _menu)
			const children = menu.children as Array<any>
			for (const [_, child] of Object.entries(children)) {
				// 组装menuItem
				const _childMenu = NewMenuType()
				_childMenu.title = child.title ?? ''
				_childMenu.icon = child.icon ?? ''
				_childMenu.identify = child.identify ?? ''
				_childMenu.path = child.path ?? ''
				_childMenu.parentPath = _menu.path
				_childMenu.hideMenu = !child.is_show
				_menu.children.push(_childMenu)
				this.addMenu(_childMenu.path, _childMenu)
			}

			this.menuList.push(_menu)
		}
	}

	// getMenuInfoByRouteName(routeName: string) {
	// 	if (!routeName) {
	// 		return {}
	// 	}

	// 	const currentMenu = SecondLevelMenu.getMenuByKey(routeName)
	// 	const parentMenu = currentMenu?.parentMenu
	// 	return { currentMenu, parentMenu }
	// }

	/**
	 * 向上查找所有的父级path，返回一个数组(不包括自己)
	 * @param path
	 * @returns
	 */
	static getAllParentPath(path: string): string[] {
		if (!path) {
			return []
		}

		const selfMenu = this.menuMap.get(path) as MenuType
		if (!selfMenu || !selfMenu.parentPath) {
			return []
		}

		const paths: string[] = []
		let tempPath = selfMenu.parentPath

		while (true) {
			const parent = this.menuMap.get(tempPath) as MenuType
			if (!parent) {
				break
			}

			paths.push(parent.path)
			if (!parent.parentPath) {
				break
			}

			tempPath = parent.parentPath
		}

		return uniq([...paths])
	}

	static hasChildren(_menu: MenuType): boolean {
		return Reflect.has(_menu, 'children') && !!_menu.children && _menu.children.length > 0
	}
}
