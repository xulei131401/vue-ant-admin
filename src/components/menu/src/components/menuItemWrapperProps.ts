import { PropType } from 'vue'
import type { Menu } from '../menu/menu'

export const menuItemWrapperProps = () => {
    return {
        item: { type: Object as PropType<Menu>, default: {} }
    }
}

export type MenuItemWrapperProps = VuePropsType<typeof menuItemWrapperProps>
