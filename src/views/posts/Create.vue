<template>
    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent="post.createPost(form)">
        <v-text-field v-model="form.title" variant="outlined" label="Title"></v-text-field>
        <v-textarea v-model="form.content" label="Content" variant="outlined"></v-textarea>
        <v-btn class="mt-2" type="submit" block>Create Post</v-btn>
      </v-form>
    </v-sheet>
  </template>

<script setup>

import { ref } from 'vue'
import postStore from '../../stores/posts'

const post = postStore()
const form = ref({
    title: null,
    content: null
})

</script>