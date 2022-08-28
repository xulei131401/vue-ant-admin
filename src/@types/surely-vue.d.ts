import '@surely-vue/table'
import { ColumnOperateAction } from '@/components/table'

declare module '@surely-vue/table' {
	interface STableColumnProps {
		xActions?: ColumnOperateAction[]
	}
}
