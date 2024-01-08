import { type STableColumnType, type STableProps } from '@surely-vue/table'
import Table from '@surely-vue/table'
import { Key } from '@surely-vue/table/dist/src/components/interface'
import { type TableContentProps, type TableColumn } from '../typing'
import { HtmlCell } from '@/components/html-cell'
import { ActionGroup } from '@/components/action-group'
import { removeWatermark, isTableDataColumn, isTableActionColumn, isTableSelectionColumn } from '../functional'
import { isFunction } from '@/utils'

export function useInitTable() {
	onMounted(() => {
		removeWatermark()
	})

	return {}
}

export function useTableContent(tableContentProps: TableContentProps) {
	useInitTable()
	const columnsRef = ref<STableColumnType[]>([])
	const dataSourceRef = tableContentProps.dataSource
	const hasSelectionColumnRef = ref<boolean>(false)
	const hasActionColumnRef = ref<boolean>(false)
	const selectedRowKeysRef = ref<Key[]>([])

	watch(
		() => tableContentProps.columns,
		(newColumns) => {
			const { columns, hasSelectionColumn, hasActionColumn } = transferToSTableColumn(newColumns ?? [])
			columnsRef.value = columns
			hasSelectionColumnRef.value = hasSelectionColumn
			hasActionColumnRef.value = hasActionColumn
		},
		{ deep: true, immediate: true }
	)

	const onSelectChange = (selectedRowKeys: Key[], selectedRows: any[]) => {
		// todo: 事件触发
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
		selectedRowKeysRef.value = selectedRowKeys
		console.log('ss:', selectedRowKeysRef.value)
	}

	const rowSelection = computed<STableProps['rowSelection'] | undefined>(() => {
		if (!unref(hasSelectionColumnRef)) {
			return undefined
		}

		return {
			defaultSelectedRowKeys: [],
			selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
			onChange: onSelectChange,
			columnWidth: 90,
			// columnTitle: 'ass',
			// fixed: true,
			type: 'checkbox'
		}
	})

	return { columnsRef, dataSourceRef, rowSelection }
}

type TransferColumnRes = {
	columns: STableColumnType[]
	hasSelectionColumn: boolean
	hasActionColumn: boolean
}

/**
 * 列转化
 * @param columns
 */
function transferToSTableColumn(columns: TableColumn[]): TransferColumnRes {
	const res: TransferColumnRes = { columns: [], hasSelectionColumn: false, hasActionColumn: false }
	const _columns: STableColumnType[] = []

	for (const [_, _column] of Object.entries(columns)) {
		const iColumn: STableColumnType = {}
		iColumn.width = _column.width || 80
		iColumn.minWidth = _column.minWidth || 80
		iColumn.maxWidth = _column.maxWidth || 80
		iColumn.align = _column.align || 'center'
		iColumn.title = _column.title
		iColumn.fixed = _column.fixed || false
		if (iColumn.width! > iColumn.minWidth!) {
			iColumn.minWidth = iColumn.width
		}

		if (isTableSelectionColumn(_column)) {
			res.hasSelectionColumn = true
			continue
		}

		if (isTableDataColumn(_column)) {
			// 解析通用属性，并且设置默认值
			iColumn.dataIndex = _column.dataIndex
			iColumn.ellipsis = _column.ellipsis || false

			// 自定义render函数
			if (_column.render && isFunction(_column.render)) {
				iColumn.customRender = function ({ value, index, record }) {
					return _column.render!({ value, index, record })
				}
			}

			// tooltip
			// poptip
			// editable

			// 自定义format函数
			if (_column.format && isFunction(_column.format)) {
				iColumn.customRender = function ({ value, index, record }) {
					return h(HtmlCell, {
						text: _column.format!({ value, index, record })
					})
				}
			}

			// 内置部分format类型
			if (_column.formatType === 'image') {
				iColumn.customRender = function ({ value, index, record }) {
					return '图片'
				}
			}
		}

		if (isTableActionColumn(_column)) {
			res.hasActionColumn = true
			iColumn.customRender = function ({ value, index, record }) {
				return h(ActionGroup, {
					actions: _column.actions,
					record: record
				})
			}
		}

		_columns.push(iColumn)
	}

	res.columns = _columns
	return res
}
