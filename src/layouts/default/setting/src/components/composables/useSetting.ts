import { AppConfig } from '@/configs'
import { SettingHandlerEnum } from '@/enums/settingHandlerEnum'
import { useAppStore } from '@/store/modules/app'

export function useSetting() {
	return { handler, getHandlerConfig }
}

function handler(event: SettingHandlerEnum, value: any): void {
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
function getHandlerConfig(event: SettingHandlerEnum, value: any): DeepPartial<AppConfig> {
	switch (event) {
		case SettingHandlerEnum.HEADER_FIXED:
			return {
				layout: { header: { fixed: value } }
			}
		default:
			return {}
	}
}
