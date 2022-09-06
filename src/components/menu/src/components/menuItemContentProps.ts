import { PropType } from 'vue'
import type { Menu } from '../menu/menu'

export const basicMenuItemContentProps = () => {
    return {
        item: { type: Object as PropType<Menu>, default: {} }
    }
}

export type BasicMenuItemContentProps = VuePropsType<typeof basicMenuItemContentProps>
