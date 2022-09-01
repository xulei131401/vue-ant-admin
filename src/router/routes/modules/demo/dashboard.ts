import { RouteRecordRaw } from "vue-router"
import { LAYOUT_COMPONENT } from '@/router/components'
import { t } from '@/composables/useI18n'

const dashboard: RouteRecordRaw = {
	path: '/dashboard',
	name: 'Dashboard',
	component: LAYOUT_COMPONENT,
	redirect: '/dashboard/analysis',
	meta: {
		orderNo: 10,
		icon: 'ion:grid-outline',
		title: t('routes.dashboard.dashboard'),
	},
	children: [
		{
			path: 'analysis',
			name: 'Analysis',
			component: () => import('@/views/dashboard/analysis/index.vue'),
			meta: {
				title: t('routes.dashboard.analysis'),
			},
		},
		{
			path: 'workbench',
			name: 'Workbench',
			component: () => import('@/views/dashboard/workbench/index.vue'),
			meta: {
				title: t('routes.dashboard.workbench'),
			},
		},
	],
};

export default dashboard
