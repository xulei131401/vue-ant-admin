import enDayJsLocale from 'dayjs/locale/en'
import zhCnDayJsLocale from 'dayjs/locale/zh-cn'
import { LocaleEnum, LocaleType } from './typing'
import { dayjs, isEmpty } from '@/utils'

const DayJsLocales = {
	[LocaleEnum.ZH_CN]: zhCnDayJsLocale,
	[LocaleEnum.EN_US]: enDayJsLocale
}

export function changeDayJsLocale(locale: LocaleType) {
	if (LocaleEnum.ZH_CN == locale) {
		dayjs.locale('zh-cn')
	}
	if (LocaleEnum.EN_US == locale) {
		{
			dayjs.locale('en')
		}
	}
}

export function getDayJsLocales(locale: LocaleType) {
	return isEmpty(DayJsLocales[locale]) ? {} : DayJsLocales[locale]
}
