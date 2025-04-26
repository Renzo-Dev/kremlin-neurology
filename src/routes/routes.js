export const routes = [
  // Главная
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home.vue'),
  },
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
  {
    path: '/scientific_practical/2010',
    name: 'ScientificPractical2010',
    component: () => import('@/pages/scientific_practical/2010.vue'),
  },
  {
    path: '/scientific_practical/2011',
    name: 'ScientificPractical2011',
    component: () => import('@/pages/scientific_practical/2011.vue'),
  },
  {
    path: '/scientific_practical/2012',
    name: 'ScientificPractical2012',
    component: () => import('@/pages/scientific_practical/2012.vue'),
  },
  {
    path: '/scientific_practical/2013',
    name: 'ScientificPractical2013',
    component: () => import('@/pages/scientific_practical/2013.vue'),
  },
  {
    path: '/scientific_practical/2014',
    name: 'ScientificPractical2014',
    component: () => import('@/pages/scientific_practical/2014.vue'),
  },
  {
    path: '/scientific_practical/2015',
    name: 'ScientificPractical2015',
    component: () => import('@/pages/scientific_practical/2015.vue'),
  },
  {
    path: '/scientific_practical/2016',
    name: 'ScientificPractical2016',
    component: () => import('@/pages/scientific_practical/2016.vue'),
  },
  {
    path: '/scientific_practical/2017',
    name: 'ScientificPractical2017',
    component: () => import('@/pages/scientific_practical/2017.vue'),
  },

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
  {
    path: '/gkb51dzm',
    name: 'Gkb51dzm',
    component: () => import('@/pages/GKB51.vue'),
  },

  // 404 redirect
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
