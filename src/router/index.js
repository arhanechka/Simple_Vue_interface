import Vue from 'vue'
import Router from 'vue-router'
// Pages
import RegistrationComponent from '../components/pages/RegistrationComponent.vue'
import MainComponent from '../components/pages/MainComponent.vue'
import LoginComponent from '../components/pages/LoginComponent.vue'
import CabinetComponent from '../components/pages/CabinetComponent.vue'

import App from '@/App'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainComponent',
      component: MainComponent
    },
    {
      path: '/reg',
      name: 'RegistrationComponent',
      component: RegistrationComponent
    },
    {
      path: '/login',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/cabinet',
      name: 'CabinetComponent',
      component: CabinetComponent
    }

  ]
})
