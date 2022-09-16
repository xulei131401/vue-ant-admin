import { i18n } from '@/plugins/vue-i18n-plugin'
import { changeLocale as changeProjectLocale, type LocaleType } from '@/utils/locale'
import { useLocaleStore } from '@/store/modules/locale'

export function useLocale() {
	const localeStore = useLocaleStore()
	const getLocale = computed(() => localeStore.getLocale)

	const getAntdLocale = computed((): any => {
		const res: any = i18n.global.getLocaleMessage(unref(getLocale))
		return res.antdLocale ?? {}
	})

	async function changeLocale(locale: LocaleType) {
		await changeProjectLocale(unref(locale))
	}

	return {
		getLocale,
		changeLocale,
		getAntdLocale
	}
}
