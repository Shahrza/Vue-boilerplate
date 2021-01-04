/*
 =========================================================
 * Vue Dashboard - v0.0.1
 =========================================================

 * Product Page: https://shahrza.com
 * Copyright 2021 Shahrza Mugbilli (https://shahrza.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/app.scss'

// Plugins
import moment from 'moment'
import loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// Vue.use(Vuelidate);
// Vue.use(VueTheMask);
// Vue.use(loading, {color: '#4a61e8'});

window.$ = window.jQuery = require('jquery');

export const eBus = new Vue();

Vue.prototype.moment = moment

Vue.config.productionTip = false;

console.log(process.env.VUE_APP_BASE_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
