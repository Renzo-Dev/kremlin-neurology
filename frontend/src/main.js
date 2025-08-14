import App from '@/App.vue'
import '@/assets/styles/reset.css'
import { router } from '@/router/router.js'
import { createApp } from 'vue'


const app = createApp(App)

app.use(router)
app.mount('#app')
