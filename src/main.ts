import { createApp } from 'vue'
import '@/styles/index.scss'
import globalPlugin from './plugins'
import router from "./router"
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(globalPlugin)

app.mount('#app')
