import { RouteRecordRaw } from 'vue-router'
import { LAYOUT_COMPONENT } from '@/typing'

const dashboard: RouteRecordRaw = {
	path: '/dashboard',
	name: 'Dashboard',
	component: LAYOUT_COMPONENT,
	redirect: '/dashboard/analysis',
	children: [
		{
			path: 'analysis/1',
			name: 'Analysis1',
			component: () => import('@/views/dashboard/analysis/1/index.vue')
		},
		{
			path: 'analysis/2',
			name: 'Analysis2',
			component: () => import('@/views/dashboard/analysis/2/index.vue')
		},
		{
			path: 'workbench',
			name: 'Workbench',
			component: () => import('@/views/dashboard/workbench/index.vue')
		}
	]
}

export default dashboard
