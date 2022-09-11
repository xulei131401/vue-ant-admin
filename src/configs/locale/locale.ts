import { LocaleType, LocaleEnum } from '@/utils/locale'
import type { DropMenu } from '@/components/dropdown'

export interface LocaleConfig {
	locale: LocaleType
	fallback: LocaleType
	availableLocales: LocaleType[]
}

export const availableLocaleList: DropMenu[] = [
	{
		text: '简体中文',
		event: LocaleEnum.ZH_CN
	},
	{
		text: 'English',
		event: LocaleEnum.EN_US
	}
]

export const defaultLocaleConfig: LocaleConfig = {
	locale: LocaleEnum.ZH_CN,
	fallback: LocaleEnum.ZH_CN,
	availableLocales: [LocaleEnum.ZH_CN, LocaleEnum.EN_US]
}
