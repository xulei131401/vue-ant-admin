import { AppRouteRecordRaw } from '@/typing'

export { basicRoutes } from './base'

export async function loadAsyncRoutes() {
	const asyncRoutes: AppRouteRecordRaw[] = []
	const modules = import.meta.glob('./demo/**/*.ts')
	for (const key of Object.keys(modules)) {
		const mod = (<any>await modules[key]()).default
		asyncRoutes.push(mod)
	}

	return asyncRoutes
}
