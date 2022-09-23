import { type PropType } from 'vue'
import { Theme, MenuMode } from '@/enums'

export const layoutMenuProps = () => {
	return {
		theme: { type: String as PropType<Theme> },
		mode: { type: String as PropType<MenuMode> }
	}
}

export type LayoutMenuProps = VuePropsType<typeof layoutMenuProps>
