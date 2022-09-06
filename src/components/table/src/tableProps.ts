import type { ExtractPropTypes, PropType } from 'vue'
import type { Action } from '@/components/action-group'

export const COLUMN_ACTION_KEY = '__action__'

export const tableProps = () => ({
	options: { type: Object as PropType<Options>, default: defaultOptions() },
	// header?: {},
	columns: { type: Object as PropType<Column[]>, default: [] },
	dataSource: { type: Object as PropType<any[]>, default: [] }
	// conditions?: []
	// resultActions?: {}
})

export type Options = {
	url: string
	p: number
	pn: number
	orderBy: string
	sort: string
	autoSearch: boolean
}

export type Column = {
	key: string // 唯一标识
	title: string
	align?: 'left' | 'right' | 'center'
	format?: ColumnFormatFn
	ellipsis?: boolean
	fixed?: boolean
	width?: number
	minWidth?: number
	maxWidth?: number
	actions?: Action[]
}

export type ColumnFormatFn = (a: { value: any; record: any; index: number }) => any

export function defaultOptions(): Options {
	return {
		url: '',
		p: 1,
		pn: 20,
		orderBy: '',
		sort: '',
		autoSearch: true
	}
}

export type TableProps = Partial<ExtractPropTypes<ReturnType<typeof tableProps>>>
