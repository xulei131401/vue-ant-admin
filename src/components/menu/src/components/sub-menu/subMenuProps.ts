import { PropType } from 'vue'
import type { MenuType } from '@/models/menu/menu'

export const subMenuProps = () => {
	return {
		item: { type: Object as PropType<MenuType>, default: {} }
	}
}

export type SubMenuProps = VuePropsType<typeof subMenuProps>
