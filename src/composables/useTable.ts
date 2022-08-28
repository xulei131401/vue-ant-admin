import { STableColumnProps } from '@surely-vue/table'
import { applicationHelperProvideKey, removeWatermark } from '@/business/export'
import type { ApplicationHelper } from '@/business/export'
import { ColumnOption } from '@/components/table'
import XHtmlCell from '@/components/cell/HtmlCell.vue'

export function useTable() {
	onMounted(() => {
		removeWatermark()
	})

	const helper = inject(applicationHelperProvideKey) as ApplicationHelper
	return { helper, }
}

export function buildColumns(columns: ColumnOption[]): STableColumnProps[] {
	const xColumns: STableColumnProps[] = []
	for (const [key, _column] of Object.entries(columns)) {
		// 解析通用属性，并且设置默认值
		const iColumn: STableColumnProps = {
			title: _column.title,
			dataIndex: _column.dataIndex,
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
				// console.log("ss:", record)
				return h(XHtmlCell, {
					text: _column.format!({ value, record, index })
				})
			}
		}

		// action操作
		if (_column.actions) {
			iColumn.xActions = _column.actions
		}

		xColumns.push(iColumn)
	}
	return xColumns
}

export function buildDataSource(dataSource: any[], columns: ColumnOption[]): STableColumnProps[] {
	const xColumns: STableColumnProps[] = []
	for (const [key, _column] of Object.entries(columns)) {
		const iColumn: STableColumnProps = {
			title: _column.title,
			dataIndex: _column.dataIndex
		};

		xColumns.push(iColumn)
	}
	return xColumns
}

