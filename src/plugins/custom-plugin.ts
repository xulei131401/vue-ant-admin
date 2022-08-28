import { App, Component } from '@vue/runtime-dom';
const modulesFiles = import.meta.globEager('@/components/**/*.vue')

export default {
	install(app: App) {
		// 注册为全局组件
		for (const i in modulesFiles) {
			const component: Component = modulesFiles[i].default
			if (!component.name) {
				console.error("组件缺少name属性:", component)
				continue
			}

			app.component(component.name, component)
		}
	}
}
