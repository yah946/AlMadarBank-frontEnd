import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/About.vue')
    },
    {
      name: 'career',
      path: '/career',
      component: () => import('@/views/Career.vue')
    },
    {
      name: 'support',
      path: '/support',
      component: () => import('@/views/Support.vue')
    },
    {
      name: 'accounts',
      path: '/accounts',
      component: () => import('@/views/Accounts.vue')
    },
    {
      name: 'transfers',
      path: '/transfers',
      component: () => import('@/views/Transfer.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/LogIn.vue')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('@/views/Register.vue')
    },
    {
      name: 'logout',
      path: '/logout',
      // components: ()=> ,
    },
  ],
})

export default router
