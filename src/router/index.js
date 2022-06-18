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
    { //category start
      path: '/admin/category',
      component: () => import('../views/Admin/Category/index.vue')
    },
    {
      path: '/admin/category/edit/:id',
      component: () => import('../views/Admin/Category/edit.vue')
    },
    {
      path: '/admin/category/create',
      component: () => import('../views/Admin/Category/create.vue')
    } //category end

    //product
    


  ]
})

export default router
