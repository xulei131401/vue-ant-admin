import { type PropType } from 'vue'
import { TableColumn } from './typing'

export const tableContentProps = () => {
	return {
		bordered: { type: Boolean, default: true }, // 是否展示外边框和列边框
		defaultExpandAllRows: { type: Boolean, default: false }, // 初始时，是否展开所有行
		defaultExpandedRowKeys: { type: Array as PropType<string[]>, default: () => [] }, // 默认展开的行
		expandedRowKeys: { type: Array as PropType<string[]>, default: () => [] }, // 展开的行，控制属性
		expandFixed: { type: [Boolean, String], default: false }, // 控制展开图标是否固定,可选 true left right
		expandRowByClick: { type: Boolean, default: false }, // 通过点击行来展开子行
		loading: { type: Boolean, default: false }, // 页面是否加载中
		pagination: { type: Object, default: () => {} }, // 分页
		rowKey: { type: String, default: 'key' }, // 表格行 key 的取值，可以是字符串或一个函数
		showHeader: { type: Boolean, default: true }, // 是否显示表头
		size: { type: String as PropType<'default' | 'middle' | 'small'>, default: 'default' }, // 表格大小
		sortDirections: { type: Array, default: () => ['ascend', 'descend'] }, // 支持的排序方式
		title: { type: String, default: () => '' }, // 表格标题
		childrenColumnName: { type: String, default: 'children' }, // 指定树形结构的列名
		columns: { type: Array as PropType<TableColumn[]>, default: () => [] }, // 列
		dataSource: { type: Array as PropType<any[]>, default: () => [] } // 数据
	}
}

export type TableContentProps = VuePropsType<typeof tableContentProps>
