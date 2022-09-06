import { Menu } from '@/business/menu/menu'

class ThirdLevelMenu {
	public static menuList: Array<Menu> = []
	public static menuMap: Record<string, Menu> = {}

	public static transfer(list: object): void {}
}

function transferThirdLevelMenu(res: any): Array<Menu> {
	ThirdLevelMenu.transfer(res)
	return ThirdLevelMenu.menuList
}

export { ThirdLevelMenu, transferThirdLevelMenu }
