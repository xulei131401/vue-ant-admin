import { type OmitMenu } from './menu'

export class MenuCacheValue {
	menu: OmitMenu
	children: string[] = [] // 存储该menu的直属children的唯一标识

	constructor(menu: OmitMenu, children: string[]) {
		this.menu = menu
		this.children = children
	}
}

export class MenuCache {
	static map = new Map<string, MenuCacheValue>()

	static add(key: string, value: MenuCacheValue) {
		this.map.set(key, value)
	}

	static del(key: string) {
		this.map.delete(key)
	}

	static clear() {
		this.map.clear()
	}
}

export class MenuPathCache {
	static map = new Map<string, string>()

	static add(key: string, value: string) {
		this.map.set(key, value)
	}

	static del(key: string) {
		this.map.delete(key)
	}

	static clear() {
		this.map.clear()
	}
}
