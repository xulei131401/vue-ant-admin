// 存放所有的路由组件
export const LAYOUT_COMPONENT = () => import('@/layouts/default/index.vue')
export const LOGIN_COMPONENT = () => import('@/views/sys/login/Login.vue')
export const EXCEPTION_COMPONENT = () => import('@/views/sys/exception/Exception.vue')

const modules = import.meta.glob('../../../views/**/*.vue')

/**
 * 动态导入不能使用别名和绝对路径，此文件若移动位置，记得修改下边views的相对路径
 * @param path
 * @returns
 */
export function dynamicImport(path: string) {
	if (!path) {
		Promise.reject()
	}

	return modules[`../../../views${path}/index.vue`]
}
