import { Theme } from '@/enums'

export type SiderConfig = {
	theme: Theme
	width: Number
	collapsedWidth: Number
}

export const defaultSiderConfig: SiderConfig = {
	theme: Theme.DARK, //主题
	width: 200, // sider宽度
	collapsedWidth: 80 // sider折叠宽度
}
