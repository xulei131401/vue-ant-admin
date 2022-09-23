import { RouteRecordRaw } from 'vue-router'
import { LOGIN_ROUTE, ROOT_ROUTE, HOME_ROUTE, PAGE_NOT_FOUND_ROUTE, LAYOUT_COMPONENT, EXCEPTION_COMPONENT, LOGIN_COMPONENT } from '@/typing'

export const RootRoute: RouteRecordRaw = {
	name: ROOT_ROUTE.name,
	path: ROOT_ROUTE.path,
	redirect: HOME_ROUTE.path,
	meta: { title: '根路径' }
}

export const LoginRoute: RouteRecordRaw = {
	name: LOGIN_ROUTE.name,
	path: LOGIN_ROUTE.path,
	component: LOGIN_COMPONENT,
	meta: { title: '登录页面' }
}

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

export const basicRoutes = [RootRoute, LoginRoute, PageNotFoundRoute]
