import { SettingHandler } from '@/enums'
import { type PropType } from 'vue'

export const switchItemProps = () => {
	return {
		event: { type: Number as PropType<SettingHandler> },
		disabled: { type: Boolean },
		title: { type: String },
		checked: { type: Boolean }
	}
}
