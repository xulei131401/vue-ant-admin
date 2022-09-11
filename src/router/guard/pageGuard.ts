import type { Router } from 'vue-router'
import { emitRoute } from '../helper'

export function createPageGuard(router: Router) {
	const loadedPageMap = new Map<string, boolean>()

	router.beforeEach(async (to) => {
		to.meta.loaded = !!loadedPageMap.get(to.path)
		emitRoute(to)
		return true
	})

	router.afterEach((to) => {
		loadedPageMap.set(to.path, true)
	})
}
