
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/log.vue'), 
  },
  {
    path: '/shop',
    component: () => import('../views/shop.vue'), 
    meta: {
      requiresAuth: true, 
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
