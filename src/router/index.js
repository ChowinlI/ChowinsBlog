import Vue from 'vue'
import Router from 'vue-router'
/** webpack模板懒加载方法 */
const index = resolve => require.ensure([], () => resolve(require('@/pages/Index.vue')), 'index');
const friends = resolve => require.ensure([], () => resolve(require('@/pages/Friends.vue')), 'friends');
const roast = resolve => require.ensure([], () => resolve(require('@/pages/Roast.vue')), 'roast');
const about = resolve => require.ensure([], () => resolve(require('@/pages/About.vue')), 'about');
const article = resolve => require.ensure([], () => resolve(require('@/pages/Article.vue')), 'article');

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
      path: '/friends',
      name: 'Friends',
      component: friends
    },
    {
      path: '/roast',
      name: 'Roast',
      component: roast
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: article
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
