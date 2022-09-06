class Menu {
	/**
	 * 唯一标识
	 */
	public identify = ''
	/**
	 * 菜单标题，名称，用来显示
	 */
	public title = ''
	/**
	 * 菜单icon
	 */
	public icon = ''

	/**
	 * 菜单前端路由name
	 */
	public routeName = ''

	/**
	 * 是否展示
	 */
	public isShow = true

	/**
	 * 父级菜单
	 */
	public parentMenu: null | Menu = null

	/**
	 * 子路由
	 */
	public children: Array<Menu> = []

	public isChildrenEmpty(): boolean {
		return this.children.length === 0
	}

	public isDashboard(): boolean {
		return this.routeName == 'dashboard'
	}
}

export { Menu }
