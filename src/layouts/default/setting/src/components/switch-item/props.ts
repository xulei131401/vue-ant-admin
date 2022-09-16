import { SettingHandlerEnum } from '@/enums/settingHandlerEnum'
import type { PropType } from 'vue'

export const switchItemProps = () => {
	return {
		event: { type: Number as PropType<SettingHandlerEnum> },
		disabled: { type: Boolean },
		title: { type: String },
		checked: { type: Boolean }
	}
}
