import { PropType } from 'vue'
import type { MenuType } from '@/models/menu/menu'

export const menuItemWrapperProps = () => {
	return {
		item: { type: Object as PropType<MenuType>, default: {} }
	}
}

export type MenuItemWrapperProps = VuePropsType<typeof menuItemWrapperProps>
