/*
 =========================================================
 * Vue Boilerplate - v0.0.1
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
import '@/assets/styles/index.scss'

// Plugins
import Moment from 'moment'
import Vuelidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import i18n from './i18n'

Vue.use(Vuelidate);
Vue.use(VueTheMask);
Vue.use(Loading, {color: '#4a61e8'})

export const eventBus = new Vue();

// Filters
Vue.filter('formatDate', function(value) {
  if (value) {
    return Moment(new Date(value)).format('L');
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
