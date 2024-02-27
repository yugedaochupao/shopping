import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/log.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path:'/log',
    name:'log',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/log.vue')
   }
  },
  {
    path:'/shop',
    name:'shop',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/shop.vue')
   }
  },
  {
    path: '/log',
    component: () => import('../views/log.vue'), 
  },
  {
    path: '/shop',
    component: () => import('../views/shop.vue'), 
    meta: {
      requiresAuth: true, 
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
