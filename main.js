import { router } from '@/routes/route'
import { createApp } from 'vue'
import App from './App.vue'
// main.js/ts

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
