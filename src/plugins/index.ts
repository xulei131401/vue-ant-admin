import { App } from '@vue/runtime-dom';
import AntDesignVuePlugin from './ant-design-vue-plugin'
import GlobalPlugin from './global-plugin'
import SurelyVuePlugin from './surely-vue-plugin'
import ErrorPlugin from './error-plugin'

export default {
	install(app: App) {
		app.use(AntDesignVuePlugin)
		app.use(GlobalPlugin)
		app.use(SurelyVuePlugin)
		app.use(ErrorPlugin)
	}
}
