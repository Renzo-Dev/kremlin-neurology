import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      // const url = `http://localhost:5000/api/auth`
      const url = `${window.location.origin}/api/auth`

      const response = await fetch(url, {
        credentials: 'include', // важно для кук-сессий
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()

      if (!response.ok || data.authenticated !== true) {
        return next('/library') // неавторизованный доступ
      }
      if (to.path === '/LibraryManager') {
        if (!data.isAdmin) {
          console.error('Доступ запрещен: недостаточно прав')
          return next('/library') // доступ запрещен
        }
      }

      next() // Доступ разрешен
    } catch (e) {
      console.error('Ошибка проверки сессии:', e)
      next('/library')
    }
  } else {
    next()
  }
})

export { router }
