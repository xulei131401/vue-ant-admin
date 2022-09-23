import { type RouteLocationRaw } from 'vue-router'

export function useGo() {
	const { push, replace } = useRouter()
	const handleError = (e: Error) => {
		console.error(e)
	}

	const pushGo = (path: RouteLocationRaw) => {
		if (!path) {
			return
		}

		push(path).catch(handleError)
	}

	const replaceGo = (path: RouteLocationRaw) => {
		if (!path) {
			return
		}

		replace(path).catch(handleError)
	}

	return { pushGo, replaceGo }
}
