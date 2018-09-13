import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('@components/home')), 'home')
  }, {
    path: '/demo',
    component: r => require.ensure([], () => r(require('../page/item')), 'item')
  }, {
    path: '/home',
    component: r => require.ensure([], () => r(require('../page/score')), 'score')
  }]
}]
