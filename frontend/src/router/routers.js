export const routers = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/pages/Education.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('@/pages/History.vue'),
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('@/pages/Research.vue'),
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('@/pages/Library.vue'),
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('@/pages/Clients.vue'),
  },
  {
    path: '/conferences',
    name: 'Conferences',
    component: () => import('@/pages/Conferences.vue'),
  },
  {
    path: '/young-neurologists',
    name: 'YoungNeurologists',
    component: () => import('@/pages/YoungNeurologists.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/pages/News.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/pages/Contacts.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
