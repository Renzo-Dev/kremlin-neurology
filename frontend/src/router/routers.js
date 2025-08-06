export const routers = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/pages/Home.vue'),
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
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/clientsbase',
    name: 'Clients',
    component: () => import('@/pages/ClientBase.vue'),
  },
  {
    path: '/educational',
    name: 'Educational',
    component: () => import('@/pages/Educational/Educational.vue'),
  },
  ...[2017, 2018].map(year => ({
    path: `/educational/${year}`,
    name: `educational${year}`,
    component: () => import(`@/views/Educational/${year}.vue`),
  })),

  {
    path: '/young-neurologists',
    name: 'YoungNeurologists',
    component: () => import('@/pages/YoungNeurologists.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/pages/Home.vue'),
  },

  {
    path: '/gkb51dzm',
    name: 'Gkb51dzm',
    component: () => import('@/pages/GKB51.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
