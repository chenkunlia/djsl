// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router/admin.js'
// import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/style.css'
Vue.config.productionTip = false
// Vue.use(VueRouter)
Vue.use(ElementUI)
// const router = new VueRouter({admin})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
