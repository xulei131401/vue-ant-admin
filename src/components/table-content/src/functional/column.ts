import type { TableColumn, TableDataColumn, TableSelectionColumn, TableActionColumn } from '../typing'
import { TableColumnType } from '../typing'

export function createSelectionColumn(option?: Omit<TableSelectionColumn, 'type'>): TableSelectionColumn {
	return { type: TableColumnType.SELECTION, ...option }
}

export function createDataColumn(option: Omit<TableDataColumn, 'type'>): TableDataColumn {
	return { type: TableColumnType.DATA, ...option }
}

export function createActionColumn(option: Omit<TableActionColumn, 'type'>): TableActionColumn {
	return { type: TableColumnType.ACTION, ...option }
}

export function isTableDataColumn(p: TableColumn): p is TableDataColumn {
	return (<TableDataColumn>p).type === TableColumnType.DATA
}

export function isTableSelectionColumn(p: TableColumn): p is TableSelectionColumn {
	return (<TableSelectionColumn>p).type === TableColumnType.SELECTION
}

export function isTableActionColumn(p: TableColumn): p is TableActionColumn {
	return (<TableActionColumn>p).type === TableColumnType.ACTION
}
