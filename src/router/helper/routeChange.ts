import mitt, { Emitter } from 'mitt'
import type { RouteLocationNormalized } from 'vue-router'

type Events = {
	app_route_change: RouteLocationNormalized
}

const emitter: Emitter<Events> = mitt<Events>()

export function emitRoute(r: RouteLocationNormalized) {
	emitter.emit('app_route_change', r)
}

export function listenerRoute(callback: (route: RouteLocationNormalized) => void) {
	emitter.on('app_route_change', callback)
}

export function removeRouteListener() {
	emitter.all.clear()
}
