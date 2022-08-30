import type { ExtractPropTypes, PropType } from 'vue';
import type { STableColumnProps } from '@surely-vue/table'

export type ActionClickFn = (a: { record: any }) => any

export type Action = {
	type: 'click' | ''
	text: string
	url: string
	click?: ActionClickFn
}

export const actionGroupProps = () => ({
	actions: { type: Array as PropType<Action[]>, default: [] },
	column: { type: Object as PropType<STableColumnProps>, default: {} },
	record: { type: Object as PropType<any>, default: {} },
})

export type ActionGroupProps = Partial<ExtractPropTypes<ReturnType<typeof actionGroupProps>>>
