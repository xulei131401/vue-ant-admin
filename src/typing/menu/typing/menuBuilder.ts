import { Menu } from './menu'

export class MenuBuilder {
	private _uniqueId = ''
	public get uniqueId() {
		return this._uniqueId
	}

	private _title = ''
	public get title() {
		return this._title
	}

	private _routePath = ''
	public get routePath() {
		return this._routePath
	}

	private _parentUniqueId = ''
	public get parentUniqueId() {
		return this._parentUniqueId
	}

	private _icon = ''
	public get icon() {
		return this._icon
	}

	private _orderNo = 0
	public get orderNo() {
		return this._orderNo
	}

	private _children: Menu[] = []
	public get children() {
		return this._children
	}

	setUniqueId(uniqueId: string): MenuBuilder {
		this._uniqueId = uniqueId ?? ''
		return this
	}

	setIcon(icon: string): MenuBuilder {
		this._icon = icon ?? ''
		return this
	}

	setTitle(title: string): MenuBuilder {
		this._title = title ?? ''
		return this
	}

	setRoutePath(path: string): MenuBuilder {
		this._routePath = path ?? ''
		return this
	}

	setParentUniqueId(uniqueId: string): MenuBuilder {
		this._parentUniqueId = uniqueId ?? ''
		return this
	}

	setOrderNo(no: number): MenuBuilder {
		this._orderNo = no ?? 0
		return this
	}

	setChildren(children: Menu[]): MenuBuilder {
		this._children = children ?? []
		return this
	}

	build(): Menu {
		return {
			uniqueId: this.uniqueId,
			title: this.title,
			routePath: this.routePath,
			parentUniqueId: this.parentUniqueId,
			icon: this.icon,
			orderNo: this.orderNo,
			children: this.children
		}
	}
}
