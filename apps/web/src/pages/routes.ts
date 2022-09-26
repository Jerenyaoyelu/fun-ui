import * as VueRouter from 'vue-router';

const Home = () => import('@/pages/Home/index.vue');
const Loading = () => import('@/pages/loading/index.vue');
const Hover = () => import('@/pages/hover/index.vue');
const CoolList = () => import('@/pages/hover/CoolList.vue');

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
    children: [
      {
        path: 'cool-list', // 嵌套路由开头不能带/
        name: 'CoolList',
        component: CoolList,
      },
    ],
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
