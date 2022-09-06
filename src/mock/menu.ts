// menu mock数据
import { Menu } from '@/components/menu'
const menus: Menu[] = [
	{
		identify: 'dashboard',
		title: 'Dashboard',
		path: '/dashboard',
		children: [
			{
				identify: 'dashboard_analysis',
				title: '分析页',
				path: '/dashboard/analysis',
				children: [
					{
						identify: 'dashboard_analysis_1',
						title: '分析页1',
						path: '/dashboard/analysis/1'
					},
					{
						identify: 'dashboard_analysis_2',
						title: '分析页2',
						path: '/dashboard/analysis/2'
					}
				]
			},
			{
				identify: 'dashboard_workplace',
				title: '工作台',
				path: '/dashboard/workplace'
			}
		]
	},
	{
		identify: 'student',
		title: '学生',
		path: '/student',
		children: [
			{
				identify: 'student_signup',
				title: '报名学生',
				path: '/student/signup'
			},
			{
				identify: 'student_experience',
				title: '体验学生',
				path: '/student/experience'
			}
		]
	}
]

export { menus }
