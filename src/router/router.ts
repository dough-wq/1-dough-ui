import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/button',
        name: 'Button',
        component:() => import('../components/button.vue')
    },
    {
        path: '/',
        name: 'layout',
        component:() => import('../components/layout.vue')
    }
]
const  router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})
export default router