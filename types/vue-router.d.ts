export { }
declare module 'vue-router' {
	interface RouteMeta extends Record<string | number | symbol, unknown> {
		title: string
		loaded?: boolean
		[propName: string]: any
	}
}
