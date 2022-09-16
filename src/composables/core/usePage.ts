import type { RouteLocationRaw, Router } from 'vue-router'
import { HOME_ROUTE } from '@/router/constant'

export type PathAsPageEnum<T> = T extends { path: string } ? T & { path: string } : T
export type RouteLocationRawEx = PathAsPageEnum<RouteLocationRaw>

function handleError(e: Error) {
	console.error(e)
}

export function useGo(_router?: Router) {
	const { push, replace } = _router || useRouter()
	function go(path: RouteLocationRawEx = HOME_ROUTE.path, isReplace = false) {
		if (!path) {
			return
		}

		isReplace ? replace(path).catch(handleError) : push(path).catch(handleError)
	}
	return { go }
}
