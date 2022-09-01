import { Column, COLUMN_ACTION_KEY } from '@/components/table'

function useMockData() {
	type DataItem = {
		key: number
		id: number
		name: string
		start_at: string
		COLUMN_ACTION_KEY: string
		[propName: string]: any
	}

	const data: DataItem[] = []
	for (let i = 0; i < 5; i++) {
		data.push({
			key: i, // 必须要有
			id: i,
			name: `许磊 ${i}`,
			start_at: `2022-08-27.${i}`,
			start_at1: `2022-08-27.${i}`,
			COLUMN_ACTION_KEY: ''
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
	const columns: Column[] = [
		{
			title: 'ID',
			key: 'id'
		},
		{
			title: 'name',
			key: 'name',
			format: ({ value, record, index }) => {
				return `<div style="color: red">${value}</div>`
			},
			align: "center",
			// fixed: true
		},

		{
			title: '开始时间',
			key: 'start_at',
			width: 135
		},
		{
			title: '操作',
			key: COLUMN_ACTION_KEY,
			// align: 'right',
			width: 180,
			actions: [
				{
					type: "click",
					text: "查看1",
					url: '/sss/aaa',
					click: ({ record }) => {
						openModal()
						console.log("click:", record)
					}
				},
				{
					type: "click",
					text: "查看2",
					url: '/sss/aaa',
					click: ({ record }) => {
						openModal()
						console.log("click:", record)
					}
				},
				{
					type: "click",
					text: "查看3",
					url: '/sss/aaa',
					click: ({ record }) => {
						openModal()
						console.log("click:", record)
					}
				}
			],
		},
		{
			title: '开始时间',
			key: 'start_at1',
			width: 135
		},
	]

	const tableProps = reactive({
		options: {
			url: '/student/search',
			p: 1,
			pn: 20,
			orderby: "start_at",
			sort: "asc",
			autoSearch: true
		},
		columns: columns,
		dataSource: data
	})

	return { modal, tableProps }
}
