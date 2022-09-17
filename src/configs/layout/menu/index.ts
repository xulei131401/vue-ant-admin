import { Theme, ThemeEnum } from '@/enums/themeEnum'

export interface MenuConfig {
    collapsed: boolean
    theme: Theme
}

export const defaultMenuConfig: MenuConfig = {
    collapsed: false, // 菜单是否可以折叠
    theme: ThemeEnum.DARK
}
