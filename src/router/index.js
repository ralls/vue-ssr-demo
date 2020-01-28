/* eslint-disable import/prefer-default-export */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const createRouter = () => {
    const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpckChunkName: "about" */ '../views/About.vue')
        }
    ]
    return new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
}

export { createRouter }
