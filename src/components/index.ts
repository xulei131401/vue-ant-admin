import type { App, Plugin, Component } from 'vue';

import * as components from './components';
export * from './components';

export const install = function (app: App) {
	const _components = components as unknown as Plugin[]
	for (const [key, component] of Object.entries(_components)) {
		if (component.install) {
			app.use(component);
		}
	}

	return app;
};

export default {
	install,
};
