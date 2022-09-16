import { createApp } from 'vue'
import { setupPlugins } from '@/plugins'
import App from './App.vue'

async function bootstrap() {
	const app = createApp(App)
	await setupPlugins(app)
	app.mount('#app')
}

await bootstrap()
