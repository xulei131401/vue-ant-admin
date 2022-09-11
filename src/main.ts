import { createApp } from 'vue'
import { setupGlobal } from '@/plugins'
import { setupGlobDirectives } from '@/directives'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

async function bootstrap() {
	const app = createApp(App)
	setupStore(app)
	setupRouter(app)
	setupGlobDirectives(app)
	setupGlobal(app)
	app.mount('#app')
}

bootstrap()
