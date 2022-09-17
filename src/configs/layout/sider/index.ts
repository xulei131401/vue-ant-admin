import { Theme, ThemeEnum } from '@/enums/themeEnum'

export interface SiderConfig {
    width: Number
    collapsedWidth: Number
    theme: Theme
}

export const defaultSiderConfig: SiderConfig = {
    width: 200, // sider宽度
    collapsedWidth: 80, // sider折叠宽度
    theme: ThemeEnum.DARK
}
