import type { STableColumnProps, STableProps } from '@surely-vue/table'
import type { TableProps, Column } from '../tableProps'
import { COLUMN_ACTION_KEY } from '../tableProps'
import XHtmlCell from '@/components/html-cell'
import XActionGroup from '@/components/action-group'
import Table from '@surely-vue/table';

/**
 * Table初始化
 */
export function useInitTable() {
	/**
 * 移除Surely Vue水印
 */
	function removeWatermark() {
		let domArr = document.getElementsByTagName('div')
		for (let i = 0; i < domArr.length; i++) {
			if (['Unlicensed Product', 'Invalid License'].includes(domArr[i].innerText)) {
				domArr[i].remove()
			}

			if (['Powered by Surely Vue'].includes(domArr[i].innerText)) {
				// 要不修改透明度，要不把内容去掉
				// domArr[i].style.opacity = '0 !important'
				domArr[i].innerText = ""
			}
		}
	}

	onMounted(() => {
		// removeWatermark()
	})

	return {}
}

/**
 * Table渲染逻辑
 * @param props
 * @returns
 */
export function useTable(tableProps: TableProps) {
	useInitTable()
	const xColumns = ref<STableColumnProps[]>([])
	const xDataSource = tableProps.dataSource

	watch(
		() => tableProps.columns,
		(newColumns) => {
			xColumns.value = columnTransfer(newColumns ?? [])
		},
		{ deep: true, immediate: true }
	)


	const selectedRowKeys = ref<string[] | number[]>([])

	const onSelectChange = (changAbleRowKeys: string[] | number[]) => {
		console.log('selectedRowKeys changed: ', changAbleRowKeys);
		selectedRowKeys.value = changAbleRowKeys;
	};

	const xRowSelection = computed(() => {
		return {
			// selectedRowKeys: unref(selectedRowKeys),
			// onChange: onSelectChange,
			hideDefaultSelections: true,
			selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE]
		}
	})


	/**
	 * 列转化
	 * @param columns
	 */
	function columnTransfer(columns: Column[]): STableColumnProps[] {
		const xColumns: STableColumnProps[] = []
		for (const [key, _column] of Object.entries(columns)) {
			// 解析通用属性，并且设置默认值
			const iColumn: STableColumnProps = {
				dataIndex: _column.key,
				title: _column.title,
				align: _column.align || 'center',
				ellipsis: _column.ellipsis || false,
				fixed: _column.fixed || false,
				width: _column.width || 80,
				minWidth: _column.minWidth || 80,
				maxWidth: _column.maxWidth || 80,
			};

			if (iColumn.width! > iColumn.minWidth!) {
				iColumn.minWidth = iColumn.width
			}

			// format 函数
			if (_column.format) {
				iColumn.customRender = function ({ column, record, index, value, text }) {
					return h(XHtmlCell, {
						text: _column.format!({ value, record, index })
					})
				}
			}

			// action操作
			if (_column.key == COLUMN_ACTION_KEY) {
				iColumn.customRender = function ({ column, record, index, value, text }) {
					return h(XActionGroup, {
						actions: _column.actions,
						column: column,
						record: record
					})
				}
			}

			xColumns.push(iColumn)
		}

		console.log("xxxxX:", xColumns)
		return xColumns
	}

	/**
	 * 数据转化
	 * @param dataSource
	 * @param columns
	 */
	function dataSourceTransfer(dataSource: any[], columns: Column[]): STableColumnProps[] {
		const xColumns: STableColumnProps[] = []
		for (const [key, _column] of Object.entries(columns)) {
			const iColumn: STableColumnProps = {
				title: _column.title,
				dataIndex: _column.key
			};

			xColumns.push(iColumn)
		}
		return xColumns
	}

	return { xColumns, xDataSource, xRowSelection }
}
