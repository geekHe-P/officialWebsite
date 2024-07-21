import '@/assets/css/reset.css'
import '@/assets/css/style.css'

import { createApp } from 'vue'
import pinia from '@/stores/index.js'

import App from '@/App.vue'

const app = createApp(App)

app.use(pinia)
app.mount('#app')
