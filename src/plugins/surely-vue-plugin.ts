import { App } from 'vue'
import STable from '@surely-vue/table'
import '@surely-vue/table/dist/index.less'
import { setLicenseKey } from '@surely-vue/table'

export default {
	install(app: App) {
		setupSurelyVue(app)
	}
}

export function setupSurelyVue(app: App) {
	app.use(STable)
	setLicenseKey('fdafefdaffklfjajuiefhrdbfdnsafjkasyegwfpqfldfd45f48ew468fr5ds')
}
