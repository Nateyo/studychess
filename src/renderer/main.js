import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import jquery from 'jquery'

import 'chess.js/chess.min.js'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
