import type { App, Plugin, Component } from 'vue';

export const noop = () => { };

export const withInstall = <T>(component: T, alias?: string) => {
	const comp = component as any;
	comp.install = (app: App) => {
		if (!comp.name) {
			console.error("组件没有name属性:", comp)
			return
		}

		app.component(comp.name || comp.displayName, <Component>component);
		if (alias) {
			app.config.globalProperties[alias] = component;
		}
	};
	return component as T & Plugin;
};
