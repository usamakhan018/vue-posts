import {defineStore} from 'pinia'
import axios from 'axios'

const postStore = defineStore('posts', {
    states: () => ({
        all_posts: null
    }),
    getters: {
        posts: (state) => state.all_posts
    },
    actions: {
        async getPosts() {
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await axios.post('api/posts', {id: user.id})
            console.log(res.data)
            this.all_posts = res.data
            this.router.push({name: 'home'})
        },
        async createPost(data) {
            const user = JSON.parse(localStorage.getItem('user'))
            const res = await axios.post('api/posts/create', {
                user_id: user.id,
                title: data.title,
                content: data.content,
            })
            console.log(res)
            this.router.push({name: 'home'})
        },
        async updatePost(data) {
            const res = await axios.post(`api/posts/${data.id}/update`, {
                user_id: data.user_id,
                title: data.title,
                content: data.content,
            })
            console.log(res.data)
            this.router.push({name: 'home'}) 
            thi
        },
        async deletePost(id) {
            const res = await axios.post(`api/posts/${id}/delete`)
            console.log(res.data);
            this.router.push({name: 'home', reload: true})   
        }, 
        async getPost(id) {
            const res = await axios.get('api/post/'+id)
            console.log(res.data) 
            return res.data
        }

    }

})

export default postStore