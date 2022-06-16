import { createRouter, createWebHistory } from 'vue-router'
const token = localStorage.getItem('token')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //user route
    {
      path: '/' ,
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
    },

    //admin router
    {
      path:'/admin/dashboard',
      component: () => import('../views/Admin/index.vue'),
    },
    {
      path: '/admin/category',
      component: () => import('../views/Admin/Category/index.vue')
    },


  ]
})

export default router
