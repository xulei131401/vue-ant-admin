import { PropType } from 'vue'
import type { Menu } from '../menu/menu'

export const menuItemProps = () => {
    return {
        item: { type: Object as PropType<Menu>, default: {} }
    }
}

export type MenuItemProps = VuePropsType<typeof menuItemProps>
