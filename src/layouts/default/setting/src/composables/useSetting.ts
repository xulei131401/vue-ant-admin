import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { AppConfig } from '@/configs'
import { SettingHandler } from '@/enums'
import { useAppStore } from '@/store/app'

export function useSetting() {
	const { updateHeaderBgColor } = useHeaderConfig()
	const handler = (event: SettingHandler, value: any): void => {
		const appStore = useAppStore()
		const config = getHandlerConfig(event, value)
		appStore.setAppConfig(config)
	}

	/**
	 * 统一处理setting事件
	 * @param event
	 * @param value
	 * @returns
	 */
	const getHandlerConfig = (event: SettingHandler, value: any): DeepPartial<AppConfig> => {
		switch (event) {
			case SettingHandler.HEADER_FIXED:
				return {
					layout: { header: { fixed: value } }
				}
			case SettingHandler.HEADER_BG_COLOR:
				updateHeaderBgColor(value)
				return {
					layout: { header: { bgColor: value } }
				}
			default:
				return {}
		}
	}

	return { handler, getHandlerConfig }
}
