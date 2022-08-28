import { applicationHelperProvideKey } from '@/business/export'
import type { ApplicationHelper } from '@/business/export'
import type { ColumnOption } from '@/components/table'

export function useTableMockData() {
	const helper = inject(applicationHelperProvideKey) as ApplicationHelper

	type DataItem = {
		key: number
		id: number
		name: string
		start_at: string
	}

	const modal = ref()

	const openModal = () => {
		console.log('modal:', modal.value)
		modal.value.openModal()
	}

	// watchPostEffect(() => {
	// 	console.log('modal-watch', modal.value)
	// })


	const options = {
		url: '/student/search',
		p: 1,
		pn: 20,
		orderby: "start_at",
		sort: "asc",
		autoSearch: true
	}

	const columns: ColumnOption[] = [
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'name',
			dataIndex: 'name',
			format: ({ value, record, index }) => {
				return `<div style="color: red">${value}</div>`
			},
			align: "center",
			fixed: true
		},
		{
			title: '开始时间',
			dataIndex: 'start_at',
			width: 135
		},
		{
			title: '操作',
			dataIndex: '__action__',
			actions: [
				{
					type: "click",
					text: "查看",
					url: '/sss/aaa',
					click: ({ record }) => {
						openModal()
						console.log("click:", record)
					}
				}
			],
		}
	]

	const data: DataItem[] = []
	for (let i = 0; i < 5; i++) {
		data.push({
			key: i,
			id: i,
			name: `许磊 ${i}`,
			start_at: `2022-08-27.${i}`,
		})
	}

	const props = reactive({
		columns: columns,
		options: options,
		dataSource: data
	})


	return { modal, helper, props }
}
