import type { App } from 'vue'
import { createI18n, type I18n } from 'vue-i18n'
import { defaultProjectConfig } from '@/configs'
import { generateLocale } from '@/utils/locale'
import { useLocaleStore } from '@/store/modules/locale'

export let i18n: I18n

async function createI18nOptions() {
	const { fallback, availableLocales } = defaultProjectConfig.locale
	const localeStore = useLocaleStore()
	const locale = localeStore.getLocale
	const message = await generateLocale(locale)
	console.log('message:', message)
	return {
		legacy: false,
		locale,
		fallbackLocale: fallback,
		messages: {
			[locale]: message
		},
		availableLocales: availableLocales,
		sync: true,
		silentTranslationWarn: true,
		missingWarn: false,
		silentFallbackWarn: true
	}
}

export async function setupI18n(app: App) {
	const options = await createI18nOptions()
	i18n = createI18n(options)
	app.use(i18n)
}
