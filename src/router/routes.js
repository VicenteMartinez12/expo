
const routes = [
  {
    path: '/',
    component: () => import('pages/TurnosPage.vue'),

    
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    
    ]
  },
  {
    path: '/turno2', 
    component: () => import('pages/TurnosPage2.vue'),
    
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
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
