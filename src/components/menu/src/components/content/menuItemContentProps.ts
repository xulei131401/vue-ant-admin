import { PropType } from 'vue'
import type { MenuType } from '@/models/menu/menu'

export const basicMenuItemContentProps = () => {
	return {
		item: { type: Object as PropType<MenuType>, default: {} }
	}
}

export type BasicMenuItemContentProps = VuePropsType<typeof basicMenuItemContentProps>
