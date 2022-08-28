import { App } from '@vue/runtime-dom';
import { applicationHelperProvideKey, applicationHelper } from '@/plugins/provide'

export default {
	install(app: App) {
		app.provide(applicationHelperProvideKey, applicationHelper)
	}
}
