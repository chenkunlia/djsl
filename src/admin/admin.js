// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from '@/router/admin.router'
// import router from './router'

import '@/styles/index.scss' // global css
import i18n from '@/lang'
import store from '@/store'

import '@/icons' // icon
import '@/errorLog' // error log
import '@/permission' // permission control
import * as filters from '@/filters' // global filters
Vue.config.productionTip = false

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// const router = new VueRouter({admin})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
