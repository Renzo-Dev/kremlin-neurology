export const routes = [
  // Главная
  { path: '/', name: 'Home', component: () => import('@/pages/home/Home.vue') },
  {
    path: '/contactinfo',
    name: 'ContactInfo',
    component: () => import('@/pages/home/ContactInfo.vue'),
  },

  // Обучение
  {
    path: '/learning',
    name: 'Learning',
    component: () => import('@/pages/learning/Learning.vue'),
  },
  {
    path: '/ordinatura',
    name: 'Ordinatura',
    component: () => import('@/pages/learning/Ordinatura.vue'),
  },
  {
    path: '/aspirantura',
    name: 'Aspirantura',
    component: () => import('@/pages/learning/Aspirantura.vue'),
  },
  {
    path: '/retraining',
    name: 'Retraining',
    component: () => import('@/pages/learning/Professional_retraining.vue'),
  },
  {
    path: '/certification_cycles',
    name: 'CertificationCycle',
    component: () => import('@/pages/learning/Certification_cycles.vue'),
  },

  // Научно-практические конференции
  {
    path: '/scientific_practical',
    name: 'ScientificPractical',
    component: () =>
      import('@/pages/scientific_practical/Scientific_practical.vue'),
  },
  ...[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017].map(year => ({
    path: `/scientific_practical/${year}`,
    name: `ScientificPractical${year}`,
    component: () => import(`@/pages/scientific_practical/${year}.vue`),
  })),

  // Прочие страницы
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
    path: '/privateLibrary',
    name: 'privateLibrary',
    component: () => import('@/pages/PrivateLibrary.vue'),
    meta: { requiresAuth: true },
  },  {
    path: '/libraryManager',
    name: 'libraryManager',
    component: () => import('@/pages/LibraryManager.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/clientbase',
    name: 'ClientBase',
    component: () => import('@/pages/ClientBase.vue'),
  },
  {
    path: '/youngneurologists',
    name: 'YoungNeurologists',
    component: () => import('@/pages/YoungNeurologists.vue'),
  },
  {
    path: '/newsupdates',
    name: 'NewsUpdates',
    component: () => import('@/pages/news/NewsUpdates.vue'),
  },

  // Образовательные мероприятия
  {
    path: '/educational',
    name: 'Educational',
    component: () => import('@/pages/Educational/Educational.vue'),
  },
  {
    path: '/educational/2017',
    name: 'Educational2017',
    component: () => import('@/pages/Educational/2017.vue'),
  },
  {
    path: '/educational/2018',
    name: 'Educational2018',
    component: () => import('@/pages/Educational/2018.vue'),
  },

  // Больница
  {
    path: '/gkb51dzm',
    name: 'Gkb51dzm',
    component: () => import('@/pages/GKB51.vue'),
  },

  // 404 редирект
  { path: '/:pathMatch(.*)*', redirect: '/' },
]
