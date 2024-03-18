import {createRouter, createWebHistory} from 'vue-router'
import authStore from '../stores/auth'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Create from '../views/posts/Create.vue'
import Edit from '../views/posts/Edit.vue'
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
    {
        path: '/posts/create',
        name: 'create-post',
        component: Create,
        meta: {auth: true},
    },
    {
        path: '/posts/:id/edit',
        name: 'edit-post',
        component: Edit,
        meta: {auth:true}
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router