// 传递给Table组件的所有props
type TableProps = {
	options: TableOptions
	header?: {}
	columns: ColumnOption[]
	dataSource?: unknown[]
	conditions?: []
	resultActions?: {}
}

type TableOptions = {
	url: string
	p: number
	pn: number
	orderby: string
	sort: string
	autoSearch: boolean
	[propName: string]: any
}

function getDefaultTableOptions(): TableOptions {
	return {
		url: '',
		p: 1,
		pn: 20,
		orderby: '',
		sort: "",
		autoSearch: true,
	}
}

type ColumnFormatFunction = (a: { value: any, record: any, index: number }) => any
type ColumnActionClickFunction = (a: { record: any }) => any

type ColumnOperateAction = {
	type: 'click'
	text: string
	url: string
	click?: ColumnActionClickFunction
}

type ColumnOption = {
	dataIndex: string
	title: string
	align?: 'left' | 'right' | 'center',
	format?: ColumnFormatFunction,
	ellipsis?: boolean
	fixed?: boolean
	width?: number
	minWidth?: number
	maxWidth?: number
	actions?: ColumnOperateAction[]
}

export type { TableOptions, TableProps, ColumnOption, ColumnFormatFunction, ColumnOperateAction }
