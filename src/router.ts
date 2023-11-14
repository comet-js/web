import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/docs/:branch/:page?',
            component: () => import('@/views/Documentation.vue'),
        },
        {
            path: '/about',
            component: () => import('@/views/About.vue'),
        },
    ],
})
