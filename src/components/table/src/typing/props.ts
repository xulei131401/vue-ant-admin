import { type PropType } from 'vue'
import { TableColumn } from '@/components/table-content'

export type HeaderProps = {}

export type ContentProps = {
	columns: TableColumn[]
	dataSource: any[]
}

export type FooterProps = {}

export const basicTableProps = () => ({
	header: { type: Object as PropType<HeaderProps>, default: () => {} },
	content: {
		type: Object as PropType<ContentProps>,
		default: () => {
			return { columns: [], dataSource: [] }
		}
	},
	footer: { type: Object as PropType<FooterProps>, default: () => {} }
})

export type BasicTableProps = VuePropsType<typeof basicTableProps>
