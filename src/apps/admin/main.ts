import { createApp } from 'vue';
import '@admin/style.less';
import App from '@admin/App.vue';
import router from '@admin/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
