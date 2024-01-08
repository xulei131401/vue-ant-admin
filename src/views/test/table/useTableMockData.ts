import { createDataColumn, createActionColumn, createSelectionColumn } from '@/components/table-content'

function useMockData() {
	type DataItem = {
		key: number
		id: number
		name: string
		start_at: string
		[propName: string]: any
	}

	const data: DataItem[] = []
	for (let i = 0; i < 5; i++) {
		data.push({
			key: i, // 必须要有
			id: i,
			name: `许磊 ${i}`,
			start_at: `2022-08-27.${i}`,
			end_at: `2022-08-27.${i}`
		})
	}

	return { data }
}

function useMockModal() {
	const modal = ref()

	const openModal = () => {
		console.log('modal:', modal.value)
		modal.value.openModal()
	}

	// watchPostEffect(() => {
	// 	console.log('modal-watch', modal.value)
	// })

	return { modal, openModal }
}

export function useMockTable() {
	const { modal, openModal } = useMockModal()
	const { data } = useMockData()

	const columns = [
		createSelectionColumn({
			width: 60
		}),
		createDataColumn({
			title: 'ID',
			dataIndex: 'id',
			align: 'right',
			width: 60
		}),
		createDataColumn({
			title: '名称',
			dataIndex: 'name',
			format: ({ value }) => {
				return `<div style="color: red">${value}</div>`
			},
			align: 'center',
			width: 60,
			fixed: true
		}),
		createDataColumn({
			title: '开始时间',
			dataIndex: 'start_at',
			width: 135
		}),
		createDataColumn({
			title: '结束时间',
			dataIndex: 'end_at',
			width: 135
		}),
		createActionColumn({
			title: '操作',
			// align: 'right',
			width: 180,
			fixed: 'right',
			actions: [
				{
					type: 'click',
					text: '查看1',
					url: '/sss/aaa',
					click: ({ record }) => {
						openModal()
						console.log('click:', record)
					}
				},
				{
					type: 'click',
					text: '查看2',
					url: '/sss/aaa',
					click: ({ record }) => {
						openModal()
						console.log('click:', record)
					}
				},
				{
					type: 'click',
					text: '查看3',
					url: '/sss/aaa',
					click: ({ record }) => {
						openModal()
						console.log('click:', record)
					}
				}
			]
		})
	]

	const tableProps = reactive({
		content: {
			columns: columns,
			dataSource: data
		}
	})

	return { modal, tableProps }
}
