import { type BreadcrumbRoute } from './breadcrumb'
import { MenuCache, MenuCacheValue, MenuPathCache, OmitMenu } from '@/typing'

export class BreadcrumbRouteStatic {
	static defaultBreadcrumbRoute(): BreadcrumbRoute {
		return {
			path: '',
			breadcrumbName: '',
			children: []
		}
	}

	static getBreadcrumbList(path: string): BreadcrumbRoute[] {
		return [
			{
				path: 'index',
				breadcrumbName: 'home'
			},
			{
				path: 'first',
				breadcrumbName: 'first',
				children: [
					{
						path: '/general',
						breadcrumbName: 'General'
					},
					{
						path: '/layout',
						breadcrumbName: 'Layout'
					},
					{
						path: '/navigation',
						breadcrumbName: 'Navigation'
					}
				]
			},
			{
				path: 'second',
				breadcrumbName: 'second'
			}
		]

		if (!path) {
			return []
		}

		const res: BreadcrumbRoute[] = []
		const _path = path
		while (true) {
			const [breadcrumb, parentMenu] = this.recursion(_path)
			if (!breadcrumb) {
				break
			}

			res.unshift(breadcrumb)

			if (!parentMenu) {
				break
			}
		}

		return res
	}

	private static recursion(path: string): [Nullable<BreadcrumbRoute>, Nullable<OmitMenu>] {
		if (path) {
			const menuUniqueId = MenuPathCache.map.get(path) as string
			if (!menuUniqueId) {
				return [null, null]
			}

			const menuCacheValue = MenuCache.map.get(menuUniqueId) as MenuCacheValue
			console.log(menuCacheValue)
			if (!menuCacheValue) {
				return [null, null]
			}
		}

		const breadcrumb = this.defaultBreadcrumbRoute()
		breadcrumb.path = menuCacheValue.menu.routePath
		breadcrumb.breadcrumbName = menuCacheValue.menu.title
		for (const value of menuCacheValue.children) {
			const childrenMenuCacheValue = MenuCache.map.get(value) as MenuCacheValue
			if (!childrenMenuCacheValue) {
				continue
			}

			const childrenBreadcrumb = this.defaultBreadcrumbRoute()
			childrenBreadcrumb.path = childrenMenuCacheValue.menu.routePath
			childrenBreadcrumb.breadcrumbName = childrenMenuCacheValue.menu.title
			breadcrumb.children?.push(childrenBreadcrumb)
		}

		let parentMenu: Nullable<OmitMenu> = null
		if (menuCacheValue.menu.parentUniqueId) {
			const parentMenuCacheValue = MenuCache.map.get(menuCacheValue.menu.parentUniqueId) as MenuCacheValue
			if (parentMenuCacheValue) {
				parentMenu = parentMenuCacheValue.menu
			}
		}

		return [breadcrumb, parentMenu]
	}
}
