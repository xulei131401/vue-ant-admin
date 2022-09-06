import { RouteRecordRaw } from 'vue-router'
import { PAGE_NOT_FOUND_ROUTE } from '@/router/constant'
import { LAYOUT_COMPONENT, EXCEPTION_COMPONENT } from '@/router/components'

export const PageNotFoundRoute: RouteRecordRaw = {
	path: PAGE_NOT_FOUND_ROUTE.path,
	name: PAGE_NOT_FOUND_ROUTE.name,
	component: LAYOUT_COMPONENT,
	meta: {
		title: '404'
	},
	children: [
		{
			path: PAGE_NOT_FOUND_ROUTE.path,
			name: PAGE_NOT_FOUND_ROUTE.childrenName,
			component: EXCEPTION_COMPONENT,
			meta: {
				title: '404error',
				hideBreadcrumb: true,
				hideMenu: true
			}
		}
	]
}
