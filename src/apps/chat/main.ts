import { createApp } from 'vue';
import '@chat/style.less';
import App from '@chat/App.vue';
import router from '@chat/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
