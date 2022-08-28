import { App } from '@vue/runtime-dom';
import antdPlugin from './antd-plugin'
import globalPlugin from './global-plugin'
import surelyVuePlugin from './surely-vue-plugin'
import errorPlugin from './error-plugin'
import customPlugin from './custom-plugin'

export default {
	install(app: App) {
		app.use(antdPlugin)
		app.use(globalPlugin)
		app.use(surelyVuePlugin)
		app.use(errorPlugin)
		app.use(customPlugin)
	}
}
