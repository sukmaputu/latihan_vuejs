import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Service from '../views/ServicePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router