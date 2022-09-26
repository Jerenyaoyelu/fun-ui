import { createApp } from 'vue';
import './style.less';
import App from './App.vue';
import { router } from '@/pages/routes';

createApp(App).use(router).mount('#app');
