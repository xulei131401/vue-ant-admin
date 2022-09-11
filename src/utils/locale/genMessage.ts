import zhCnAntdLocale from 'ant-design-vue/es/locale/zh_CN'
import enUSAntdLocale from 'ant-design-vue/es/locale/en_US'
import { LocaleEnum, type LocaleType } from './typing'
import { isEmpty } from '@/utils/is'

const AntdLocales = {
	[LocaleEnum.ZH_CN]: zhCnAntdLocale,
	[LocaleEnum.EN_US]: enUSAntdLocale
}

export const ProjectLocales: LocaleType[] = []

export function setLoadLocale(cb: (loadLocalePool: LocaleType[]) => void) {
	cb(ProjectLocales)
}

export function setHtmlPageLang(locale: LocaleType) {
	document.querySelector('html')?.setAttribute('lang', locale)
}

export async function generateLocale(locale: LocaleType) {
	if (!locale) {
		return {}
	}

	let modules = {}

	// import.meta.glob
	// { eager: true } 直接导入，而不是以懒加载的方式导入
	// {as: 'raw'} 懒加载方式导入，返回promise
	if (locale === LocaleEnum.ZH_CN) {
		modules = await import.meta.glob('@/locales/zh_CN/**/*.ts', { as: 'raw' })
	} else if (locale === LocaleEnum.EN_US) {
		modules = await import.meta.glob('@/locales/en_US/**/*.ts', { as: 'raw' })
	} else {
		return {}
	}

	const messages: Record<string, any> = {}
	for (const key of Object.keys(modules)) {
		const value = (<any>modules[key]).default
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

	const antdLocale = isEmpty(AntdLocales[locale]) ? {} : AntdLocales[locale]
	return Object.assign({}, { bingo: messages }, antdLocale)
}
