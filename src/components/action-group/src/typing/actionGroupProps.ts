import { type PropType } from 'vue'

export type ActionClickFn = (a: { record: any }) => any

export type Action = {
	type: 'click' | ''
	text: string
	url: string
	click?: ActionClickFn
}

export const actionGroupProps = () => {
	return {
		actions: { type: Array as PropType<Action[]>, default: () => [] },
		record: { type: Object as PropType<any>, default: {} }
	}
}

export type ActionGroupProps = VuePropsType<typeof actionGroupProps>
