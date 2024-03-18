<script setup>
import Header from './views/snippets/Header.vue'
import {useRoute} from 'vue-router'

const route = useRoute()

</script>

<template>
  <v-app> 
    <v-layout>
      <Header :key="route.fullPath"></Header>
      <v-main>
      <router-view></router-view>
    </v-main>
    </v-layout>
</v-app>
</template>