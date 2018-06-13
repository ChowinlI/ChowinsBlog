import Vue from 'vue'
import Router from 'vue-router'
/** webpack模板懒加载方法 */
const index = resolve => require.ensure([], () => resolve(require('@/pages/Index.vue')), 'index');
const home = resolve => require.ensure([], () => resolve(require('@/pages/Home.vue')), 'home');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: index
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
  ]
})
