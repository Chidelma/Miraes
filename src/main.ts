import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
