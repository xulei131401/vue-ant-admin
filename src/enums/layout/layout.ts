export enum LayoutMode {
	LEFT_RIGHT_LAYOUT = 'left_right_layout',
	TOP_BOTTOM_LAYOUT = 'top_bottom_layout'
}

export type LayoutModeKey = keyof typeof LayoutMode
export type LayoutModeValue = `${LayoutMode}`
