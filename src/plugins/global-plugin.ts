import { App } from 'vue'
import VueAdmin from '@/components'

export default {
	install(app: App) {
		app.use(VueAdmin)
		/**************全局组件--开始***************/
		// import XTable from '@/components/table'
		// import XModal from '@/components/modal/Modal.vue'
		// import XActionClick from '@/components/action/ActionClick.vue'
		// import XActionGroup from '@/components/action/ActionGroup.vue'
		// import XHtmlCell from '@/components/cell/HtmlCell.vue'
		// import XLink from '@/components/link/Link.vue'
		// app.component('XTable', XTable)
		// app.component('x-modal', XModal)
		// app.component('x-action-click', XActionClick)
		// app.component('x-action-group', XActionGroup)
		// app.component('x-html-cell', XHtmlCell)
		// app.component('x-link', XLink)
		/**************全局组件--结束***************/

		// 注册为全局组件,但是缺少提示，还是使用手动注册得了
		// const modulesFiles = import.meta.globEager('@/components/**/*.vue')
		// for (const i in modulesFiles) {
		// 	const component: Component = modulesFiles[i].default
		// 	if (!component.name) {
		// 		console.error("组件缺少name属性:", component)
		// 		continue
		// 	}
		//
		// 	app.component(component.name, component)
		// }
	}
}
