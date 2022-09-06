import { RouteRecordRaw } from 'vue-router'

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.globEager('./demo/**/*.ts')
const routeModuleList: RouteRecordRaw[] = []

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
	const mod = modules[key].default || {}
	const modList = Array.isArray(mod) ? [...mod] : [mod]
	routeModuleList.push(...modList)
})

// 导出所有的异步组件
export const asyncRoutes = [...routeModuleList]
