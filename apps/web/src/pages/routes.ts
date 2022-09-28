import * as VueRouter from 'vue-router';

const Home = () => import('@/pages/Home/index.vue');
const Loading = () => import('@/pages/loading/index.vue');
const CoolList = () => import('@/pages/hover/CoolList.vue');
const HoverClose = () => import('@/pages/hover/HoverClose.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/hover/cool-list',
    name: 'CoolList',
    component: CoolList,
  },
  {
    path: '/hover/hover-close',
    name: 'HoverClose',
    component: HoverClose,
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
