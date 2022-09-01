export { }
declare module 'vue-router' {
	interface RouteMeta extends Record<string | number | symbol, unknown> {
		title: string
		[propName: string]: any
	}
}
