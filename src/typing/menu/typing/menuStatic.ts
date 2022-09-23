import { isArray, isEmpty } from '@/utils'
import { type Menu } from './menu'
import { MenuBuilder } from './menuBuilder'
import { MenuCache, MenuCacheValue, MenuPathCache } from './menuCache'

export class MenuStatic {
	static menuList: Menu[] = []

	static defaultMenu(): Menu {
		return {
			uniqueId: '',
			title: '',
			routePath: '',
			parentUniqueId: '',
			icon: '',
			orderNo: 0,
			children: []
		}
	}

	static hasChildren(menu: Menu): boolean {
		return Reflect.has(menu, 'children') && !!menu.children && menu.children.length > 0
	}

	static initMenu(data: any[]): void {
		if (!data || !isArray(data) || isEmpty(data)) {
			return
		}

		{
			this.menuList.length = 0
			MenuCache.clear()
		}

		const [list, _] = this.recursion(data)
		this.menuList = list
	}

	/**
	 * 递归构建menu,返回menu项和当前menu所有children的唯一标识数组
	 * @param data
	 * @param parent
	 * @returns
	 */
	private static recursion(data: any[], parent?: MenuBuilder): [Menu[], string[]] {
		if (!data || data.length === 0) {
			return [[], []]
		}

		const res: Menu[] = []
		const uniqueIds: string[] = []
		for (const [_, item] of Object.entries(data)) {
			if (!item.uniqueId) {
				continue
			}

			// 通过builder模式构建
			const menuBuilder = new MenuBuilder()
			menuBuilder.setUniqueId(item.uniqueId).setTitle(item.title).setIcon(item.icon).setOrderNo(item.orderNo).setRoutePath(item.routePath)
			if (parent) {
				menuBuilder.setParentUniqueId(parent.uniqueId)
			}

			const [children, childrenUniqueIds] = this.recursion(item.children, menuBuilder)
			menuBuilder.setChildren(children)
			const menu = menuBuilder.build()

			{
				// 添加结果集
				res.push(menu)
				// 提供给menuCache存储
				uniqueIds.push(menu.uniqueId)
			}

			{
				// 添加menuCache
				const { children: _, ...omitMenu } = menu
				MenuCache.add(menu.uniqueId, new MenuCacheValue(omitMenu, childrenUniqueIds))
				// 添加menuPathCache
				MenuPathCache.add(menu.routePath, menu.uniqueId)
			}
		}

		return [res, uniqueIds]
	}

	/**
	 * 向上查找所有的父级path，返回一个数组(不包括自己)
	 * @param path
	 * @returns
	 */
	// static getAllParentPath(path: string): string[] {
	// 	if (!path) {
	// 		return []
	// 	}

	// 	const selfMenu = this.menuMap.get(path) as Menu
	// 	if (!selfMenu || !selfMenu.parentUniqueId) {
	// 		return []
	// 	}

	// 	const paths: string[] = []
	// 	let tempPath = selfMenu.parentUniqueId

	// 	while (true) {
	// 		const parent = this.menuMap.get(tempPath) as Menu
	// 		if (!parent) {
	// 			break
	// 		}

	// 		paths.push(parent.path)
	// 		if (!parent.parentPath) {
	// 			break
	// 		}

	// 		tempPath = parent.parentPath
	// 	}

	// 	return uniq([...paths])
	// }
}
