import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      const url = `http://localhost:5000/check_session.php`
      // const url = `/app/check_session.php`
      const response = await fetch(url, {
        credentials: 'include', // важно для кук-сессий
      })
      const data = await response.json()

      if (response.ok && data.authenticated === true) {
        next()
      } else {
        next('/library') // редирект, если неавторизован
      }
    } catch (e) {
      console.error('Ошибка проверки сессии:', e)
      next('/library')
    }
  } else {
    next()
  }
})

export { router }
