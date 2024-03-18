<template>
    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent="post.updatePost(form)">
        <v-text-field v-model="form.title" variant="outlined" label="Title"></v-text-field>
        <v-text-field v-model="form.content" variant="outlined" label="Content" type="text"></v-text-field>
        <v-btn class="mt-2" type="submit" block>Update Post</v-btn>
      </v-form>
    </v-sheet>
  </template>

<script setup>

import { onMounted, ref } from 'vue'
import postStore from '../../stores/posts'
import {useRoute} from 'vue-router'

const post = postStore()
const route = useRoute()

const form = ref({
    id: null,
    user_id: null,
    title: null,
    content: null,
})
post.getPost(route.params.id).then((thisPost) => {
    form.value.id = thisPost.id
    form.value.user_id = thisPost.user_id
    form.value.title = thisPost.title
    form.value.content = thisPost.content
})



</script>