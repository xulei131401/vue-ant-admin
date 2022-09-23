import { type Router } from 'vue-router'
import { createModeGuard } from './modeGuard'
import { createApiGuard } from './apiGuard'
import { createLoginGuard } from './loginGuard'
import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router: Router) {
	// 顺序不能随意修改，有先后依赖
	createModeGuard(router)
	createLoginGuard(router)
	createApiGuard(router)
	createPermissionGuard(router)
}
