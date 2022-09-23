import { type PropType } from 'vue'
import { MenuMode, LayoutMode } from '@/enums'

export type LayoutModeItem = {
	title: string
	mode: LayoutMode
	menuMode: MenuMode
}

export const layoutModeProps = () => {
	return {
		items: { type: Array as PropType<LayoutModeItem[]>, default: () => [] },
		handler: { type: Function as PropType<Fn>, default: () => ({}) },
		mode: { type: String, default: '' }
	}
}

export type LayoutModeProps = VuePropsType<typeof layoutModeProps>
