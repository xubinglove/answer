import 'reset-css'
import Vue from 'vue'
import './vendor/rem'
import App from './App'
import store from './store'
import axios from 'axios'
import {fetchData} from './axios/axios'
import router from './router'
import vueCicle from 'vue-cicle'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import scratch from 'vue-scratch'
import ninecell from 'vue-ninecell'
Vue.prototype.$axios = fetchData;

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(vueCicle)
Vue.use(scratch);
Vue.use(ninecell)
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})