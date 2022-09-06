import type { RouteRecordRaw } from 'vue-router'
import { router } from '@/router'
import { asyncRoutes } from '@/router/routes/modules'
import { PageNotFoundRoute } from '@/router/routes/basic'

export const addAsyncRoute = async () => {
	asyncRoutes.forEach((route) => {
		router.addRoute(route as unknown as RouteRecordRaw)
	})
}

export const addPageNotFoundRoute = async () => {
	router.addRoute(PageNotFoundRoute as unknown as RouteRecordRaw)
}
