<template>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/1.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <template v-if="is_auth==1">
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" :to="{name: 'home'}"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Logout" value="logout" @click="auth.logout()"></v-list-item>
          </template>
          <template v-else-if="!is_auth==0">
          <v-list-item prepend-icon="mdi-account" title="Login" value="account" :to="{name: 'login'}"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Register" value="users" :to="{name: 'register'}"></v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
</template>
<script setup>
import { ref } from 'vue'
import authStore from '../../stores/auth';
const auth = authStore()
const is_auth = localStorage.getItem('is_auth')
const drawer = ref(true)
const rail = ref(false)
</script>