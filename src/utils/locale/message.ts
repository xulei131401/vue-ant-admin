import { getAntdLocales } from './antdLocale'
import { getDayJsLocales } from './dayJsLocale'
import { LocaleEnum, LocaleType } from '../../../../vadmin/src/enum/locale/typing'
import { isEmpty } from '@/utils'

/**
 * 统一导入多语言配置内容,支持的文件格式有ts,json,yaml
 * @param locale
 * @returns
 */
export async function loadLocaleMessages(locale: LocaleType) {
	if (!locale) {
		return {}
	}

	let modules: Record<string, any> = {}
	if (locale === LocaleEnum.ZH_CN) {
		modules = import.meta.glob(['@/locales/zh-CN/**/*.ts', '@/locales/zh-CN/**/*.json', '@/locales/zh-CN/**/*.yaml'])
	} else if (locale === LocaleEnum.EN_US) {
		modules = import.meta.glob(['@/locales/en/**/*.ts', '@/locales/en/**/*.json', '@/locales/en/**/*.yaml'])
	} else {
		return {}
	}

	const messages: Record<string, any> = {}
	for (const key of Object.keys(modules)) {
		const value = (<any>await modules[key]()).default
		const _splitKeys = key.split('/')
		let fileName = _splitKeys[_splitKeys.length - 1]
		const lastIndex = fileName.lastIndexOf('.')
		if (lastIndex === -1) {
			continue
		}

		fileName = fileName.substring(0, lastIndex)
		if (isEmpty(value)) {
			continue
		}

		messages[fileName] = value
	}

	const antdLocale = getAntdLocales(locale)
	const dayJsLocale = getDayJsLocales(locale)
	return Object.assign({}, messages, { antdLocale }, { dayJsLocale })
}
