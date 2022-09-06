import type { Router } from 'vue-router'
import { createPageGuard } from './pageGuard'
import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router: Router) {
	// 顺序不能随意修改，有先后依赖
	createPageGuard(router)
	createPermissionGuard(router)
}
