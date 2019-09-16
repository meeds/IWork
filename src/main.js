import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AuthMixin from './mixin/AuthMixin'

Vue.config.productionTip = false;
Vue.mixin(AuthMixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
