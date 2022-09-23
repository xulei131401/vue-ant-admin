export type Menu = {
	uniqueId: string // 唯一标识
	title: string // 展示标题
	routePath: string // 前端路由path,path不允许重复
	parentUniqueId: string // 直属父级标识
	icon: string // icon图标
	orderNo: number // 排序
	children: Menu[] // 子菜单
}

export type OmitMenu = Omit<Menu, 'children'>
