import type { App, Plugin, Component } from 'vue'
/**
 * 通用组件全局安装函数
 * @param component
 * @param alias
 * @returns
 */
export const withInstall = <T>(component: T, alias?: string) => {
	const comp = component as any
	comp.install = (app: App) => {
		if (!comp.name) {
			console.error('组件没有name属性:', comp)
			return
		}

		app.component(comp.name || comp.displayName, <Component>component)
		if (alias) {
			app.config.globalProperties[alias] = component
		}
	}
	return component as T & Plugin
}
