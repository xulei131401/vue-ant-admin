import { App } from 'vue'
import GlobalPlugin from './global-plugin'
import AntDesignVuePlugin from './ant-design-vue-plugin'
import SurelyVuePlugin from './surely-vue-plugin'
import { setupI18n } from './vue-i18n-plugin'
import ErrorPlugin from './error-plugin'

import 'virtual:svg-icons-register'
import ids from 'virtual:svg-icons-names'
console.log('icons:', ids)

export async function setupGlobal(app: App) {
	app.use(GlobalPlugin)
	app.use(AntDesignVuePlugin)
	app.use(SurelyVuePlugin)
	setupI18n(app)
	app.use(ErrorPlugin)
}
