import { RouteRecordRaw } from 'vue-router'
import { LOGIN_ROUTE, ROOT_ROUTE, HOME_ROUTE } from '@/router/constant'
import { LOGIN_COMPONENT } from '@/router/components'
import { PageNotFoundRoute } from '@/router/routes/basic'

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

export const basicRoutes = [RootRoute, LoginRoute, PageNotFoundRoute]

export * from './modules'
