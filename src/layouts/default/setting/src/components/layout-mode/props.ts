import type { PropType } from 'vue'
import type { LayoutModeItem } from './useLayoutMode'

export const layoutModeProps = () => {
	return {
		items: {
			type: Array as PropType<LayoutModeItem[]>,
			default: () => []
		},
		handler: {
			type: Function as PropType<Fn>,
			default: () => ({})
		},
		mode: {
			type: String,
			default: ''
		}
	}
}

export type LayoutModeProps = VuePropsType<typeof layoutModeProps>
