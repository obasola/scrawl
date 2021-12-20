import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/scss/bootstrap.scss'
import "bootstrap"

const app = createApp(App);
app
  .use(router)
  .use(createPinia())
  .use(VueAxios, axios)
  .provide('axios', app.config.globalProperties.axios)  // provide 'axios'
  .mount('#app')
