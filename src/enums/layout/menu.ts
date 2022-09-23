export enum MenuMode {
	VERTICAL = 'vertical',
	HORIZONTAL = 'horizontal',
	INLINE = 'inline'
}

export type MenuModeKey = keyof typeof MenuMode
export type MenuModeValue = `${MenuMode}`
