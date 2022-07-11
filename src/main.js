import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

createApp(App)
.use(router)
.use(bootstrap)
.mount('#app')
