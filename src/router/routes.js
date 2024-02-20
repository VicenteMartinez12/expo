
const routes = [
  {
    path: '/',
    component: () => import('pages/TurnosPage3.vue'),

    
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    
    ]
  },
  {
    path: '/turno3', 
    component: () => import('pages/TurnosPage3.vue'),
    
  },
  {
    path: '/pasillo', 
    component: () => import('pages/TurnosPasilloPage.vue'),
    
  },
  {
    path: '/pasillo2', 
    component: () => import('pages/TurnosPasilloPage2.vue'),
    
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
