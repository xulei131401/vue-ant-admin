import { VNodeChild } from 'vue'
import { type Action } from '@/components/action-group'

export interface ITableColumn {
	type: TableColumnType
	title?: string // 标题
	width?: number
	minWidth?: number
	maxWidth?: number
	fixed?: string | boolean
	autoHeight?: boolean // 是否启用自动行高
	align?: TableColumnAlignValue // 设置列的对齐方式
}

export interface TableSelectionColumn extends ITableColumn {
	type: TableColumnType.SELECTION
}

export interface TableActionColumn extends ITableColumn {
	type: TableColumnType.ACTION
	title: string // 标题
	actions: Action[]
}

export interface TableDataColumn extends ITableColumn {
	type: TableColumnType.DATA
	dataIndex: string // 数据映射的key
	ellipsis?: boolean // 超过宽度将自动省略。
	format?: TableColumnFormatFn // 自定义格式化column内容函数
	formatType?: string // 内置格式化column内容类型，比如 image
	render?: TableColumnRenderFn // 自定义render函数
}

export type TableColumn = TableDataColumn | TableSelectionColumn | TableActionColumn

export type TableColumnFormatFn = (a: { value: any; record: any; index: number }) => any
export type TableColumnRenderFn = (a: { value: any; record: any; index: number }) => VNodeChild

export enum TableColumnAlign {
	ALIGN_LEFT = 'left',
	ALIGN_CENTER = 'center',
	ALIGN_RIGHT = 'right'
}

export type TableColumnAlignKey = keyof typeof TableColumnAlign
export type TableColumnAlignValue = `${TableColumnAlign}`

export enum TableColumnType {
	DATA = 'data',
	SELECTION = 'selection',
	ACTION = 'action'
}

export type TableColumnTypeKey = keyof typeof TableColumnType
export type TableColumnTypeValue = `${TableColumnType}`
