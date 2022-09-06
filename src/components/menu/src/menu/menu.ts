// 前端需要的数据结构，需要与接口适配
export interface Menu {
	identify: string // 唯一标识
	title: string // 展示标题
	path: string // 前端路由path
	disabled?: boolean // 禁用flag
	icon?: string // icon图标
	children?: Menu[] // 子菜单
	orderNo?: number // 排序
	hideMenu?: boolean // 是否显示
	parentPath?: string // 直接父级的path
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
