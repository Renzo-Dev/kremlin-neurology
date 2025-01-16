export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/learning',
    name: 'Learning',
    component: () => import('../views/Learning.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue'),
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/Research.vue'),
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/Library.vue'),
  },
  {
    path: '/clientbase',
    name: 'ClientBase',
    component: () => import('../views/ClientBase.vue'),
  },
  {
    path: '/annualconferences',
    name: 'AnnualConferences',
    component: () => import('../views/AnnualConferences.vue'),
  },
  {
    path: '/youngneurologists',
    name: 'YoungNeurologists',
    component: () => import('../views/YoungNeurologists.vue'),
  },
  {
    path: '/newsupdates',
    name: 'NewsUpdates',
    component: () => import('../views/NewsUpdates.vue'),
  },
  {
    path: '/contactinfo',
    name: 'ContactInfo',
    component: () => import('../views/ContactInfo.vue'),
  },
]
