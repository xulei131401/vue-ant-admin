import { RouteRecordRaw } from "vue-router";

const TestComponent = () => import("@/views/Test/Test.vue")

// 以下是正式的组件
const BasicLayoutComponent = () => import('@/layouts/BasicLayout.vue')
const NotFoundComponent = () => import('@/views/NotFound.vue')
const LoginComponent = () => import('@/views/Login.vue')


//业务组件
const StudentSignUpComponent = () => import('@/views/Student/StudentSignUp.vue')
const StudentExperienceComponent = () => import('@/views/Student/StudentExperience.vue')
const DashboardComponent = () => import('@/views/Dashboard/Dashboard.vue')
const PreviewAnalysisComponent = () => import('@/views/Preview/Analysis.vue')
const HomePageComponent = () => import('@/views/Dashboard/Dashboard.vue')

const notFoundRoute: RouteRecordRaw = {
	path: '/404',
	name: "NotFound",
	component: NotFoundComponent,
	meta: { title: "404页面" }
}

const loginRoute: Array<RouteRecordRaw> = [
	{
		name: "login",
		path: '/login',
		component: LoginComponent,
		meta: { title: "登录页面" }
	},
]

const dashboardRoute: Array<RouteRecordRaw> = [
	{
		name: "dashboard",
		path: '/dashboard',
		component: DashboardComponent,
		meta: { title: "工作台" }
	},
]

const previewRoute: Array<RouteRecordRaw> = [
	{
		name: "preview_analysis",
		path: '/preview/analysis',
		component: PreviewAnalysisComponent,
		meta: { title: "分析页" }
	},
]

const studentRoute: Array<RouteRecordRaw> = [
	{
		name: "student_signup",
		path: '/student/signup',
		component: StudentSignUpComponent,
		meta: { title: "报名学生" }
	},
	{
		name: "student_experience",
		path: '/student/experience',
		component: StudentExperienceComponent,
		meta: { title: "体验学生" }
	},
];

const homePageRoute: RouteRecordRaw = {
	name: "homepage",
	path: '/dashboard/workplace',
	component: HomePageComponent,
	meta: { title: "首页" }
}

// 根路由
const indexRoute: RouteRecordRaw = {
	name: "index",
	path: '/',
	component: BasicLayoutComponent,
	redirect: { name: 'homepage' },
	meta: { title: "根路径" },
	children: [
		homePageRoute,
		...previewRoute,
		...dashboardRoute,
		...studentRoute,
	]
}

const customRoute: Array<RouteRecordRaw> = [
	{
		name: "test",
		path: '/test',
		component: TestComponent,
		meta: { title: "测试页面" },
	},
	{
		name: "test_1",
		path: '/test/menu',
		component: () => import('@/views/Test/Menu.vue'),
		meta: { title: "测试菜单页面" },
	}
]

const routes: Array<RouteRecordRaw> = [
	{
		path: '/:catchAll(.*)',
		redirect: { name: "NotFound" }
	},
	notFoundRoute,
	indexRoute,
	...loginRoute,
	// 自定义路由
	...customRoute
];

export default routes;
