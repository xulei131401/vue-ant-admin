import { createApp } from 'vue'
import { setupGlobal } from '@/plugins'
import { setupGlobDirectives } from '@/directives'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'

async function bootstrap() {
	const app = createApp(App)
	setupGlobal(app)
	setupStore(app)
	setupRouter(app)
	setupGlobDirectives(app)
	app.mount('#app')
}

bootstrap()
