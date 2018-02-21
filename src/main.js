// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import RegistrationComponent from './components/pages/RegistrationComponent.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import Vuetify from 'vuetify'
import store from './store'

import('../node_modules/vuetify/dist/vuetify.min.css')
Vue.use(VueCookie)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'app',
  router,
  components: { App },
  store,
  template: '<App/>'
})

// import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
// import App from './App'
// import router from './router'
// import * as axios from './backend/vue-axios'
// import store from './store'

// Vue.config.productionTip = false
// Vue.config.devtools = true
// Vue.use(BootstrapVue);

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   axios,
//   store,
//   template: '<App/>',
//   components: { App }
// })
