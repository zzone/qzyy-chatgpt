import {
 createRouter, createWebHashHistory, createWebHistory, RouteRecord, RouteRecordRaw,
} from 'vue-router';

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@chat/views/about/index.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@chat/views/home/index.vue'),
    },
];

const router = createRouter({
    history: import.meta.env.DEV ? createWebHashHistory() : createWebHistory('chat'),
    // history:createWebHistory("chat"),
    routes,
});

export default router;
