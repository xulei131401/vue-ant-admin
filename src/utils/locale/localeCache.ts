import { createI18n } from 'vue-i18n'
import { i18n } from '@/plugins/vue-i18n-plugin'
import { type LocaleType } from './typing'
import { loadLocaleMessages } from './message'
import { changeDayJsLocale } from './dayJsLocale'
import { defaultAppConfig } from '@/configs'

const AppLocales: LocaleType[] = []

export async function createVueI18n() {
	const { locale, fallback, availableLocales } = defaultAppConfig.locale
	const message = await loadLocaleMessages(locale)
	// 初始化额外操作
	setHtmlPageLang(locale)
	changeDayJsLocale(locale)
	AppLocales.push(locale)

	const options = {
		legacy: false, // you must set `false`, to use Composition API
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

	return createI18n(options)
}

/**
 * 修改locale时调用
 * @param locale
 * @returns
 */
export async function changeLocale(locale: LocaleType) {
	if (i18n.global.locale === locale) {
		return
	}

	if (AppLocales.includes(locale)) {
		setI18nLanguage(locale)
		return
	}

	const message = await loadLocaleMessages(locale)
	i18n.global.setLocaleMessage(locale, message)
	AppLocales.push(locale)
	setI18nLanguage(locale)
}

function setI18nLanguage(locale: LocaleType) {
	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale
	} else {
		i18n.global.locale.value = locale
	}

	setHtmlPageLang(locale)
	changeDayJsLocale(locale)
}

function setHtmlPageLang(locale: LocaleType) {
	document.querySelector('html')?.setAttribute('lang', locale)
}
