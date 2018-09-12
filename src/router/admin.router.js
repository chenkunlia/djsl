// import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
const cp = (r, url) => { return require.ensure([], () => r(require('@/views' + url)), 'index') }

const _router = [
  {path: '', name: 'admin', component: r => cp(r, '/admin/Demo')},
  {path: '/admin', name: 'index', component: r => cp(r, '/admin/Demo')},
  {path: '/admin/login', name: 'home', component: r => cp(r, '/admin/login')}
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: _router
})
