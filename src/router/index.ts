import { type App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { basicRoutes } from '@/router/routes'
import { setupRouterGuard } from '@/router/guard'

export const router = createRouter({
	history: createWebHistory(), // history路由模式
	routes: basicRoutes as unknown as RouteRecordRaw[],
	strict: true, // 是否应该禁止尾部斜杠。默认为假
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export default {
	install(app: App) {
		setupRouter(app)
	}
}

// 注册路由
export function setupRouter(app: App) {
	app.use(router)
	setupRouterGuard(router)
}
