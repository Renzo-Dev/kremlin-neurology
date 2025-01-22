export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/learning',
    name: 'Learning',
    component: () => import('../pages/Learning.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../pages/History.vue'),
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../pages/Research.vue'),
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../pages/Library.vue'),
  },
  {
    path: '/clientbase',
    name: 'ClientBase',
    component: () => import('../pages/ClientBase.vue'),
  },
  {
    path: '/annualconferences',
    name: 'AnnualConferences',
    component: () => import('../pages/AnnualConferences.vue'),
  },
  {
    path: '/youngneurologists',
    name: 'YoungNeurologists',
    component: () => import('../pages/YoungNeurologists.vue'),
  },
  {
    path: '/newsupdates',
    name: 'NewsUpdates',
    component: () => import('../pages/NewsUpdates.vue'),
  },
  {
    path: '/contactinfo',
    name: 'ContactInfo',
    component: () => import('../pages/ContactInfo.vue'),
  },
  {
    path: '/employees/Vladimir_Ivanovich_Shmyrev',
    name: 'Vladimir_Ivanovich_Shmyrev',
    component: () =>
      import('../pages/employees/Vladimir_Ivanovich_Shmyrev.vue'),
  },
]
