import { defineStore } from 'pinia'
import { LocaleConfig, defaultLocaleConfig } from '@/configs/locale'
import { type LocaleType } from '@/utils'

export const useLocaleStore = defineStore({
	id: 'app-locale',
	state: () => ({
		localInfo: defaultLocaleConfig as LocaleConfig
	}),
	getters: {
		getLocale(): LocaleType {
			return this.localInfo.locale
		}
	},
	actions: {}
})
