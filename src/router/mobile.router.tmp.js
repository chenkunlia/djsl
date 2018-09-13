// import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
const cp = (r, url) => { return require.ensure([], () => r(require('@/views' + url)), 'index') }

const _router = [
  {path: '/mobile', name: 'index', component: r => cp(r, '/mobile/Demo')},
  {path: '/mobile/home', name: 'home', component: r => cp(r, '/mobile/Home')}
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: _router
  // base: process.env.NODE_ENV === 'production' ? '/' : '/mobile/'
})
