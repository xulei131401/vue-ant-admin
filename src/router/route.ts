import type { RouteRecord, RouteRecordRaw } from 'vue-router'
import router from '@/router/index'

const routes: RouteRecord[] = router.getRoutes()

const getRouteRecordByName = (routeName: string): RouteRecord | null => {
	if (!routeName) {
		return null
	}

	return recursion(routes, routeName)
}

const recursion = (routes: any[], routeName: string): RouteRecord | null => {
	for (const [k, v] of Object.entries(routes)) {
		if (v.name === routeName) {
			return v
		}

		if (v.children && v.children.length > 0) {
			return recursion(v.children, routeName)
		}
	}

	return null
}

export { getRouteRecordByName }
