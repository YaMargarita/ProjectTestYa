import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'AllList',
        component: () => import('../components/AllList')
    },
    {
        path: '/create',
        name: 'CreateUser',
        component: () => import('../components/CreateUser'),
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => import('../components/User')
    },
    {
        path: '/404',
        name: 'PageNotFound',
        component: () => import('../components/PageNotFound')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router