import type { LocaleType } from '@/utils/locale'
import { i18n } from '@/plugins/vue-i18n-plugin'
import { useLocaleStore } from '@/store/modules/locale'
import { ProjectLocales, setLoadLocale, setHtmlPageLang, generateLocale } from '@/utils/locale'

function setI18nLanguage(locale: LocaleType) {
	const localeStore = useLocaleStore()

	// if (i18n.mode === 'legacy') {
	// 	i18n.global.locale = locale
	// } else {
	// 	<any>(i18n.global.locale).value = locale
	// }

	setHtmlPageLang(locale)
	// localeStore.setLocaleInfo({ locale })
}

export function useLocale() {
	const localeStore = useLocaleStore()
	const getLocale = computed(() => localeStore.getLocale)

	const getAntdLocale = computed((): any => {
		return i18n.global.getLocaleMessage(unref(getLocale))?.antdLocale ?? {}
	})

	/**
	 * 修改 locale
	 * @param locale
	 * @returns
	 */
	async function changeLocale(locale: LocaleType) {
		const globalI18n = i18n.global
		const currentLocale = unref(globalI18n.locale)
		if (currentLocale === locale) {
			return locale
		}

		// 已经加载过
		if (ProjectLocales.includes(locale)) {
			setI18nLanguage(locale)
			return locale
		}

		const message = await generateLocale(locale)
		globalI18n.setLocaleMessage(locale, message)
		setI18nLanguage(locale)

		ProjectLocales.push(locale)
		return locale
	}

	return {
		getLocale,
		changeLocale,
		getAntdLocale
	}
}
