import {defineStore} from 'pinia'
import axios from 'axios'
const localUser = JSON.parse(localStorage.getItem('user'))
const authStore = defineStore('auth', {
    states: () => ({
        authUser: localUser
    }),
    getters: {
        user: (state) => state.authUser,
    },
    actions: {
        async getCSRFCookie() {
            await axios.get('sanctum/csrf-cookie')
        },
        async getUser() {
            const res = await axios.get('api/user')
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
        },
        async login(data){
            await this.getCSRFCookie()
            const res = await axios.post('login', data)
            console.log(res)
            await this.getUser()
            this.router.push({name: 'home'})
        },
        async register(data){
            await this.getCSRFCookie()
            const res = await axios.post('register', data)
            await this.getUser()
            this.router.push({name: 'home'})
        },
        async logout() {
            await this.getCSRFCookie()
            const res = await axios.post('logout')
            localStorage.setItem('user', null)
            this.router.push({name: 'login'})
        }
    }


})

export default authStore