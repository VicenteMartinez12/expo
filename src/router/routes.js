
const routes = [
  {
    path: '/',
    component: () => import('pages/TurnosPasilloPage5.vue'),

    
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    
    ]
  },
  {
    path: '/pasillo', 
    component: () => import('pages/TurnosPasilloPage4.vue'),
    
  },
  {
    path: '/stand', 
    component: () => import('pages/TurnosStand.vue'),
    
  },
  {
    path: '/stand2', 
    component: () => import('pages/TurnosStand2.vue'),
    
  },
  {
    path: '/pasillos', 
    component: () => import('pages/TurnosPasilloPage4.vue'),
    
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
