import { createRouter, createWebHistory } from 'vue-router'
import { routers } from '@/router/routers.js'

export const router = createRouter({
  history: createWebHistory(),
  routes: routers,
})
