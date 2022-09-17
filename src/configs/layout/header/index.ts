import { Theme, ThemeEnum } from '@/enums/themeEnum'

export interface HeaderConfig {
    fixed: boolean
    theme: Theme
}

export const defaultHeaderConfig: HeaderConfig = {
    fixed: true, // 是否固定
    theme: ThemeEnum.LIGHT
}
