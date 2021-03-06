import { createApp } from 'vue';
import App from '@/app.vue';
import router from '@/router/index';
import vuex from '@/store/index';
const app = createApp(App);
app.use(router);
app.use(vuex);
app.mount('#app');
