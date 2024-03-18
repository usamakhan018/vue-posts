<template>
  <h1>This is home but a fancy one.</h1>
  <table>
    <tr>
      <th>ID</th>
      <th>title</th>
      <th>content</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item of post.posts" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.content }}</td>
      <td>
        <v-btn :to="{name: 'edit-post', params: {id: item.id}}">Edit post</v-btn>
        <v-btn @click.prevent="post.deletePost(item.id)">Delete Post</v-btn>
      </td>
    </tr>
  </table>

</template>

<script setup>
import { onMounted, onUpdated } from "vue";
import postStore from "../stores/posts";

const post = postStore()
post.getPosts()
</script>

<style>

</style>