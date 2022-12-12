
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
 import 'bootstrap/dist/css/bootstrap.css'
 import 'bootstrap-vue/dist/bootstrap-vue.css'

 import { plugin, defaultConfig } from '@formkit/vue'

 



const app = createApp(App).use(plugin, defaultConfig)

app.use(router)

app.mount('#app')
