import { createRouter, createWebHashHistory } from 'vue-router'
import { routers } from '@/router/routers.js'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
})
