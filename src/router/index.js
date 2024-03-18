import {createRouter, createWebHistory} from 'vue-router'
import authStore from '../stores/auth'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {auth: true}
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {auth: false}
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {auth: false}
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


router.beforeEach((to,from, next)=> {
    const is_auth = localStorage.getItem('is_auth')
    console.log(to.meta.auth)
    console.log(is_auth)
    if(is_auth && !to.meta.auth) {
        next({name: 'home'})
    } else if(!is_auth && to.meta.auth) {
        next({name: 'login'})
    } else {
        next()
    }
})
export default router