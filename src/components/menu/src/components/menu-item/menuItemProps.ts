import { PropType } from 'vue'
import type { MenuType } from '@/models/menu/menu'

export const menuItemProps = () => {
	return {
		item: { type: Object as PropType<MenuType>, default: {} }
	}
}

export type MenuItemProps = VuePropsType<typeof menuItemProps>
