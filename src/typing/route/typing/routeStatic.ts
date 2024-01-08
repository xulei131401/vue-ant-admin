import { isArray, isEmpty } from '@/utils'
import { AppRouteRecordRaw } from './route'
import { dynamicImport, LAYOUT_COMPONENT } from '@/typing'

export class RouteStatic {
	static routeList: AppRouteRecordRaw[] = []

	static initRoute(data: any[]): void {
		if (!data || !isArray(data) || isEmpty(data)) {
			return
		}

		this.routeList.length = 0
		this.routeList = this.recursionTop(data)
		// console.log('this.routeList:', this.routeList)
	}

	/**
	 * 递归顶层路由
	 * @param data
	 * @param parent
	 * @returns
	 */
	private static recursionTop(data: any[]): AppRouteRecordRaw[] {
		if (!data || data.length === 0) {
			return []
		}

		const res: AppRouteRecordRaw[] = []
		for (const [_, item] of Object.entries(data)) {
			const isTopLevel = !item.parentUniqueId
			// 唯一标识必须有
			// 必须是顶级
			if (!item.uniqueId || !isTopLevel) {
				continue
			}

			const routeRecordRaw: AppRouteRecordRaw = createAppRouteRecordRaw(item)
			routeRecordRaw.component = LAYOUT_COMPONENT

			const children = this.recursionNesting(item.children)
			if (!isEmpty(children)) {
				routeRecordRaw.children = children
				// children根据orderNo排序
				// 把第一个设置成redirect
				routeRecordRaw.redirect = `${children[0].path}`
			}

			res.push(routeRecordRaw)
		}

		return res
	}

	/**
	 * 递归子级路由
	 * @param data
	 * @param parent
	 * @returns
	 */
	private static recursionNesting(data: any[]): AppRouteRecordRaw[] {
		if (!data || data.length === 0) {
			return []
		}

		const res: AppRouteRecordRaw[] = []
		for (const [_, item] of Object.entries(data)) {
			const isTopLevel = !item.parentUniqueId
			// 唯一标识必须有
			// 如果是组件，组件路径必须有
			if (!item.uniqueId || isTopLevel || (item.isPage && !item.componentPath)) {
				continue
			}

			// 不是组件则继续递归children
			if (!item.isPage) {
				const children = this.recursionNesting(item.children)
				res.push(...children)
				continue
			}

			// 如果是组件
			const routeRecordRaw: AppRouteRecordRaw = createAppRouteRecordRaw(item)
			routeRecordRaw.component = dynamicImport(item.componentPath)
			res.push(routeRecordRaw)
		}

		return res
	}
}

function createAppRouteRecordRaw(item: any): AppRouteRecordRaw {
	return {
		path: item.routePath ?? '',
		name: item.routeName ?? '',
		meta: {
			title: item.title ?? '',
			icon: item.icon ?? ''
		},
		children: []
	}
}
