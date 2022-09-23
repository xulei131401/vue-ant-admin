// import '@/style/global/root/root.scss'
import { App } from 'vue'
import { setupI18n } from './vue-i18n-plugin'
import { setupGlobal } from './global-plugin'
import { setupError } from './error-plugin'
import { setupAntDesignVue } from './ant-design-vue-plugin'
import { setupSurelyVue } from './surely-vue-plugin'
import { setupStore } from './pinia-plugin'
import { setupGlobDirectives } from '@/directives'
import { setupRouter } from '@/router'

import 'virtual:svg-icons-register'
import ids from 'virtual:svg-icons-names'
// console.log('icons:', ids)

export async function setupPlugins(app: App) {
	// TODO: 以下加载的插件都有2种方式加载，一种setupXXX形式，另外一种install形式
	// 考虑到install方法无法确保异步加载顺序，所以当存在异步加载的时候建议使用setupXXX形式，方便控制加载顺序
	await setupI18n(app)
	setupGlobal(app)
	setupError(app)
	setupAntDesignVue(app)
	setupSurelyVue(app)
	setupStore(app)
	setupRouter(app)
	setupGlobDirectives(app)
}
