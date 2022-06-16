import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
window.token = localStorage.getItem('token')


import axios from 'axios'
window.axios = axios
axios.defaults.baseURL = 'http://localhost:4000/api/v1/';


app.use(router)

app.mount('#app')
