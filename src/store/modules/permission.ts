import { defineStore } from 'pinia'
import { MenuType } from '@/models/menu/menu'
import { myMenuAction } from '@/apis'
import { asyncRoutes } from '@/router/routes/modules'
import { router } from '@/router'
import type { RouteRecordRaw } from 'vue-router'

export const usePermissionStore = defineStore({
	id: 'app-permission',
	state: () => ({
		routeBuildFlag: false, // 路由是否构建完毕
		backMenuList: [] as MenuType[],
		frontMenuList: [] as MenuType[]
	}),
	getters: {
		getBackMenuList(): MenuType[] {
			return this.backMenuList
		}
	},
	actions: {
		routeBuildFinish() {
			this.routeBuildFlag = true
		},
		async setBackMenuList() {
			this.backMenuList = await myMenuAction({ isMock: true })
		},
		async setFrontMenuList() {
			return
		},
		/**
		 * 获取最终处理完的路由
		 * @returns
		 */
		async getRoutes(): Promise<RouteRecordRaw[]> {
			// 测试环境下使用
			this.setBackMenuList()
			const routes: RouteRecordRaw[] = []
			routes.push(...asyncRoutes)
			// 根据menu返回真实的路由列表
			// asyncRoutes.forEach((route) => {
			// 	router.addRoute(route as RouteRecordRaw)
			// })

			return routes
		},
		/**
		 * 首次构建路由
		 * @returns
		 */
		async firstBuildRoute() {
			// 首次构建路由完毕
			if (this.routeBuildFlag) {
				return false
			}

			// 首次构建路由
			const routes = await this.getRoutes()
			routes.forEach((route) => {
				router.addRoute(route as unknown as RouteRecordRaw)
			})

			this.routeBuildFinish()
			return true
		}
	}
})
