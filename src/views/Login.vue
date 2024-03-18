<template>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="auth.login(form)">
      <v-text-field v-model="form.email" variant="outlined" label="Email"></v-text-field>
      <v-text-field v-model="form.password" variant="outlined" label="Password" type="password"></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script setup>
import { ref } from 'vue'
import authStore from '../stores/auth'
const auth = authStore()
const form = ref({
  email: null,
  password: null
})

</script>