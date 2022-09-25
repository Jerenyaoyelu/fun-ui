import * as VueRouter from 'vue-router';

import Home from '@/pages/Home/index.vue';
import Loading from '@/pages/loading/index.vue';
import Hover from '@/pages/hover/index.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/loading',
    component: Loading,
  },
  {
    path: '/hover',
    component: Hover,
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
