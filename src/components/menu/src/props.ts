import { PropType } from 'vue'
import type { Menu } from './menu/menu'
import { MenuMode, MenuModeEnum, MenuTheme, MenuThemeEnum } from '@/enums/menuEnum'

export interface MenuState {
	defaultSelectedKeys?: string[]
	openKeys: string[]
	selectedKeys: string[]
}

// TODO: 参考 https://www.antdv.com/components/menu-cn
export const basicMenuProps = () => {
	return {
		items: { type: Array as PropType<Menu[]>, default: [] }, // 菜单数据
		mode: { type: String as PropType<MenuMode>, default: MenuModeEnum.INLINE }, // 菜单类型，现在支持垂直、水平、和内嵌模式三种
		inlineIndent: { type: Number, default: 20 }, // inline 模式的菜单缩进宽度
		theme: { type: String as PropType<MenuTheme>, default: MenuThemeEnum.DARK }, // 主题颜色,light | dark
		inlineCollapsed: { type: Boolean } // inline 时菜单是否收起状态
	}
}

export type BasicMenuProps = VuePropsType<typeof basicMenuProps>
