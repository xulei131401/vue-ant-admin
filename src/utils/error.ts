const projectName = import.meta.env.VITE_GLOB_APP_TITLE ?? 'Vue Ant Admin'

export function error(message: string) {
	throw new Error(`[${projectName} error]:${message}`)
}
