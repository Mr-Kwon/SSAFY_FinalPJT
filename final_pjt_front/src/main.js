import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.config.productionTip = false
library.add(fas)
Vue.component('font-awesome-icon',FontAwesomeIcon)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
