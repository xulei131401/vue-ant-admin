import { createApp } from 'vue'
import globalPlugin from '@/plugins'
import { setupRouter } from "@/router"
import { setupStore } from '@/store';
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'

async function bootstrap() {
	const app = createApp(App)
	app.use(globalPlugin)
	setupStore(app)
	setupRouter(app)
	app.mount('#app')
}

bootstrap()
