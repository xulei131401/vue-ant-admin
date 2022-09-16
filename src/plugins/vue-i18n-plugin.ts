import type { App } from 'vue'
import { I18n } from 'vue-i18n'
import { createVueI18n } from '@/utils/locale'

export let i18n: I18n

export default {
	install(app: App) {
		setupI18n(app)
	}
}

export async function setupI18n(app: App) {
	i18n = await createVueI18n()
	app.use(i18n)
}
