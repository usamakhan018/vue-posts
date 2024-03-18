import { createApp, markRaw} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './axios'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
pinia.use(({store}) => {
  store.router = router
})
createApp(App).use(router).use(pinia).use(vuetify).mount('#app')
