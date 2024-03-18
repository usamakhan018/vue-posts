<script setup>
import Header from './views/snippets/Header.vue'
</script>

<template>
  <v-app> 
    <v-layout>
      <Header></Header>
      <v-main>
      <router-view></router-view>
    </v-main>
    </v-layout>
</v-app>
</template>
  