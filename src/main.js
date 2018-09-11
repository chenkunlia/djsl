// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router/admin'
// import router from './router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang'
Vue.config.productionTip = false
// Vue.use(VueRouter)
// Vue.use(ElementUI)
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// const router = new VueRouter({admin})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
