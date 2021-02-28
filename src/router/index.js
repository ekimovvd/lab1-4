import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/atbash',
    name: 'Atbash',
    component: () => import('../views/AtbashPage.vue'),
  },
  {
    path: '/scytale',
    name: 'Scytale',
    component: () => import('../views/ScytalePage.vue'),
  },
  {
    path: '/polybius',
    name: 'Polybius',
    component: () => import('../views/PolybiusPage.vue'),
  },
  {
    path: '/caesar',
    name: 'Caesar',
    component: () => import('../views/CaesarPage.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
