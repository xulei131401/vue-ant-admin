import { RouteRecordRaw } from 'vue-router'
import { LAYOUT_COMPONENT } from '@/router/components'

const dashboard: RouteRecordRaw = {
	path: '/dashboard',
	name: 'Dashboard',
	component: LAYOUT_COMPONENT,
	redirect: '/dashboard/analysis',
	meta: {
		orderNo: 10,
		icon: 'ion:grid-outline',
		title: ''
	},
	children: [
		{
			path: 'analysis',
			name: 'Analysis',
			component: () => import('@/views/dashboard/analysis/index.vue'),
			meta: {
				title: ''
			}
		},
		{
			path: 'workbench',
			name: 'Workbench',
			component: () => import('@/views/dashboard/workbench/index.vue'),
			meta: {
				title: ''
			}
		}
	]
}

export default dashboard
