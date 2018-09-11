import Vue from 'vue'
import Router from 'vue-router'
// import Demo from '@/components/Demo'
// import Demo from '@/components/Demo'
// import Home from '@/components/Home'
// import { resolve } from 'dns'

/* const cp = function (url) {
  return require.ensure(['@/components' + url + '.vue'], () => {
    resolve(require('@/components' + url + '.vue'))
  })
} */
Vue.use(Router)
const cp = (r, url) => { return require.ensure([], () => r(require('@/components/page' + url)), 'index') }

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: r => cp(r, '/admin/Home')
    }
  ]
})
