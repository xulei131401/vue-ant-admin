import 'vue-router'
declare module 'vue-router' {
	interface RouteMeta {
		title: string
	}
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$antIcons: any
		$message: any
	}
}
