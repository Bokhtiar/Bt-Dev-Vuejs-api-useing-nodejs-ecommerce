import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/User/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/User/About.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue')
    }
  ]
})

export default router
