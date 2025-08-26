import { routers } from '@/router/routers.js'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: routers,
})

// Navigation Guards для проверки аутентификации и прав доступа
router.beforeEach(async (to, from, next) => {
  // Проверяем, требует ли маршрут аутентификации
  if (to.meta.requiresAuth) {
    // Получаем состояние аутентификации из localStorage или sessionStorage
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    const isAdmin = localStorage.getItem('isAdmin') === 'true'

    if (!isAuthenticated) {
      // Если не аутентифицирован - перенаправляем на библиотеку
      next('/library')
      return
    }

    // Проверяем, требует ли маршрут админ прав
    if (to.meta.requiresAdmin && !isAdmin) {
      // Если не админ - перенаправляем на библиотеку
      next('/library')
      return
    }
  }

  // Если все проверки пройдены - разрешаем переход
  next()
})
