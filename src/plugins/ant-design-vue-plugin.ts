import { App, Component, Plugin } from 'vue'
import * as antIcons from '@ant-design/icons-vue'
// import { Button, Layout, Menu, Form, Input, message, Dropdown, Tabs, Avatar, Spin, Result, PageHeader, Drawer, Tooltip, Tag, Modal, Table } from 'ant-design-vue'
// import Icon from '@ant-design/icons-vue'
// const normalComponents: Plugin[] = [Button, Dropdown, Tabs, Layout, Menu, Form, Input, Avatar, Spin, Result, PageHeader, Drawer, Tooltip, Tag, Modal, Table, Tooltip]

// const plugins: Plugin[] = [...normalComponents]

export default {
	install(app: App) {
		// 全局方式安装，或者使用provide,inject
		// app.config.globalProperties.$message = message
		// app.config.globalProperties.$antIcons = antIcons

		// 通用组件采用插件方式安装
		// plugins.forEach((plugin: Plugin) => {
		// 	app.use(plugin)
		// })

		// icon组件注册为全局组件
		const icons: Component = antIcons
		for (const i in icons) {
			app.component(i, icons[i])
		}
	}
}
