import type { RouteRecordRaw, RouteLocationNormalized, RouteRecordNormalized } from 'vue-router'
import { router } from '@/router'
import { PageNotFoundRoute } from '@/router/routes/basic'

export const addPageNotFoundRoute = async () => {
	router.addRoute(PageNotFoundRoute as unknown as RouteRecordRaw)
}

export function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized {
	// if (!route) {
	// 	return route
	// }
	// const { matched, ...opt } = route
	// return {
	// 	...opt,
	// 	matched: (matched
	// 		? matched.map((item) => ({
	// 			meta: item.meta,
	// 			name: item.name,
	// 			path: item.path
	// 		}))
	// 		: undefined) as RouteRecordNormalized[]
	// }
}
