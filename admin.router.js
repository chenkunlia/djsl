// import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/admin/layout'
const cp = (r, url) => { return require.ensure([], () => r(require('@/views' + url)), 'index') }

const _router = [
  {path: '', name: 'admin', component: r => cp(r, '/admin/Demo')},
  {path: '/admin', name: 'index', component: r => cp(r, '/admin/Demo')},
  {path: '/admin/login', name: 'home', component: r => cp(r, '/admin/login')}
]

Vue.use(Router)
const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/admin/login'),
    hidden: true
  },
  {
    path: '/authredirect',
    component: () => import('@/views/admin/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/admin/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/admin/errorPage/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    name: 'index',
    meta: { title: 'dashboard', icon: 'dashboard' },
    children: [
      {path: 'dashboard', component: () => import('@/views/admin/Demo'), name: 'Dashboard', meta: { title: 'dashboard', icon: 'dashboard', noCache: true} }
    ]
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home',
    name: 'home',
    meta: { title: 'home', icon: 'component' },
    children: [
      {path: '/home', component: () => import('@/views/admin/Home'), name: 'index', meta: { title: 'home', icon: 'component', noCache: true} }
    ]
  }
]
// for(var r in _router){
//   let route={
//     path: _router[r].path,
//     component: Layout,
//     redirect: 'noredirect',
//     name: _router[r].name,
//     children: [
//       {
//               path: '',
//               component: _router[r].component,
//               name: _router[r].name,
//               meta: { title: _router[r].name, icon: 'dashboard', noCache: true }
//       }
//     ]
//   }
//   constantRouterMap.push(route)
// }
// path: '/components',
//   component: Layout,
//   redirect: 'noredirect',
//   name: 'ComponentDemo',
//   meta: {
//     title: 'components',
//     icon: 'component'
//   },
//   children: [
//     {
//       path: 'tinymce',
//       component: () => import('@/views/components-demo/tinymce'),
//       name: 'TinymceDemo',
//       meta: { title: 'tinymce' }
//     },
// {
//   path: '',
//   component: Layout,
//   redirect: 'dashboard',
//   children: [
//     {
//       path: 'dashboard',
//       component: () => import('@/views/dashboard'),
//       name: 'Dashboard',
//       meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
//     }
//   ]
// },

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap // _router
  // base: process.env.NODE_ENV === 'production' ? '/' : '/admin/'
})
