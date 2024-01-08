import { type App, type Plugin, type Component } from 'vue'

import * as components from './components'
export * from './components'

export const install = function (app: App) {
	const _components = components as unknown as Plugin[] // 必须这么写
	for (const [_, component] of Object.entries(_components)) {
		if (component.install) {
			app.use(component)
		}
	}

	return app
}

export default {
	install
}
