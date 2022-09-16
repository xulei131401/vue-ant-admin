import { App } from 'vue'
import VueAdmin from '@/components'

export default {
	install(app: App) {
		setupGlobal(app)
	}
}

export function setupGlobal(app: App) {
	app.use(VueAdmin)
}
