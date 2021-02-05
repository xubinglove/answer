import 'reset-css'
import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'
import { fetchData } from './axios/axios'
import router from './router'
import './vendor/mock'
Vue.prototype.$axios = fetchData;

Vue.config.productionTip = false
Vue.config.devtools = false;
//test116688

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
