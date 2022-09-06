import { Menu } from '@/business/menu/menu'

class SecondLevelMenu {
	public static menuList: Array<Menu> = []
	public static menuMap: Record<string, Menu> = {}

	public constructor() {}

	public static transfer(list: object): void {
		if (!list) {
			return
		}

		// 先清空
		this.menuList.length = 0
		this.menuMap = {}
		for (const [menuKey, menu] of Object.entries(list)) {
			// console.log("menu:", menu)
			// console.log("menuKey:", menuKey)

			// 组装menu
			const _menu = new Menu()
			_menu.title = menu.title ?? ''
			_menu.icon = menu.icon ?? ''
			_menu.isShow = !!menu.is_show
			_menu.identify = menu.route_name ?? ''
			_menu.routeName = menu.route_name ?? ''
			_menu.children = []
			this.addToMenuMap(_menu)
			// 组装children
			const children = menu.children as Array<any>
			for (const [childrenKey, child] of Object.entries(children)) {
				// 组装menuItem
				const _childMenu = new Menu()
				_childMenu.title = child.title ?? ''
				_childMenu.icon = child.icon ?? ''
				_childMenu.identify = child.route_name ?? ''
				_childMenu.routeName = child.route_name ?? ''
				_childMenu.parentMenu = _menu
				_childMenu.isShow = !!child.is_show
				_menu.children.push(_childMenu)

				this.addToMenuMap(_childMenu)
			}

			this.menuList.push(_menu)
		}
	}

	public static addToMenuMap(menu: Menu): void {
		if (typeof this.menuMap[menu.routeName] !== 'undefined') {
			return
		}

		this.menuMap[menu.routeName] = menu
	}

	public static getMenuByKey(key: string): Menu | null {
		return this.menuMap[key] ?? null
	}
}

function transferSecondLevelMenu(res: any): Array<Menu> {
	SecondLevelMenu.transfer(res)
	return SecondLevelMenu.menuList
}

function getMenuInfoByRouteName(routeName: string) {
	if (!routeName) {
		return {}
	}

	const currentMenu = SecondLevelMenu.getMenuByKey(routeName)
	const parentMenu = currentMenu?.parentMenu
	return { currentMenu, parentMenu }
}

export { SecondLevelMenu, transferSecondLevelMenu, getMenuInfoByRouteName }
