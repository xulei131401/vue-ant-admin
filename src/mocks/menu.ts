// menu mock数据
import { MenuType } from '@/models/menu/menu'
const menus: MenuType[] = [
	{
		identify: 'dashboard',
		title: 'Dashboard',
		path: '/dashboard',
		parentPath: '',
		children: [
			{
				identify: 'dashboard_analysis',
				title: '分析页',
				path: '/dashboard/analysis',
				parentPath: '/dashboard',
				children: [
					{
						identify: 'dashboard_analysis_1',
						title: '分析页1',
						path: '/dashboard/analysis/1',
						parentPath: '/dashboard/analysis'
					},
					{
						identify: 'dashboard_analysis_2',
						title: '分析页2',
						path: '/dashboard/analysis/2',
						parentPath: '/dashboard/analysis'
					}
				]
			},
			{
				identify: 'dashboard_workplace',
				title: '工作台',
				path: '/dashboard/workplace',
				parentPath: '/dashboard'
			}
		]
	},
	{
		identify: 'student',
		title: '学生',
		path: '/student',
		parentPath: '',
		children: [
			{
				identify: 'student_signup',
				title: '报名学生',
				path: '/student/signup',
				parentPath: '/student'
			},
			{
				identify: 'student_experience',
				title: '体验学生',
				path: '/student/experience',
				parentPath: '/student'
			}
		]
	}
]

export { menus }
