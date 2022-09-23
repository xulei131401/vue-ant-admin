import zhCnAntdLocale from 'ant-design-vue/es/locale/zh_CN'
import enUSAntdLocale from 'ant-design-vue/es/locale/en_US'
import { LocaleEnum, LocaleType } from './typing'
import { isEmpty } from '@/utils'

const AntdLocales = {
	[LocaleEnum.ZH_CN]: zhCnAntdLocale,
	[LocaleEnum.EN_US]: enUSAntdLocale
}

export function getAntdLocales(locale: LocaleType) {
	return isEmpty(AntdLocales[locale]) ? {} : AntdLocales[locale]
}
