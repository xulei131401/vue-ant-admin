import { defineStore } from 'pinia'
import { RouteStatic, AppRouteRecordRaw, MenuStatic, type Menu, BreadcrumbRoute, BreadcrumbRouteStatic } from '@/typing'
import { myMenuAction } from '@/apis'
import { router } from '@/router'
// import { loadAsyncRoutes } from '@/router/routes'

export const usePermissionStore = defineStore({
	id: 'app-permission',
	state: () => ({
		addDynamicRoute: false,
		loadMyMenu: false,
		menuList: [] as Menu[],
		routeList: [] as AppRouteRecordRaw[]
	}),
	getters: {
		getMenuList(): Menu[] {
			return this.menuList || []
		},
		getRouteList(): AppRouteRecordRaw[] {
			return this.routeList || []
		},
		getBreadcrumbList(): BreadcrumbRoute[] {
			const route = useRoute()
			return BreadcrumbRouteStatic.getBreadcrumbList(route.path)
		},
		isAddDynamicRoute(): boolean {
			return this.addDynamicRoute
		},
		isLoadMyMenu(): boolean {
			return this.loadMyMenu
		}
	},
	actions: {
		setAddDynamicRoute() {
			this.addDynamicRoute = true
		},
		setLoadMyMenu() {
			this.loadMyMenu = true
		},
		async setMyMenu() {
			await myMenuAction()
			this.setLoadMyMenu()
			this.setMenuList()
			this.setRouteList()
		},
		async setMenuList() {
			this.menuList = MenuStatic.menuList
		},
		async setRouteList() {
			this.routeList = RouteStatic.routeList
		},
		async getAsyncRoutes() {
			// const asyncRoutes = await loadAsyncRoutes()
			const asyncRoutes = this.getRouteList
			return [...asyncRoutes]
		},
		async addDynamicRoutes() {
			if (this.isAddDynamicRoute) {
				return
			}

			const routes = await this.getAsyncRoutes()
			routes.forEach((route) => {
				router.addRoute(route)
			})

			this.setAddDynamicRoute()
		}
	}
})
