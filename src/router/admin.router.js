// import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
const cp = (r, url) => { return require.ensure([], () => r(require('@/views' + url)), 'index') }

const _router = [
  {path: '', name: 'admin', component: r => cp(r, '/admin/Demo')},
  {path: '/admin', name: 'index', component: r => cp(r, '/admin/Demo')},
  {path: '/admin/home', name: 'home', component: r => cp(r, '/admin/Home')}
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: _router
  // base: process.env.NODE_ENV === 'production' ? '/' : '/admin/'
})
