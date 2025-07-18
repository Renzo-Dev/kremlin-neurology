import { router } from '@/router/router.js'
import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/styles/style.css'
import '@/assets/styles/reset.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
