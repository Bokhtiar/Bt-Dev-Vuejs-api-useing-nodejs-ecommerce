import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
window.token = localStorage.getItem('token')

app.use(router)

app.mount('#app')
