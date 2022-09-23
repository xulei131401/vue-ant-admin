import { type PropType } from 'vue'
import { SettingHandler } from '@/enums'

export const themeColorProps = () => {
	return {
		colorList: { type: Array as PropType<string[]>, default: () => [] },
		event: { type: Number as PropType<SettingHandler> },
		color: { type: String }
	}
}

export type ThemeColorProps = VuePropsType<typeof themeColorProps>
