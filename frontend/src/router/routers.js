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
    path: '/education/ordinatura',
    name: 'Ordinatura',
    component: () => import('@/pages/Education/Ordinatura.vue'),
  },
  {
    path: '/education/aspirantura',
    name: 'Aspirantura',
    component: () => import('@/pages/Education/Aspirantura.vue'),
  },
  {
    path: '/education/professional-retraining',
    name: 'ProfessionalRetraining',
    component: () => import('@/pages/Education/ProfessionalRetraining.vue'),
  },
  {
    path: '/education/certification-cycles',
    name: 'CertificationCycles',
    component: () => import('@/pages/Education/CertificationCycles.vue'),
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
    path: '/admin',
    name: 'AdminPanel',
    component: () => import('@/pages/AdminPanel.vue'),
    meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('@/pages/Clients.vue'),
  },

  {
    path: '/gkb51',
    name: 'ГКБ51ДЗМ',
    component: () => import('@/pages/ГКБ51ДЗМ.vue'),
  },
  {
    path: '/ckbp',
    name: 'ЦКБП',
    component: () => import('@/pages/ЦКБП.vue'),
  },
  {
    path: '/kb1vol',
    name: 'КБ1Волынская',
    component: () => import('@/pages/КБ1Волынская.vue'),
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
