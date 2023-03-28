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
        component: () => import('@admin/views/about/index.vue'),
        meta: {
            title: '管理员',
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@admin/views/home/index.vue'),
    },
];

const router = createRouter({
    history: import.meta.env.DEV ? createWebHashHistory() : createWebHistory('admin'),
    // history:createWebHistory("admin"),
    routes,
});

export default router;
