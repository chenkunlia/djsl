// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Mobile-App'
// import VueRouter from 'vue-router'
import router from './router/mobile'
// import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/fonts/element-icons.ttf'
Vue.config.productionTip = false
// Vue.use(VueRouter)
// Vue.use(ElementUI)
// const router = new VueRouter({admin})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
