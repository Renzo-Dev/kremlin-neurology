export const routers = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/views/History.vue'),
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/conferences',
    name: 'Conferences',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/young-neurologists',
    name: 'YoungNeurologists',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
