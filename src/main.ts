import { createApp, Component } from 'vue'
import '@/styles/index.scss'
import globalPlugin from './plugins'
import router from "./router"
import App from './App.vue'
const app = createApp(App)
const pinia = createPinia()
import 'ant-design-vue/dist/antd.css'
app.use(router)
app.use(pinia)
app.use(globalPlugin)

app.mount('#app')
