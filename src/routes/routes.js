export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/learning',
    name: 'Learning',
    component: () => import('../pages/learning/Learning.vue'),
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
    path: '/gkb51dzm',
    name: 'Gkb51dzm',
    component: () => import('../pages/Gkb51.vue'),
  },
  {
    path: '/ordinatura',
    name: 'Ordinatura',
    component: () => import('../pages/learning/Ordinatura.vue'),
  },
  {
    path: '/aspirantura',
    name: 'Aspirantura',
    component: () => import('../pages/learning/Aspirantura.vue'),
  },
  {
    path: '/retraining',
    name: 'Retraining',
    component: () => import('../pages/learning/Professional_retraining.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
