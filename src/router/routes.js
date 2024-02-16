
const routes = [
  {
    path: '/',
    component: () => import('pages/TurnosPage3.vue'),

    
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
