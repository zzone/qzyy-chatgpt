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
        component: () => import('@client/views/about/index.vue'),
        meta: {
            title: '管理员',
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@client/views/home/index.vue'),
    },
];

const router = createRouter({
    history: import.meta.env.DEV ? createWebHashHistory() : createWebHistory('client'),
    // history:createWebHistory("admin"),
    routes,
});

export default router;
