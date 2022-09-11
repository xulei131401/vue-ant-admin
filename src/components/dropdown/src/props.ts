import { PropType } from 'vue'

export interface DropMenu {
	event: string | number
	text: string
	onClick?: Fn
	to?: string
	icon?: string
	disabled?: boolean
	divider?: boolean
}

export const dropDownProps = () => {
	return {
		popConfirm: Boolean,
		trigger: {
			type: Array as PropType<('contextmenu' | 'click' | 'hover')[]>,
			default: () => {
				return ['contextmenu']
			}
		},
		dropMenuList: {
			type: Array as PropType<DropMenu[]>,
			default: () => []
		},
		selectedKeys: {
			type: Array as PropType<string[]>,
			default: () => []
		}
	}
}

export type DropDownProps = VuePropsType<typeof dropDownProps>
