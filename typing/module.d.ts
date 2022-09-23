export {}
declare module 'vue-router' {
	interface RouteMeta extends Record<string | number | symbol, unknown> {
		title: string
		loaded?: boolean
		// uniqueId: string
		[propName: string]: any
	}
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$antIcons: any
		$message: any
	}
}
