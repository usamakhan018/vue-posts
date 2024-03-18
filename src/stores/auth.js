import {defineStore} from 'pinia'
import axios from 'axios'
const authStore = defineStore('auth', {
    states: () => ({
        authUser: null,
        is_authenticated: localStorage.getItem('is_auth')
    }),
    getters: {
        user: (state) => state.authUser,
        is_auth: (state) => state.is_authenticated
    },
    actions: {
        async getCSRFCookie() {
            await axios.get('sanctum/csrf-cookie')
        },
        async getUser() {
            const res = await axios.get('api/user')
            console.log(res.data)
            this.authUser = res.data
        },
        async login(data){
            await this.getCSRFCookie()
            const res = await axios.post('login', data)
            console.log(res)
            await this.getUser()
            localStorage.setItem('is_auth', true)
            this.router.push({name: 'home'})
        },
        async register(data){
            await this.getCSRFCookie()
            const res = await axios.post('register', data)
            console.log(res)
            await this.getUser()
            localStorage.setItem('is_auth', true)
            this.router.push({name: 'home'})
        },
        async logout() {
            await this.getCSRFCookie()
            const res = await axios.post('logout')
            localStorage.setItem('is_auth', false)
            console.log(res.data)
            this.router.push({name: 'login'})
        }
    }


})

export default authStore