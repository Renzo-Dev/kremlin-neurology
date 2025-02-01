import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes/route'
// main.js/ts

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
