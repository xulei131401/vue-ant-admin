import { createRouter, createWebHashHistory, createWebHistory, RouteLocationNormalized } from 'vue-router';
import routes from "./router";
import { isLogin } from '@/business/utils/localStorage'

const router = createRouter({
	// history: createWebHashHistory(),  // hash路由模式
	history: createWebHistory(),  // history路由模式
	routes: routes
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
	// console.log("to:", to)
	// console.log("from:", from)

	// 1.没登录重定向到登录页
	// 2.重定向到登录页的时候，没登录直接进入，登录了就重定向到index
	// 1.应该判断是否登录，如果登录了，则return true,否则进入login
	const _isLogin = isLogin()
	// 已经登录
	if (_isLogin) {
		// 登录了以后访问登录页面，直接重定向到首页
		if (to.name == 'login') {
			return { name: 'index' }
		}

		return true
	}

	// 没登录，但是要进入登录页面
	if (to.name == 'login') {
		return true
	}

	// 没登录,进入的是其他页面
	return { name: "login" }
})

router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
	// console.log("afterEach-to:", to)
	// console.log("afterEach-from:", from)
})

router.beforeResolve(async (to: RouteLocationNormalized) => {

})

export default router;
